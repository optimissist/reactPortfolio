import React from 'react';
import './about.css';

function Bio() {
    return (
        <div className="about">
            <h4 id="about">About the developer</h4>
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


export default function About() {
    return (
        <div className="about">
                <h4 id="about">About the developer</h4>
            <div className="aboutme">
                <div className="bio">
                        <p>I thought I wanted to be a journalist but it turns out, I just like making pretty things with words. Since my first coding class 20 years ago, I have always tried to find ways to incorporate web development into my work. Now, it is my passion <em>and</em> my profession.</p>
                        <p>I am always interested in new opportunities to use my experience and skills.</p>
                        <p>So, if you are looking for a front-end web engineer or want to chat about front-end web development, reach out through the <a href="#contact">contact form below</a> or find me on <a href="https://github.com/optimissist" target="_blank">GitHub</a> or <a href="https://www.linkedin.com/in/marlaschevker/" target="_blank">LinkedIn</a>.</p>
                    <button type="button" className="aboutbutton"> <a href="#contact">Contact Me</a></button>
                    </div>
                <div className="skills">
                        <h5> Skills </h5>
                    <div className="skill-items">
                        <div className="skills-skill">HTML</div>
                        <div className="skills-skill">CSS3</div>
                        <div className="skills-skill">JavaScript</div>
                        <div className="skills-skill">jQuery</div>
                        <div className="skills-skill">BCC</div>
                        <div className="skills-skill">WCS</div>
                        <div className="skills-skill">Endeca</div>
                        <div className="skills-skill">Contentful</div>
                        <div className="skills-skill">Wordpress</div>
                        <div className="skills-skill">Jira</div>
                        <div className="skills-skill">Atom</div>
                        </div>
                    </div>
                </div>
        </div>
    );

}