import React from "react";
import me from "../views/me.png"
// ABOUT ME Page
function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={me}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">About</h1>
            <div>
              I grew up in the middle of the desert spending most of my time staring at a computer monitor. There isn't alot you can do when the tempurature is over 100°! While most of my first computers were plugged into a television set and had weird names like TRS, Commodore, and Macintosh, I was learning how to communicate with them. I guess you could say computing has always been a hobby of mine, and I have been very lucky to have witnessed "history in the making" out of shear luck and curiosity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;