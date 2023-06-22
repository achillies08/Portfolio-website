import * as React from "react";
import data from "../Resources/data";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab/";

const WorkTimeline = () => {
  let work = data.jobs;

  return (
    <Box mr={{ xs: "2%", md: "0" }} mt={{ xs: "35%", md: "0" }}>
      <Typography
        id="Work History"
        variant="h2"
        p={{ xs: "5%", md: "2%" }}
        pt={{ xs: "26%", md: "6%" }}
      >
        I Tried so Hard & Got so Far
      </Typography>

      {work.slice(0, -1).map((item) => (
        <Timeline position="alternate" sx={{ transform: "rotate" }}>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }}>
              <Typography align="right" variant="body2">
                {/* Duration from */}
                {item[2]}
              </Typography>
              <Typography
                align="right"
                variant="body2"
                pr={{ xs: "27%", md: "4.5%" }}
              >
                -
              </Typography>
              <Typography align="right" variant="body2">
                {/* Duration to */}
                {item[3]}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "3px", px: 2 }}>
              <Typography variant="h6" component="span">
                {/* Company */}
                {item[0]}
              </Typography>
              <Typography variant="body2">
                {/* Post */}
                {item[1]}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      ))}
      {work.slice(-1).map((item) => (
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }}>
              <Typography align="right" variant="body2">
                {/* Duration From */}
                {item[2]}
              </Typography>
              <Typography
                align="right"
                variant="body2"
                pr={{ xs: "27%", md: "4.5%" }}
              >
                -
              </Typography>
              <Typography align="right" variant="body2">
                {/* Duration To */}
                {item[3]}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector color="secondary" />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "3px", px: 2 }}>
              <Typography variant="h6" component="span">
                {/* Company */}
                {item[0]}
              </Typography>
              <Typography variant="body2">
                {/* Post */}
                {item[1]}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      ))}
    </Box>
  );
};

export default WorkTimeline;
