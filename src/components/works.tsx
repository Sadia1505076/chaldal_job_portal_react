import React, { Component } from "react";
import chaldal from "../img/chaldal.jpg";
import cdvn from "../img/cdvn.jpg";
import camps from "../img/camps.jpg";
import chalao from "../img/chalao.jpg";
import cookups from "../img/cookups.jpg";
import ggb from "../img/ggb.jpg";
import infra from "../img/infra.jpg";
import protocol from "../img/protocol.jpg";
import warehouse from "../img/warehouse.jpg";
import WorkComponent from "./workComponent";
import WorkItem from "./globalInterface";

interface WorkState {
  isActive: Number | null;
}

const works: Array<WorkItem> = [
  {
    id:       0,
    imgSrc:   chaldal,
    name:     "ONLINE GROCERY",
    shortDes: "E-Commerce Platform",
    fullDes:  `The world's first 1-hour and 15-minute grocery delivery
service, serving quarter million households in the world's
most densely populated city, Chaldal.com thrives in chaos. We
strive to offer the best prices and maintain the highest
standards of quality, a monumental task that is a
work-in-progress.`,
  },
  {
    id:       1,
    imgSrc:   cdvn,
    name:     "VEGETABLE NETWORK",
    shortDes: "Supply Chain Platform",
    fullDes:  `The Vegetable Network connects small rural farmers with small
  urban retailers by reimagining a supply chain driven by
  technology. Our aim is to protect farmers from volatile
  markets, improve the working conditions of retailers and
  minimize wastage.`,
  },
  {
    id:       2,
    imgSrc:   camps,
    name:     "AT-RISK COMMUNITIES",
    shortDes: "Social Impact Platform",
    fullDes:  `We work with The World Food Programme to feed the world's
  largest refugee camp. This involves extending efficient supply
  chains to previously-uninhabited areas, providing thousands of
  tons of food and developing better nutrition in highly
  impoverished communities.`,
  },
  {
    id:       3,
    imgSrc:   warehouse,
    name:     "MICRO-WAREHOUSING",
    shortDes: "Fulfillment Platform",
    fullDes:  `We pioneered the concept of micro-warehouses to serve the
  daily needs of a quarter million families within an hour in
  the world's most densely populated city. These
  micro-warehouses use advanced algorithms to predict stock and
  automatically balance inventory between themselves.`,
  },
  {
    id:       4,
    imgSrc:   ggb,
    name:     "GOGO BANGLA",
    shortDes: "Logistics Platform",
    fullDes:  `GoGo Bangla is a e-commerce delivery service that leverages
  Chaldal's vast logistics network to support the operations of
  a dozen large e-commerce stores and hundreds of online
  merchants. We support deliveries, pick-ups, exchanges and
  other ad-hoc activities.`,
  },
  {
    id:       5,
    imgSrc:   protocol,
    name:     "PROTOCOL",
    shortDes: "Messaging Platform",
    fullDes:  `Protocol is an enterprise messaging platform that coordinates
  the activities of our growing employee base where solutions
  such as Slack, email and ticketing systems have proven to be
  highly ineffective, either due to their complexity or pricing.`,
  },
  {
    id:       6,
    imgSrc:   chalao,
    name:     "CHALAO",
    shortDes: "Ridesharing Platform",
    fullDes:  `Chalao is designed as a ethical ride-sharing platform to
  augment our logistics network, where drivers are compensated
  for the time spent on the platform, with the possibility of
  full-time employment with benefits.`,
  },
  {
    id:       7,
    imgSrc:   cookups,
    name:     "COOKUPS",
    shortDes: "Thoughful dining Platform",
    fullDes:  `Cookups delivers home-cooked, made-to-order food from the
  finest cooks in the city. 95 % of our cooks are female who had
  never earned before joining Cookups. We bring you food that
  reminds you of your grandma's recipes or lets you taste what
  Masterchef shows on television.`,
  },
  {
    id:       8,
    imgSrc:   infra,
    name:     "DATA CENTERS",
    shortDes: "Meta Platform",
    fullDes:  `We run our own servers in local data centers connected over
  high-speed leased lines, and expose a cloud interface to our
  engineers and partners. We believe in data locality and find
  public clouds just too darn expensive to serve the developing
  world.`,
  },
];

class Work extends Component<{}, WorkState> {
  state = {
    isActive: null,
  };

  handleShowFullDescription = (workId: Number) => {
    if (this.state.isActive === workId) {
      this.setState({ isActive: null });
    } else this.setState({ isActive: workId });
  };

  render() {
    return (
      <section id="our-work">
        <div className="container">
          <div className="hr-divider mt-5 mb-5 ml-2">
            <div className="hr-divider-content hr-divider-heading">
              <span>Our Work</span>
            </div>
          </div>
          <div className="flex-container justify-content-center">
            {works.map((work, index) => (
              <WorkComponent
                key={work.id}
                work={work}
                onShowFullDescription={this.handleShowFullDescription}
                isActive={this.state.isActive === index}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
