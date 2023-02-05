/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import './footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="foot">
                <p> This website was brought to you with&nbsp;<span css={{color: "red"}}>&#10084;</span>&nbsp;by Marla Schevker.</p>
            </div>
        </footer>
    );
}