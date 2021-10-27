import React, { FC } from "react";
import { Button } from "../button";

type GetStartedProps = {};

export const GetStarted: FC<GetStartedProps> = ({}) => {
  return (
    <>
      <div>
        <h2 className="h3">Get your Project started today!</h2>
        <Button branded large secondary href="/contact">
          Get in touch
        </Button>
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      `}</style>
    </>
  );
};
