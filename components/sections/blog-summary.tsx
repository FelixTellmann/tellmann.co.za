import { BlogProps } from "pages/blog";
import React, { FC } from "react";
import { BlogPreview } from "../blog-preview";
import { SectionTitle } from "../section-title";

export const BlogSummary: FC<BlogProps> = ({ postData }) => {
  return <>
    <div>
      <SectionTitle title="Recent posts" subtitle="Recent posts from our blog" />
      {postData
       ? postData.map(({ slug, frontMatter: { title, excerpt } }) => (
          <BlogPreview key={slug} slug={slug} title={title} excerpt={excerpt} />
        ))
       : null}
    </div>
    
    <style jsx>{`
      div {
        max-width: 76.4rem;
        display: flex;
        flex-direction: column;
        margin: 0px auto;
        padding: 0 var(--page-margin);

        h2 {
          margin-bottom: 48px;
        }
      }
    `}</style>
  </>;
};