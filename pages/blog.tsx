import { BlogPreview, Input, NewsletterSignup } from "components";
import matter from "gray-matter";
import { FC, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { getAllPostsSlug, getSinglePostData } from "../lib/getBlogPosts";

type PostData = {
  slug: string;
  frontMatter: {
    published?: boolean;
    title?: string;
    excerpt?: string;
    slug?: string;
  };
  matchCount?: number;
}[];

export type BlogProps = {
  postData: PostData;
};

export const Blog: FC<BlogProps> = ({ postData }) => {
  const [filteredPostData, setFilteredPostData] = useState(postData);
  
  const search = (event) => {
    if (event.currentTarget.value.replace(/\s/gi, "").length <= 2) {
      setFilteredPostData(postData);
      return;
    }
    const sanitize = (str: string) =>
      str.toLowerCase().replace(/[^\w\s]/gi, "").replace(/\s+/gi, " ").trim();
    
    const values = sanitize(event.currentTarget.value).split(" ").filter((i) => i.length > 2);
    const matcher = new RegExp(`(${values.join("|")})`, "g");
    const wordCount = values.length;
    
    let totalMatchCount = 0;
    setFilteredPostData(
      postData.reduce((acc: PostData, item) => {
        acc.push({
          ...item,
          matchCount: matcher.exec(sanitize(item.frontMatter.title)) ? matcher.exec(sanitize(item.frontMatter.title))?.length : 0
        });
        if (matcher.exec(sanitize(item.frontMatter.title))) {
          totalMatchCount =
            matcher.exec(sanitize(item.frontMatter.title))?.length > totalMatchCount
            ? matcher.exec(sanitize(item.frontMatter.title))?.length
            : totalMatchCount;
        }
        return acc;
      }, []).filter(({ frontMatter: { title }, matchCount }) => {
        if ((matchCount / totalMatchCount < 0.3 && totalMatchCount > 3) || (totalMatchCount / wordCount < 0.75 && wordCount > 6)) return false;
        return matcher.exec(sanitize(title));
      }).sort((a, b) => {
        const x = matcher.exec(sanitize(a.frontMatter.title))?.length || 0;
        const y = matcher.exec(sanitize(b.frontMatter.title))?.length || 0;
        return y - x;
      })
    );
  };
  
  return (
    <>
      <article className="blog">
        <header>
          <h1>
            Blog
          </h1>
          <p>
            Get your latest info about Shopify, ecommerce tips & tricks, and insights about Vend POS.
          </p>
          <Input placeholder="Search Articles" icon={<FiSearch />} onChange={search} />
        </header>
        <main>
          <h2>Recent Posts</h2>
          {filteredPostData.map(({ slug, frontMatter: { title, excerpt, published } }) => (
            <BlogPreview key={slug} slug={slug} title={title} excerpt={excerpt} published={published} />
          ))}
        </main>
        <footer>
          <NewsletterSignup />
        </footer>
      </article>
      <style jsx>{`
        article {
          max-width: 76.4rem;
          min-height: calc(100vh - 309px);
          display: flex;
          flex-direction: column;
          margin: 0px auto;
          padding: 0 var(--page-margin);
          padding-top: var(--section-y-padding);
          padding-bottom: var(--section-y-padding);
        }

        header {
          margin-bottom: 48px;
        }

        h1 {
          /*margin-bottom: -0.1em;
          margin-left: -0.05em;
          background-image: linear-gradient(270deg, #00bfa5 25.28%, #3182ce 59.7%, rgba(11, 197, 234, 0.67) 97.75%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.06em;
          font-size: 20rem;*/
          margin-bottom: 30px;
        }

        main {
          margin-bottom: 48px;
        }
      `}</style>
    </>
  );
};

export default Blog;

export const getStaticProps = (): { props: { postData } } => {
  const postData = getAllPostsSlug().map((slug) => {
    return {
      slug,
      frontMatter: matter(getSinglePostData(slug)).data
    };
  }).filter((item) => process.env.NODE_ENV === "development" || item?.frontMatter?.published);
  
  return { props: { postData } };
};
