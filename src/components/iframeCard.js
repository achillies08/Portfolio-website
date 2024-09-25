import * as React from "react";
import {
  Card
} from "@mui/material";
import ReactPlayer from "react-player";

function IframeCard(link) {
  return (
    <>
      <div className="Card">
        <Card
          sx={{
            width: { xs: "90%", md: "90%" },
            height: { xs: "175px", md: "350px" },
          }}
          elevation={2}
        >
          <ReactPlayer width={'100%'} controls={true} height={'100%'} url={link} />
        </Card>
      </div>
    </>
  );
}

export default IframeCard;
