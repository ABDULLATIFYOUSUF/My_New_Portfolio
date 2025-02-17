import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWorkOutline } from "react-icons/md";

function WorkExp() {
  return (
    <>
      <div className="work" id="workexp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            work experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2012 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdOutlineWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">Junior Clerk</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Karachi Development Authority
              </h4>
              <p>
                Performing clerical tasks, including documentation, record
                management, and administrative support.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2008 - 2012"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdOutlineWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title">
                Front Officer / Admin Assistant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Kutiyana Memon Hospital
              </h4>
              <p>
                Managed front desk operations, patient coordination, and
                provided administrative support.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default WorkExp;
