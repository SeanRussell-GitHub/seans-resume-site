import React from "react";
import reduxStore from "../views/redux-store-snip.PNG"
import subTracker from "../views/All-My-Subs.PNG"
import dayPlanner from "../views/day-planner-snip.PNG"

// PROJECTS Page
function Projects() {
    return (
        <div className="projects">
            <div className="container">
                <div className="row align-items-center my-4">
                    <div className="col-lg-6 mx-auto">
                        <div className="hover-zoom">
                            <img
                                className="img-fluid p-2 rounded mb-4 mb-lg-4"
                                src={reduxStore}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-5 ml-5">
                        <h1 className="font-weight-light">Redux Store</h1>
                        <div>
                            Although using React’s Context API is a worthy alternative to other libraries that manage global state in tandem with React (such as Flux or MobX), open source JavaScript library Redux remains is most common in a large-scale React application. This project started as a refactoring challenge to implement Redux instead of the Context API so the website's state management is taken out of the React ecosystem.
                        </div>
                        <a target="_blank" rel="noreferrer" href="https://redux-store-project.herokuapp.com/">Go To Deployed App Here...</a>
                    </div>
                    <div className="col-lg-5 mx-auto text-center">
                        <img
                            className="img-fluid p-1 rounded mb-4 mb-lg-4 w-75"
                            src={subTracker}
                            alt=""
                        />
                    </div>
                    <div className="col-lg-5 ml-5">
                        <h1 className="font-weight-light">Serverless App Tracker</h1>
                        <div>
                            Keeping a running total of all the subscriptions to various websites and applications is essential for balancing budgets, forseeing the financial future, and just to keep track of apps we're paying for but not using anymore. This application is something I thought would be useful in daily life; real-world necessity made me think of keeping track of not just subscriptions, but after deployment it became obvious this could also be useful as an all around bill tracker.
                        </div>
                        <a target="_blank" rel="noreferrer" href="https://seanrussell-first-serverless-site.netlify.app/">Go To Deployed App Here...</a>
                    </div>
                    <div className="col-lg-5 mb-5 mx-auto">
                        <img
                            className="img-fluid p-2 rounded mb-4 mb-lg-0"
                            src={dayPlanner}
                            alt=""
                        />
                    </div>
                    <div className="col-md-5">
                        <h1 className="font-weight-light">APP 3</h1>
                        <div>
                            This simple app was one of my first projects, and since it only uses basic JavaScript, HTML, and CSS it serves to show what is possible a limited amount of resources and local storage. The color coding changes from hour to hour, and the user is able to use the save key to store daily tasks.
                        </div>
                        <a target="_blank" rel="noreferrer" href="https://seanrussell-github.github.io/Day-Planner/">Go To Deployed App Here...</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;