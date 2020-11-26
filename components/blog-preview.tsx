import { FC } from "react";
import { Link } from "./link";

type BlogPreviewProps = {
  slug: string;
  title: string;
  excerpt: string;
};

export const BlogPreview: FC<BlogPreviewProps> = ({ slug, title, excerpt }) => {
  return (
    <>
      <Link href={`blog/${slug}`}>
        <a>
          <h3 className="h4">{title}</h3>
          <p>{excerpt}</p>
        </a>
      </Link>
      <style jsx>{`
        a {
          display: block;
          margin-bottom: 32px;
        }

        h3 {
          margin-bottom: 4px;
        }

        p {
          color: var(--color-text-faded);
          margin: 0;
        }
      `}</style>
    </>
  );
};
