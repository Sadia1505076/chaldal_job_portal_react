import React, { Component } from "react";
var classNames = require("classnames");
type SpanProps = JSX.IntrinsicElements["span"];
type DivProps =  JSX.IntrinsicElements["div"];

interface CareerState {
  isActive: Number | null;
}

interface QualificationsAndBenefits {
  name: string;
  des:  SpanProps[];
}

interface Body {
  shortDes:       SpanProps;
  qualifications: QualificationsAndBenefits;
  benefits:       QualificationsAndBenefits;
  apply:          string;
}

interface CareerItem {
  title:  string;
  places: string[];
  body:   Body;
}
const careerItemText: CareerItem[] = [
  {
    title: "Principal Software Engineer",
    places: ["San Francisco", "Osaka", "Singapore", "Dhaka", "Remote"],
    body: {
      shortDes: (
        <span>
          As a principal engineer, you will work on the latest cutting edge
          technologies such as
          <a
            href="https://fsharp.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            F#
          </a>
          ,
          <a
            href="https://docs.microsoft.com/en-us/dotnet/fundamentals/"
            target="_blank"
            rel="noopener noreferrer"
          >
            .NET Core
          </a>
          ,
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,
          <a
            href="https://reactnative.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Native
          </a>
          and
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </a>
          . You will also be contributing to our rapidly expanding business by
          improving our highly scalable and efficient software systems.
        </span>
      ),
      qualifications: {
        name: "Qualifications and Responsibilities:",
        des: [
          <span>
            Bachelor's degree in Computer Science or equivalent experience
          </span>,
          <span>
            Excellent communication skills in verbal and written English
          </span>,
          <span>
            10+ years experience with the one or more of the following: web
            application development, architecting and developing large scale
            design, distributed and parallel systems
          </span>,
          <span>Capability of mentoring engineers is preferred</span>,
          <span>Thrives in a functional programming environment</span>,
          <span>
            Work with other engineers and product team in planning, prioritising
            and executing assigned projects with pushing deadlines
          </span>,
          <span>
            Take part in recommendation for new software technologies and
            company roadmaps
          </span>,
          <span>Take part in code reviews</span>,
        ],
      },
      benefits: {
        name: "Benefits",
        des: [
          <span>Industry-leading salary</span>,
          <span>Fun work environment</span>,
          <span>Always have new challenges to work on</span>,
          <span>
            Gain experience with scalable innovative software systems
          </span>,
        ],
      },
      apply:
        "https://docs.google.com/forms/d/e/1FAIpQLSfZJDhjbuHSDUYBFqaKzyoiStsnAVEjgsu52eKOYfQAynFEVw/viewform",
    },
  },
  {
    title: "Senior Software Engineer",
    places: ["Osaka", "Singapore", "Dhaka", "Jessore"],
    body: {
      shortDes: (
        <span>
          As a senior software engineer, you will work on and improve our highly
          scalable and efficient software systems in our rapidly expanding
          business.
        </span>
      ),
      qualifications: {
        name: "Qualifications:",
        des: [
          <span>
            Bachelor's degree in Computer Science or equivalent experience
          </span>,
          <span>
            Excellent communication skills in verbal and written English
          </span>,
          <span>
            5+ years experience with one or more programming languages and
            frameworks including but not limited to:
            <a
              href="https://fsharp.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              F#
            </a>
            , Python, Scala, C#, SQL,
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            ,
            <a
              href="https://reactnative.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Native
            </a>
            and
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript
            </a>
          </span>,
          <span>Experience with functional programming is a preferred</span>,
          <span>
            Should be able to take part in code reviews and mentor junior
            engineers
          </span>,
        ],
      },
      benefits: {
        name: "Benefits",
        des: [
          <span>Industry-leading salary</span>,
          <span>Fun work environment</span>,
          <span>Always have new challenges to work on</span>,
          <span>
            Gain experience with scalable innovative software systems
          </span>,
        ],
      },
      apply:
        "https://docs.google.com/forms/d/e/1FAIpQLSeu9aEfVwjDlQuxy-Rq69k7Cy1Ial2bnzQWGhRWSMnJE6Dq1w/viewform",
    },
  },
  {
    title: "Junior Software Engineer",
    places: ["Dhaka", "Jessore"],
    body: {
      shortDes: (
        <span>
          As a junior software engineer, you will learn the latest cutting edge
          technologies such as
          <a
            href="https://fsharp.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            F#
          </a>
          ,
          <a
            href="https://docs.microsoft.com/en-us/dotnet/fundamentals/"
            target="_blank"
            rel="noopener noreferrer"
          >
            .NET Core
          </a>
          ,
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,
          <a
            href="https://reactnative.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Native
          </a>
          and
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </a>
          . You will also have the opportunity to learn from and be mentored by
          very experienced engineers. Our rapidly expanding business will allow
          you to work on and improve our highly scalable and efficient software
          systems.
        </span>
      ),
      qualifications: {
        name: "Minimum Requirements:",
        des: [
          <span>Ability to write good code</span>,
          <span>Strong CS fundamentals</span>,
          <span>English proficiency and good communication skills</span>,
        ],
      },
      benefits: {
        name: "Benefits",
        des: [
          <span>Competitive salary</span>,
          <span>Fun work environment</span>,
          <span>Mentorship and career growth</span>,
        ],
      },
      apply:
        "https://docs.google.com/forms/d/e/1FAIpQLSckgknsdRgrjNubliUdx-ZFAbJYWpjrbRaF77KbgIrodS-LXg/viewform",
    },
  },
];

