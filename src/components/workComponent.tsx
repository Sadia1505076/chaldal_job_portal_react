import React, { Component } from "react";
import WorkItem from "./globalInterface";
var classNames = require("classnames");

interface WorkComponentProps {
  work:                  WorkItem;
  isActive:              boolean; 
  onShowFullDescription: (workId: Number) => void;
}

class WorkComponent extends Component<WorkComponentProps> {
  render() {
    let classesForWorkItem: string = classNames({
      "inner-work-item":  true,
      "pt-4":             true,
      "pb-4":             true,
      "pl-4":             true,
      "pr-4":             true,
      "active-work-item": this.props.isActive,
    });

    return (
      <div className="work-item mt-2 mb-2 ml-2 mr-2 wow fadeInUp">
        <div
          className={classesForWorkItem}
          onClick={() => this.props.onShowFullDescription(this.props.work.id)}
        >
          <img src={this.props.work.imgSrc} className="work-img" alt=" " />
          <div className="work-des pt-2">
            <h5>{this.props.work.name}</h5>
            <span className="text-muted">{this.props.work.shortDes}</span>
          </div>
          <p className="wrok-p text-justify mt-2">{this.props.work.fullDes}</p>
        </div>
      </div>
    );
  }
}

export default WorkComponent;
