import React from 'react';
// import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './about.css';

export default function About() {
    let myLinkedIn = <Link to={{ pathname: "https://www.linkedin.com/in/marlaschevker" }} target="_blank">LinkedIn</Link>
    let myGitHub = <Link to={{ pathname: "https://github.com/optimissist/" }} target="_blank">GitHub</Link>
    let bioContactMe = <Link to={"/contact"}>contact me</Link>



    return (
        <div className="about">
            <h2 id="about">About the developer</h2>
            <div className="aboutme">
                <div className="bio">
                    <p>I thought I wanted to be a journalist but it turns out, I just like making pretty things with words. Since my first coding class 20 years ago, I have always tried to find ways to incorporate web development into my work. Now, it is my passion <em>and</em> my profession.</p>
                    <p>I am always interested in new opportunities to use my experience and skills.</p>
                    <p>So, if you are looking for a front-end web engineer or want to chat about front-end web development, {bioContactMe} or find me on {myGitHub} or {myLinkedIn}.</p>
                </div>
                </div>
                </div>
    )
}