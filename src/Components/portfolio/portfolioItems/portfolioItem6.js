import React from 'react';
import ModalImage from 'react-modal-image';

export default function PortfolioItem6() {
    return (
        <div className="portfolio">
            <ModalImage
                small={"images/jamming-mini.png"}
                large={"images/jamming.png"}
                alt="Jamming - Spotify Client"
                className="portfolioImage"
                hideDownload={true}
            />
            <p className="projectCopy">I worked on this project during the React, Part II section of the Codecademy Front-End Engineering course. This project was built with JSX, CSS, JavaScript and React and uses the Spotify API.</p>
            <p className="projectGitLink"> <a href="https://github.com/optimissist/jamming" target="_blank" rel="noreferrer">View on GitHub  |  </a><a href="https://jammingmss.surge.sh/" target="_blank" rel="noreferrer">View Project</a></p>
        </div>
    )
}