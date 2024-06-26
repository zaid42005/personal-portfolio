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
      <VerticalTimeline lineColor="#a9cd9e">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#84af78", color: "#fff" }}
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
          date="2022 - 2023"
          iconStyle={{ background: "#c2782f", color: "#fff" }}
          icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            Mubadala Tennis World Cup
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Team Leader - IT
          </h4>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#c2782f", color: "#fff" }}
          icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            University of Birmingham
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Student Volunteer & Ambassador
          </h4>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024 - 2026"
          iconStyle={{ background: "#84af78", color: "#fff" }}
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
            Software Engineering Intern - Simpli Events, Toronto, CA
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
