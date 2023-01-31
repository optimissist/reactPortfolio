import React from 'react';
import './resume.css';

export default function Resume() {
    return (
<div className="resume">
            <div className="resumelist">
                <div className="certs">
                    <h4> Experience <br /><span className="arrow">&#8594;</span><br />Education<br /><span className="arrow">&#8595;</span></h4>
                <ul>
                    <li><a href="./images/SchevkerResume.pdf" target="_blank"> My Resume </a></li>
                    <li> Front-end Engineer Path Certification - Codecademy</li>
                    <li><a href="./images/JavaScript.pdf" target="_blank">JavaScript Certification</a> - OneMonth</li>
                    <li><a href="./images/jQuery.pdf" target="_blank">jQuery Certification</a> - OneMonth</li>
                    <li><a href="./images/ResponsiveDesign.pdf" target="_blank">Responsive Resign Certification</a> - OneMonth</li>
                    <li><a href="./images/Wordpress.pdf" target="_blank">Wordpress Certification</a> - OneMonth</li>
                    <li> BA - 2010 - California State University Northridge</li>
                    <li> MA - 2014 - University of Southern California </li>
                </ul>
            </div>
                <div className="experience">
                <h5><a href="https://www.teambeachbody.com/" target="_blank" id="resume">Beachbody</a> — 2018 to present</h5>
                <h6>Merchandising Operations Manager • April 2022 to Present</h6>
                <ul>
                    <li>Create and manage new and existing pages for the site in Endeca, Contentful and WCS</li>
                    <li>Triage technical issues related to the content management systems both for the team and upon request from outside departments</li>
                    <li>Prepare programs for the team to work on (products, programs, entitlements, etc)</li>
                        <li>Prep and execute all launches to production</li>
                        <li>Provide training and support to Merchandising Team members</li>
                        <li>Manage technical aspects of Merchandising Team</li>
                </ul>

                <h6>Senior CMS Specialist • July 2021 to April 2022</h6>
                <ul>
                    <li>Creates unique modules and pages within the confines of the CMS templates</li>
                    <li>Merchandises products, hero banners, and other modules</li>
                    <li>Builds sell pages for individual products and programs, often versioned</li>
                    <li>Manages site launches for new and/or updated products, programs, etc.</li>
                    <li>Provides Quality Assurance assistance when needed</li>
                    <li>Helps team troubleshoot CMS issues</li>
                </ul>

                <h6>CMS Operations Specialist • August 2019 to July 2021</h6>
                <ul>
                    <li>Merchandised products, hero banners, and other modules</li>
                    <li>Built sell pages for individual products and programs</li>
                    <li>Provided Quality Assurance assistance when needed</li>
                </ul>

                <h6>CMS Web Content Coordinator • December 2018 to August 2019</h6>
                <ul>
                    <li>Provided quality assurance to ensure new content posted on teambeachbody.com is consistent with team standards</li>
                    <li>Assisted in the creation of new content and editing of existing content within team CMS systems</li>
                    <li>Developed a style manual and other supplemental documentation</li>
                </ul>
            </div>
        </div>
        </div>
    )
    }