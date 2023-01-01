import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="hr-divider mt-5 mb-5 ml-2">
            <div className="hr-divider-content hr-divider-heading">
              <span>About Us</span>
            </div>
          </div>
          <p>
            We are a bunch of curious, hard-core engineers who work on
            developing the developing world.
          </p>
          <p>
            We measure our success by the amount of positive global impact we
            achieve. We believe there are plenty of fundamental problems that
            technology can solve in the developing world. We started off in
            2013, by building the world's first 1-hour grocery delivery service
            in the world's most
            <a
              href="https://www.google.com/search?tbm=isch&q=Dhaka+Traffic"
              target="_blank"
              rel="noopener noreferrer"
            >
              densely populated
            </a>
            city, where it used to be an incredible chore to get daily
            necessities. Since then, we've gone on to redefine supply chains,
            ease commodity trading, support refugee camps and reduce food
            wastage.
          </p>
          <p>
            We are one of the first tech start-ups focused on building up the
            developing world using a for-profit model, that attracts investors
            and develops local economies.
          </p>
          <p>
            Just because we try to do good doesn't mean we don't have fun. We
            love being at the bleeding-edge of technology. We believe software
            development itself can be better, and we regularly experiment with
            home-grown frameworks, algorithms, thought processes, programming
            languages and DSLs. We run our own cloud in local data centers and
            work directly with country-wide information infrastructure
            providers.
          </p>
          <p>
            We are backed by
            <a
              href="https://www.ifc.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The World Bank Group
            </a>
            and
            <a
              href="https://www.ycombinator.com/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Y Combinator
            </a>
            . Since 2013, we have partnered with
            <a
              href="https://www.wfp.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The UN World Food Programme
            </a>
            ,
            <a
              href="https://www.bangladesh.gov.bd/index.php?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bangladesh Government
            </a>
            ,
            <a
              href="https://www.undp.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UNDP
            </a>
            ,
            <a
              href="https://www.usaid.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              USAID
            </a>
            and
            <a
              href="https://www.gov.uk/government/organisations/department-for-international-development"
              target="_blank"
              rel="noopener noreferrer"
            >
              The UK Department for International Development
            </a>
            .
          </p>
          <p>
            We have offices in San Francisco, Singapore, Osaka, Dhaka, Cox's
            Bazar and Jessore.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
