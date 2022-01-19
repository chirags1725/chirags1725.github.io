import React from "react";
import { Slide } from "react-awesome-reveal";
import AdUnit from "./AdUnit.js";

export default function BlogsUI(props) {
  function ads() {
    if (props.blogsNo % 5 === 0) {
      return <AdUnit></AdUnit>;
    }
  }

  if (props.Image === "") {
    var image = "default";
  } else {
    image = props.Image;
  }

  return (
    <>
      <div className="Blog-Container">
        <div className="image">
          <Slide delay={10}>
            <img
              src={require(`./Image/${image}.jpg`).default}
              alt="Sample here"
              className="BlogImage"
            />
          </Slide>
        </div>
        <div className="content">
          <Slide direction="right">
            <div className="BlogTitle">{props.Title}</div>
            <br></br>
            <div className="BlogContent">{props.desc}</div>
          </Slide>
        </div>
      </div>
      {ads()}
    </>
  );
}
