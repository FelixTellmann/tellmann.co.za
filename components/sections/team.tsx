import Image from "next/image";
import { CSSProperties, FC } from "react";
import { SectionTitle } from "../section-title";

const teamData = [
  {
    name: "Elizabeth Tellmann",
    title: "Project Manager ",
    content: `Elizabeth starts each morning with a cup of Rooibos Tea, followed by a morning workout before checking in to work.
     To her left is her Husband and partner in crime, Felix. She loves working with people. Conceptualizing different options
     best situatable for the clients and business needs. Elizabeth is the face of the company. She keeps everyone focused to
     ensure that projects are completed on time and on budget.`,
    img: "/images/team-elizabeth.jpg"
  },
  {
    name: "Felix Tellmann",
    title: "Designer",
    content: `Felix starts his day with a fresh cup of coffee before setting up for the day. To his right is his better half
     and best friend Elizabeth. Felix is a Shopify Expert and Senior Frontend developer with proven design, development, and
     business skills. He is always informed of the latest and best tools to keep his sites up to date and running flawlessly.
     He loves running and hiking and always takes Alpha with him every day.`,
    img: "/images/team-felix.jpg"
  },
  {
    name: "Alpha Tellmann",
    title: "Designer",
    content: `Alpha starts his day doing the downward facing dog and a few barks into the neighbourhood. Usually around lunch
    time, he takes Felix out for a run, followed by a quick shower and a long afternoon nap. He enjoys playing ball and getting
    everyone moving out in nature. He is a gentle soul with an incredible energy, keeping everyone motivated and fit.`,
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