class Career extends Component<{}, CareerState> {
  state = {
    isActive: null,
  };

  generateHTMLForCareerBody(careerItemBody: Body) {
    return(
      <React.Fragment>
        <p>{careerItemBody.shortDes}</p>
        <p>{careerItemBody.qualifications.name}</p>
        <ul>
          {careerItemBody.qualifications.des.map((uiItem) => {
            return <li>{uiItem}</li>;
          })}
        </ul>
        <p>{careerItemBody.benefits.name}</p>
        <ul>
          {careerItemBody.benefits.des.map((uiItem) => {
            return <li>{uiItem}</li>;
          })}
        </ul>
        <p>
          <a
            href={careerItemBody.apply}
            className="btn btn-outline-primary px-3 scrollto"
            target="_blank"
            rel="noopener noreferrer"
          >
            APPLY
          </a>
        </p>
      </React.Fragment>     
    );
  }

  generateHTMLForWholeCareerItem(careerItem: CareerItem, isActive: boolean, index: number) {
    let classForTheItem: string = classNames({
      "career-item":        true,
      wow:                  true,
      fadeInUp:             true,
      "active-career-item": isActive,
    })

    return (
      <div
        className={classForTheItem}
        onClick={() => this.handleShowFullDescription(index)}
      >
        <div className="career-item-header">
          <div className="flex-container-link">
            <span className="title">{careerItem.title}</span>
            <span className="description">
              {careerItem.places.map((place, index) => {
                let lineBreak = (index === careerItem.places.length - 1)
                    ? null
                    : <br/>
                  return (
                    <React.Fragment>
                      {place} 
                      {lineBreak}
                    </React.Fragment>
                  );
              })}
            </span>
          </div>
        </div>
        <div className="career-item-body">
          {this.generateHTMLForCareerBody(careerItem.body)}
        </div>
      </div>
    );
  }

  renderAllCareerItems() {
    let rows: DivProps[] = [];
    for (let i: number = 0; i < careerItemText.length; i++) {
      rows.push(
        this.generateHTMLForWholeCareerItem(
          careerItemText[i],
          this.state.isActive === i,
          i
        )
      );
    }
    return rows;
  }

  handleShowFullDescription = (careerId: Number) => {
    if (this.state.isActive === careerId) {
      this.setState({ isActive: null });
    } else this.setState({ isActive: careerId });
  };

  render() {
    return (
      <section id="career">
        <div className="container">
          <div className="hr-divider mt-5 mb-5 ml-2">
            <div className="hr-divider-content hr-divider-heading">
              <span>CAREERS</span>
            </div>
          </div>
          <div className="panel-group">{this.renderAllCareerItems()}</div>
        </div>
      </section>
    );
  }
}

export default Career;
