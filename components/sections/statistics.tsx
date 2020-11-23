import { CSSProperties, FC } from "react";

const statisticsData = [
  {
    title: "Founded in",
    statistic: 2017
  },
  {
    title: "Pages created",
    statistic: 24
  },
  {
    title: "Founded in",
    statistic: 2017
  }
];

type StatisticsProps = {
  style?: CSSProperties
};

export const Statistics: FC<StatisticsProps> = ({ style = {} }) => {
  style["--statistics-length"] = statisticsData.length;
  
  return <>
    <div className="statistics" style={style}>
      {statisticsData.map(({ title, statistic }) => (
        <div key={title} className="statistics__item">
          <b>{statistic}</b>
          <small>{title}</small>
        </div>
      ))}
    </div>
    <style jsx>{`
      .statistics {
        display: grid;
        grid-template-columns: 1fr;
        @media screen and (min-width: 800px) {
          grid-template-columns: repeat(var(--statistics-length), 1fr);
        }
      }

      .statistics__item {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 20px 0;
        padding: 0;

        @media screen and (min-width: 800px) {
          &:not(:last-child) {
            border-right: 1px solid var(--color-grey-bg-1);
          }
          padding: 0 33px;
        }

        b {
          margin: 0px;
          color: var(--color-background);
          font-size: calc(58px + 2 * ((100vw - 500px) / 1120));
          font-weight: bold;
          line-height: 1.14em;
          letter-spacing: -0.05em;
        }

        small {
          color: rgba(var(--color-background-rgb), 0.6);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      }
    
    `}</style>
  </>;
};