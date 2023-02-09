import React from 'react';
import ModalImage from 'react-modal-image';

export default function PortfolioItem5() {
    return (
        <div className="portfolio">
            <ModalImage
                small={"images/ravenous-mini.png"}
                large={"images/ravenous.png"}
                alt="Ravenous Yelp Project"
                className="portfolioImage"
                hideDownload={true}
            />
            <p className="projectCopy">This project was created for the Create a front-end app with React course with Codecademy. It was built with JSX, CSS, JavaScript and React and uses the Yelp API. </p>
            <p className="projectGitLink"> <a href="https://github.com/optimissist/RavenousProject" target="_blank" rel="noreferrer">View on GitHub  |  </a><a href="https://ravenousms.surge.sh/" target="_blank" rel="noreferrer">View Project</a></p>
        </div>
    )
}