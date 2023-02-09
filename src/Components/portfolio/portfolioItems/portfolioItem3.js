import React from 'react';
import ModalImage from 'react-modal-image';

export default function PortfolioItem3() {


    return (
        <div className="portfolio">
            <ModalImage
                small={"images/Shkflavorsdesktop-mini.jpg"}
                large={"images/Shkflavorsdesktop.png"}
                alt="Shakeology Recipes Tiles"
                className="portfolioImage"
                hideDownload={true}
            />
            <p className="projectCopy">With the launch of Shakeology in France, I was asked to build a new locale of the Shakeology microsite and refresh the recipe tiles for the UK and France. Because the requested layout was not from a standard template, I created custom designs from scratch for desktop and mobile views. This was built with WCS and Atom using HTMl and CSS.</p>
            <p className="projectGitLink"><a href="https://github.com/optimissist/TBB-Portfolio/tree/main/UK:France%20Shakeology%20Microsite" target="_blank" rel="noreferrer">View on GitHub</a></p>
        </div>
    )
}