import { FC } from "react";
import { Avatar } from "./Avatar";

type ArticleHeadingProps = {
  title: string
  authorAvatarUrl: string
  author: string
  publishedAt: string
  readingTime: {
    text: string
    time: number
    words: number
    minutes: number
  }
  views: string
}

export const ArticleHeading: FC<ArticleHeadingProps> = ({ title, author, authorAvatarUrl, publishedAt, readingTime, views }) => {
  return <>
    <header>
      {title && (
        <h1>
          {title}
        </h1>
      )}
      <div className="details">
        <div className="author">
          {authorAvatarUrl && <Avatar src={authorAvatarUrl} alt={author || ""} initials={author} size="24px" />}
          {(author || publishedAt) && (
            <p>
              {author}
              {author && publishedAt ? " / " : ""}
              {publishedAt}
            </p>
          )}
        </div>
        <div className="utility">
          <p>
            {readingTime ? readingTime.text : ""}
            {views || ""}
          </p>
        </div>
      </div>
    </header>
    <style jsx>{`
      h1 {
        margin-bottom: 24px;
      }

      .details {
        display: flex;
        margin-bottom: 32px;
        flex-direction: column;
        @media screen and (min-width: 600px) {
          flex-direction: row;

        }
      }

      .author {
        display: flex;
        align-items: center;
        margin-top: 8px;
      }

      .utility {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex: 1;
        margin-top: 8px;
        @media screen and (min-width: 600px) {
          justify-content: flex-end;
        }
      }
    `}</style>
  </>;
};
