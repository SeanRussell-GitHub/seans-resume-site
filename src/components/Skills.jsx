import React from "react";
import deskview2 from '../views/deskview2.jpg';
function Skills() {
    return (
        <div className="skills">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src={deskview2}
                            alt=""
                        />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Home</h1>
                        <p>
                            One of the most challenging things I have ever done was completing the training to become a full stack web developer. From my early years at America Online I enjoyed applying my interest in technology and being able to immerse myself in professional side of the tech industry. At the time I had no idea I would go so far, but now here I am - desgining and writing the code that I have been using all these years.
                        </p>
                        LIST OF TECHNOLOGIES
                        <ul>
                            <li>HTML and CSS</li>
                            <li>GIT / GitHub</li>
                            <li>Javascript</li>
                            <li>APIs (web, 3rd party, server-side)</li>
                            <li>Node JS</li>
                            <li>OOP (Object Oriented Programming)</li>
                            <li>Express</li>
                            <li>SQL and NoSQL database management</li>
                            <li>ORM (Object Related Mapping)</li>
                            <li>MVC (Model View Controller)</li>
                            <li>Computer Science</li>
                            <li>PWA (Progressive Web Apps)</li>
                            <li>React</li>
                            <li>MERN (MongoDB, Express.js, React.js, and Node.js)</li>
                            <li>State (context provider/consumer, redux reducers/actions, React Hook useReducer/useState, React Router, Apollo Client, JWT authentication, GraphQL, Stripe payment platform)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;