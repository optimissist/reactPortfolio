import React from 'react';
import './about.css';

function Bio() {
    return (
        <div>
            <h2 id="about">About the developer</h2>
            <div className="aboutme">
                <div className="bio">
                    <p>I thought I wanted to be a journalist but it turns out, I just like making pretty things with words. Since my first coding class 20 years ago, I have always tried to find ways to incorporate web development into my work. Now, it is my passion <em>and</em> my profession.</p>
                    <p>I am always interested in new opportunities to use my experience and skills.</p>
                    <p>So, if you are looking for a front-end web engineer or want to chat about front-end web development, reach out through the <a href="#contact">contact form below</a> or find me on <a href="https://github.com/optimissist" target="_blank">GitHub</a> or <a href="https://www.linkedin.com/in/marlaschevker/" target="_blank">LinkedIn</a>.</p>
                    <button type="button" className="aboutbutton"> <a href="#contact">Contact Me</a></button>
                </div>
                </div>
                </div>
    )
}

function Skills() {
    const skills = ["HTML", "CSS3", "JavaScript", "jQuery", "React", "Git", "Redux", "BCC", "WCS", "Endeca", "Contentful", "Wordpress", "Jira"];
   const skillsList = skills.map((skills) => 
       <li key={skills.toString()} className="skills">{skills}</li>
    );

    return (
        <ul className="skilsList">{skillsList}</ul>
    )
}


export default function About() {
    return (
        <div className="aboutSection">
                
                <Bio />
                <h3>Skills</h3>
                <Skills />
                </div>
    );

}