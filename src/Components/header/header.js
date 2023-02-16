import React from "react";
import { NavLink } from 'react-router-dom';
import './header.css';


export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <h1> Marla Schevker</h1>
                <h4>Front-end Web Developer</h4>
            </div>
            <div className="headernav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
            </div>
        </div>
    )
}