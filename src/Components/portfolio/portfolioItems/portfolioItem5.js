import React from 'react';
import ModalImage from 'react-modal-image';

export default function PortfolioItem5() {
    return (
        <div className="portfolio">
            <ModalImage
                small={"images/PCPopout-mini.jpg"}
                large={"images/PCPopout.png"}
                alt="Preferred Customer Pop Out"
                className="portfolioImage"
                hideDownload={true}
            />;
            <p className="projectCopy">The launch of the Preferred Customer program brought about the need for a new template. I created this pop out so it could be easily parsed and reused by developers with minimal coding knowledge. I made this popout using BCC, WCS and Atom.</p>
            <p className="projectGitLink"> <a href="https://github.com/optimissist/RavenousProject" target="_blank" rel="noreferrer">View on GitHub.</a></p>
        </div>
    )
}