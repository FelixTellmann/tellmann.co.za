import cn from "classnames";
import Image from "next/image";
import { CSSProperties, FC, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const workData = [
  {
    title: "Kids Living",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cumque deleniti dolorem eaque explicabo fuga impedit
          modi recusandae repellendus. Delectus dignissimos est et in ipsa itaque reiciendis, rem, sapiente tempora tempore vitae voluptas.`,
    img: "/images/work-preview-kids-living.jpg",
    href: "#"
  },
  {
    title: "Turningpoint",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cumque deleniti dolorem eaque explicabo fuga impedit
          modi recusandae repellendus. Delectus dignissimos est et in ipsa itaque reiciendis, rem, sapiente tempora tempore vitae voluptas.`,
    img: "/images/work-preview-turningpoint.jpg",
    href: "#"
  },
  {
    title: "3",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cumque deleniti dolorem eaque explicabo fuga impedit
          modi recusandae repellendus. Delectus dignissimos est et in ipsa itaque reiciendis, rem, sapiente tempora tempore vitae voluptas.`,
    img: "/images/work-preview-matsidiso.jpg",
    href: "#"
  },
  {
    title: "3",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cumque deleniti dolorem eaque explicabo fuga impedit
          modi recusandae repellendus. Delectus dignissimos est et in ipsa itaque reiciendis, rem, sapiente tempora tempore vitae voluptas.`,
    img: "/images/work-preview-broadwayjewellers.jpg",
    href: "#"
  },
  {
    title: "4",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cumque deleniti dolorem eaque explicabo fuga impedit
          modi recusandae repellendus. Delectus dignissimos est et in ipsa itaque reiciendis, rem, sapiente tempora tempore vitae voluptas.`,
    img: "/images/work-preview-bushscarf.jpg",
    href: "#"
  },
  {
    title: "4",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cumque deleniti dolorem eaque explicabo fuga impedit
          modi recusandae repellendus. Delectus dignissimos est et in ipsa itaque reiciendis, rem, sapiente tempora tempore vitae voluptas.`,
    img: "/images/work-preview-pichulik.jpg",
    href: "#"
  }
];

type WorkProps = {
  style?: CSSProperties
}

export const Work: FC<WorkProps> = ({ style = {} }) => {
  style["--image-length"] = workData.length * 3;
  const [activeIndex, setActiveIndex] = useState(workData.length);
  const [hideTransition, setHideTransition] = useState(false);
  const [slideByTouch, setSlideByTouch] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  
  function slide(num: number) {
    if (activeIndex <= 0 && num < 0) {
      setActiveIndex(workData.length - 1);
    } else if (activeIndex >= workData.length * 3 - 1 && num > 0) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + num);
    }
  }
  
  function touchSlide(e) {
    setHideTransition(true);
    if (e.touches.length) {
      setSlideByTouch(touchStartPosition - +e.changedTouches[0].clientX);
    } else {
      setSlideByTouch(0);
    }
  }
  
  function positionSlider(e) {
    setHideTransition(false);
    const difference = touchStartPosition - e.changedTouches[0].clientX;
    if (touchStartPosition - e.changedTouches[0].clientX > 120) {
      slide(Math.floor((difference + 120) / 240));
    }
    if (touchStartPosition - e.changedTouches[0].clientX < -120) {
      console.log(touchStartPosition - e.changedTouches[0].clientX);
      console.log(Math.ceil((difference - 120) / 240));
      slide(Math.ceil((difference - 120) / 240));
    }
    
    setSlideByTouch(0);
    setTouchStartPosition(0);
  }
  
  useEffect(() => {
    if (activeIndex < workData.length) {
      setTimeout(() => {
        setHideTransition(true);
        setActiveIndex(activeIndex + workData.length);
        setTimeout(() => {
          setHideTransition(false);
        }, 200);
      }, 200);
    } else if (activeIndex >= workData.length * 2) {
      setTimeout(() => {
        setHideTransition(true);
        setActiveIndex(activeIndex - workData.length);
        setTimeout(() => {
          setHideTransition(false);
        }, 200);
      }, 200);
    }
  }, [activeIndex]);
  
  return <>
    <div className="project-preview" style={style}>
      <div className="content">
        <div className="content__spaceholder">
          {
            workData.map(({ title, description }) => (
              <div key={title} className={cn("content__item")}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))
          }
        </div>
        {
          workData.map(({ title, description }, i) => (
            <div key={title} className={cn("content__item", { active: i === activeIndex % workData.length })}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))
        }
        <nav>
          <button aria-label="View Previous Project" type="button" className="left" tabIndex={0} onClick={() => slide(-1)}><FiChevronLeft />
          </button>
          <button aria-label="View Next Project" type="button" className="right" tabIndex={0} onClick={() => slide(1)}><FiChevronRight />
          </button>
        </nav>
      </div>
      <div className="image-slider">
        <picture className="phone" />
        <div className="image-slider__slidebar">
          <div className={cn("inner", { hideTransition })}
               style={{ transform: `translateX(calc((0px - var(--phone-inner-width) - 36px) * ${activeIndex} - ${slideByTouch}px))` }}>
            {
              [...workData, ...workData, ...workData].map(({ img }, i) => (
                <>
                  <picture className={cn({ active: i === activeIndex, hideTransition })}
                           draggable
                           onTouchStart={(e) => { setTouchStartPosition(+e.touches[0].clientX); }}
                           onTouchEnd={(e) => { positionSlider(e); }}
                           onTouchMove={(e) => touchSlide(e)}>
                    <Image src={img} width="248px" height="1200px" />
                  </picture>
                </>
              ))
            }
          </div>
        </div>
        <div className="image-slider__overlay" />
      </div>
    </div>
    <style jsx>{`
      .project-preview {
        width: 100%;
        min-height: 200px;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:' . slider'
                            'content content';
        @media screen and (min-width: 1000px) {
          grid-template-areas: ' content slider';
        }
      }

      .content {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        grid-area: content;
        padding: 24px;
        @media screen and (min-width: 1000px) {
          margin-right: calc(var(--phone-width) / 2 + 36px);
        }
      }

      .content__item {
        position: absolute;
        right: 0;
        left: 0;
        min-width: 300px;
        max-width: 600px;
        opacity: 0;
        padding: 0 36px;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
        transition: opacity 0.2s ease;
        @media screen and (min-width: 400px) {
          min-width: 400px;
        }

        @media screen and (min-width: 1000px) {
          min-width: 300px;
          max-width: 450px;
          padding-left: 36px;
          text-align: left;
        }

        &.active {
          opacity: 1;
          transition: opacity ease 0.2s 0.2s;
        }

        @media screen and (min-width: 1000px) {
          text-align: left;

        }
      }

      .content__spaceholder {
        position: relative;
        opacity: 0;
        display: flex;
        max-width: 100vw;
        overflow: hidden;

        .content__item {
          position: relative;
          user-select: none;
          touch-action: none;
          pointer-events: none;
        }

        @media screen and (min-width: 1000px) {
          display: none;
        }
      }

      nav {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -40px;
        z-index: 1;
        display: flex;
        font-size: 32px;

        @media screen and (min-width: 1000px) {
          left: unset;
          transform: none;
          top: unset;
          right: var(--phone-frame-margin);
          bottom: calc(var(--phone-frame-margin) * 2.2);
        }

        button {
          cursor: pointer;
          font-size: inherit;
          margin: 0 20px;
          color: var(--color-text);
          @media screen and (min-width: 1000px) {
            margin: 0 10px;

          }

          &:hover, &:focus, &:active {
            color: var(--color-text-faded);;
          }
        }
      }

      .image-slider {
        position: relative;
        height: calc(var(--phone-height) + var(--phone-frame-margin) * 2);
        grid-area: slider;
        background: var(--color-grey-bg-1);
      }

      .image-slider__overlay {
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        left: calc(var(--phone-width) / 2);
        width: auto;
        height: 100%;
        overflow: hidden;
        background: linear-gradient(90deg, rgba(var(--color-background-rgb), 0), rgba(var(--color-background-rgb), 1))
      }

      .image-slider__slidebar {
        position: absolute;
        top: 0;
        right: 0;
        left: calc(0px - var(--phone-width) / 2);
        width: auto;
        /*height: 100%;*/
        display: flex;
        overflow: hidden;
        padding-top: var(--phone-frame-margin);
        transition: 0.2s ease-in-out;

        .inner {
          display: grid;
          align-items: center;
          grid-template-columns: repeat(var(--image-length), 1fr);
          padding: var(--phone-border);
          transition: 0.2s ease-in-out;
          grid-column-gap: 36px;
          /*transform: translateX(-282px);*/
        }

        picture {
          width: var(--phone-inner-width);
          height: var(--phone-inner-height);
          display: block;
          overflow: hidden;
          overflow: -moz-scrollbars-none;

          border-radius: calc(var(--phone-border-radius) - 10px);
          transition: 0.2s ease-in-out;
          -ms-overflow-style: none;
          scrollbar-width: none;
          /*cursor: url('/icons/mouse-scroll.svg') 120 120, default;*/

          ::-webkit-scrollbar {
            width: 0;
            display: none;
            background: transparent;
          }

          @media screen and (min-width: 960px) {
            overflow-y: scroll;
          }
        }

        picture.active + picture {
          width: calc(var(--phone-inner-width) * 0.92);
          height: calc(var(--phone-inner-height) * 0.92);
          margin-left: var(--phone-border);
        }

        picture.active + picture + picture {
          width: calc(var(--phone-inner-width) * 0.86);
          height: calc(var(--phone-inner-height) * 0.86);
        }

        picture.active + picture + picture ~ picture {
          width: calc(var(--phone-inner-width) * 0.82);
          height: calc(var(--phone-inner-height) * 0.82);
        }
      }

      .phone {
        position: absolute;
        top: var(--phone-frame-margin);
        left: calc(0px - var(--phone-width) / 2);
        width: var(--phone-width);
        height: var(--phone-height);
        display: block;
        padding: var(--phone-border);
        border-radius: var(--phone-border-radius);
        background: linear-gradient(var(--color-grey-bg-3), var(--color-grey-bg-3)) content-box, linear-gradient(90deg, var(--color-grey-bg-3), var(--color-grey-bg-3)) border-box;
        box-shadow: 0 50px 100px -20px rgba(var(--color-text-faded-rgb), .25), 0 30px 60px -30px rgba(var(--color-text-rgb), .3), inset 0 -2px 6px 0 rgba(var(--color-text-faded-rgb), .35);
      }

    `}</style>
  
  </>;
};