import cn from "classNames";
import { FC } from "react";
import { Link } from "./link";

type BlogPreviewProps = {
  slug: string;
  title: string;
  excerpt: string;
  published?: boolean
};

export const BlogPreview: FC<BlogPreviewProps> = ({ slug, title, excerpt, published }) => {
  
  return (
    <>
      <Link href={`blog/${slug}`}>
        <a className={cn({ published })}>
          <h3 className="h4">{title}</h3>
          <p>{excerpt}</p>
        </a>
      </Link>
      <style jsx>{`
        a {
          display: block;
          margin-bottom: 32px;
          opacity: 0.4;
        }

        .published {
          opacity: 1;
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
