import { FC, useRef } from "react";

type IframeExampleProps = {
  src: string;
  title: string;
  maxHeight?: string;
};

export const IframeExample: FC<IframeExampleProps> = ({ src, title, ...props }) => {
  const iframeRef = useRef(null);

  const setHeight = (ref) => {
    ref.current.style.height = `${ref.current.contentWindow.document.documentElement.offsetHeight}px`;
    ref.current.contentWindow.document.body.style = "overflow:hidden;";
  };

  return (
    <>
      <iframe
        ref={iframeRef}
        frameBorder="0"
        src={src}
        title={title}
        {...props}
        onLoad={() => setHeight(iframeRef)}
      />
      <style jsx>{`
        iframe {
          border: 1px solid var(--color-remark-code-title-bg);
          border-radius: 0;
          margin-left: calc(0px - var(--page-margin, 2.4rem));
          width: calc(100% + var(--page-margin, 2.4rem) * 2);
          @media screen and (min-width: 600px) {
            width: 100%;
            margin-left: 0;
            border-radius: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};
