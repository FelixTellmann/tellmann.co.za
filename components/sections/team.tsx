import Image from "next/image";
import { CSSProperties, FC } from "react";
import { SectionTitle } from "../section-title";

const teamData = [
  {
    packageName: "Felix",
    title: "Lead Developer",
    content: `Felix starts his day with a fresh cup of coffee before setting up for the day. To his right is his better half
     and best friend Elizabeth. Felix is a Shopify Expert and full-stack developer with proven design, development, and
     business skills. He is always informed of the latest tech to keep his projects performing flawlessly.
     He loves taking Alpha on a run or hike.`,
    img: "/images/team-felix.jpg"
  },
  {
    packageName: "Elizabeth",
    title: "Project Manager ",
    content: `Elizabeth starts each morning with a cup of Rooibos Tea followed by a morning workout before checking in to work.
     To her left is her husband and partner in crime, Felix. She loves working with clients and conceptualizing ideas
     best suitable for their product and business needs. She keeps everyone focused, on time and on budget.`,
    img: "/images/team-elizabeth.jpg"
  },
  {
    packageName: "Alpha",
    title: "CEO - Chief Exercise Officer",
    content: `Alpha starts his day doing the downward facing dog and a few barks into the neighbourhood. Usually around lunch
    time, he takes Felix out for a run, followed by a quick shower and a long afternoon nap. He enjoys playing ball and getting
    everyone to explore nature a bit more. He is a gentle soul with an incredible energy, keeping everyone sane, motivated, and fit.`,
    img: "/images/team-alpha.jpg"
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
        text-align: center;
        grid-gap: 48px;
        @media screen and (min-width: 960px) {
          grid-template-columns: repeat(var(--team-length), 1fr);
        }
      }

      picture {
        position: relative;
        display: block;
        overflow: hidden;
        margin-bottom: 48px;
        border-radius: 100%;
        box-shadow: var(--card-shadow-hover);

        &:before {
          position: absolute;
          content: '';
          z-index: 1;
          width: 100%;
          height: 100%;
          display: block;
          backdrop-filter: sepia(0) saturate(1.1) contrast(1.2) brightness(1.1) grayscale(1);
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 100%;
        }
      }

      .team-member {
        max-width: 460px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: auto;
        margin-bottom: auto;
        margin-left: auto;
      }

      h4 {
        color: var(--color-text-faded);
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
      }

      p {
        margin-top: 32px;
        color: var(--color-text-faded);
      }
    `}</style>
  </>;
};