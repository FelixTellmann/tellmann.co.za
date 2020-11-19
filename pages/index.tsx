import React, { FC } from "react";
import { Hero, Section } from "components";

const Index: FC = (props) => {
  return (
    <>
      <Section id="hero" jumpTo={{ href: "#what-we-do", title: "What we do" }}>
        <Hero
          background={{ src: "url('/images/hero-bg.jpg')", overlay: "radial-gradient(70% 70% at 50% 100%,#e8e8e8 0,#fafafa 100%)" }}
          title={["Hi.", "Hello."]}
          subtitle={<>
            We are Tellmann, <br />
            a small design & development studio
            specializing in creating websites
            that drive interaction and sales.
          </>}
          cta={{ href: "#contact", title: "Get in touch" }}
        />
      </Section>
    
    </>
  );
};

export default Index;