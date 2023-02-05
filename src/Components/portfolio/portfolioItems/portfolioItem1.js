import React from 'react';
import ModalImage from 'react-modal-image';

export default function PortfolioItem1() {


    return (
        <div className="portfolio">
            <ModalImage
                small={"images/Shopredesign-mini.jpg"}
                large={"images/Shopredesign.png"}
                alt="Beachbody Shop Page Redesigned"
                className="portfolioImage"
                hideDownload={true}
            />
            <p className="projectCopy1">I was tasked with developing a new look for the Beachbody Shop Page. This was built using Endeca and WCS with HTML and CSS. As there was no existing template to give the mobile product slider functionality they requested, I had to adapt existing templates using css to achieve the desired outcome for both desktop and mobile view.</p>
        </div>
    )
}