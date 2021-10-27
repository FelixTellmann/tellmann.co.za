import { BlogProps } from "pages/blog";
import React, { FC } from "react";
import { BlogPreview } from "../blog-preview";
import { SectionTitle } from "../section-title";

export const BlogSummary: FC<BlogProps> = ({ postData }) => {
  return (
    <>
      <div>
        <SectionTitle subtitle="Recent posts from our blog" title="Recent posts" />
        {postData
          ? postData.map(({ slug, frontMatter: { title, excerpt } }) => (
              <BlogPreview key={slug} excerpt={excerpt} slug={slug} title={title} />
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
    </>
  );
};
