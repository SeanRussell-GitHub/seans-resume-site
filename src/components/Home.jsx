import React from "react";
import collage from '../views/collage-for-portfolio.png';
// COVER LETTER Page
function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-6">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={collage}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Home</h1>
            <p>
              I'm an Oregon based full-stack web designer working remotely. As a hobby I have always tried to keep up with the trends in technology. This interest has been the easiest way to stay informed about the variety of applications being used in today.
            </p>
            <p>
              Throughout the years I have worked with many brilliant people at some great companies, and through those relationships I have learned education and perseverance will take a person where ever they wish to go. I have always tried to follow this example, as this experience remains true today.
            </p>
            <p>
              Most recently I have taken on full-stack web development and learning the most popular technologies being used today. Whether a person is using the newest technology or the most popular, a lot of older functionality still exists. This gives us the opportunity to refactor some of these projects into using something more reliable and up to date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;