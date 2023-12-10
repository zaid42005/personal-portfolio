import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#384e1d">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2024"
          iconStyle={{ background: "#384e1d", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Birmingham, UK
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelors of Science in Artifical Intelligence & Computer Science
          </h4>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 - 2025"
          iconStyle={{ background: "#384e1d", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            York University, Toronto, CA
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelors of Engineering in Computer Science & Computer Security
          </h4>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Current"
          iconStyle={{ background: "#c2782f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Solutions Engineer - Simpli Events, Toronto, CA
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
