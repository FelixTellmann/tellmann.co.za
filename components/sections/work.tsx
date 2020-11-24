import Image from "next/image";
import { FC } from "react";

export const Work: FC = () => {
  return <>
    <div className="project-preview">
      <div className="content">
        <h3>Kids Living</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cumque deleniti dolorem eaque explicabo fuga impedit
          modi recusandae repellendus. Delectus dignissimos est et in ipsa itaque reiciendis, rem, sapiente tempora tempore vitae voluptas.
        </p>
      </div>
      <div className="image-slider">
        <picture className="phone" />
        <div className="image-slider__slidebar">
          <picture>
            <Image src="/images/work-preview-kids-living.jpg" width="248px" height="1200px" />
          </picture>
          <picture>
            <Image src="/images/work-preview-kids-living.jpg" width="248px" height="1200px" />
          </picture>
        </div>
      </div>
    </div>
    <style jsx>{`
      .project-preview {
        width: 100%;
        min-height: 200px;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr;
      }

      .content {
        position: relative;
        padding: 24px;
      }

      .image-slider {
        position: relative;
        height: var(--phone-height);
      }

      .image-slider__slidebar {
        position: absolute;
        top: 0;
        left: calc(0px - var(--phone-width) / 2);
        min-width: calc(100% + var(--phone-width) / 2);
        width: 100vw;
        height: var(--phone-height);
        overflow: hidden;
        padding: var(--phone-border);
        display: grid;
        grid-template-columns: repeat(auto-fill, var(--phone-inner-width););

        picture {
          width: calc(var(--phone-width) - var(--phone-border) * 2);
          height: calc(var(--phone-height) - var(--phone-border) * 2);
          display: block;
          overflow: hidden;
          overflow: -moz-scrollbars-none;
          overflow-y: scroll;
          border-radius: var(--phone-border-radius);;
          -ms-overflow-style: none;
          scrollbar-width: none;

          ::-webkit-scrollbar {
            width: 0;
            display: none;
            background: transparent;
          }
        }
      }

      .phone {
        position: absolute;
        left: calc(0px - var(--phone-width) / 2);
        width: var(--phone-width);
        height: var(--phone-height);
        display: block;
        padding: var(--phone-border);
        border-radius: var(--phone-border-radius);
        background: linear-gradient(#fff, #fff) content-box, linear-gradient(90deg, #f6f9fc, #f6f9fc) border-box;
        box-shadow: 0 50px 100px -20px rgba(50, 50, 93, .25), 0 30px 60px -30px rgba(0, 0, 0, .3), inset 0 -2px 6px 0 rgba(10, 37, 64, .35);
      }
    
    `}</style>
  
  </>;
};