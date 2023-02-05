import React from 'react';
import ModalImage from 'react-modal-image';

export default function PortfolioItem2() {
    return (
        <div className="portfolio">
            <ModalImage
                small={"images/645commitment-mini.jpg"}
                large={"images/645commitment.png"}
                alt="645 Commitment Standalone Page"
                className="portfolioImage"
                hideDownload={true}
            />;
            <p className="projectCopy">I was asked to build a standalone page to outline the 645 Commitment reward program when the 645 program launched. This page was custom designed and built from provided proof. I built the page using Endeca, WCS and Atom with HTML and CSS.</p>
        </div>
    )
}