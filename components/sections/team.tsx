import Image from "next/image";
import { CSSProperties, FC } from "react";
import { SectionTitle } from "../section-title";

const teamData = [
  {
    name: "Elizabeth Tellmann",
    title: "Designer",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores, aut blanditiis commodi dolores illo ipsa ipsam libero
    maiores neque pariatur praesentium quod unde? A aliquam aperiam dignissimos ipsa ipsam minima quaerat? Accusamus exercitationem expedita
    iste natus nulla officia praesentium velit voluptas! Consectetur, dignissimos ut?`,
    img: "/images/team-elizabeth.jpg"
  },
  {
    name: "Alpha Tellmann",
    title: "Designer",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores, aut blanditiis commodi dolores illo ipsa ipsam libero
    maiores neque pariatur praesentium quod unde? A aliquam aperiam dignissimos ipsa ipsam minima quaerat? Accusamus exercitationem expedita
    iste natus nulla officia praesentium velit voluptas! Consectetur, dignissimos ut?`,
    img: "/images/team-alpha.jpg"
  },
  {
    name: "Felix Tellmann",
    title: "Designer",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores, aut blanditiis commodi dolores illo ipsa ipsam libero
    maiores neque pariatur praesentium quod unde? A aliquam aperiam dignissimos ipsa ipsam minima quaerat? Accusamus exercitationem expedita
    iste natus nulla officia praesentium velit voluptas! Consectetur, dignissimos ut?`,
    img: "/images/team-felix.jpg"
  }
];

type TeamProps = {
  style?: CSSProperties
}

export const Team: FC<TeamProps> = ({ style = {} }) => {
  style["--team-length"] = teamData.length;
  
  return <>
    <SectionTitle title="Meet the Team" />
    <div className="team" style={style}>
      {
        teamData.map(({ name, title, content, img }) => (
          <div key={name} className="team-member">
            <picture>
              <Image src={img} width={200} height={200} />
            </picture>
            <h3>{name}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
          </div>
        ))
      }
    </div>
    
    <style jsx>{`
      .team {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 48px;
        text-align: center;
        @media screen and (min-width: 960px) {
          grid-template-columns: repeat(var(--team-length), 1fr);
        }
      }

      picture {
        display: block;
        border-radius: 100%;
        overflow: hidden; /**/
        margin-bottom: 48px;
        box-shadow: var(--card-shadow-hover);
      }

      .team-member {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 460px;
        margin: auto;
      }

      h4 {
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--color-text-faded)
      }

      p {
        color: var(--color-text-faded);
        margin-top: 32px;
      }
    `}</style>
  </>;
};