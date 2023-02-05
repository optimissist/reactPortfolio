import React, {useState} from 'react';
import PortfolioItem1 from './portfolioItems/portfolioItem1.js';
import PortfolioItem2 from './portfolioItems/portfolioItem2.js';
import PortfolioItem3 from './portfolioItems/portfolioItem3.js';
import PortfolioItem4 from './portfolioItems/portfolioItem4.js';
import PortfolioItem5 from './portfolioItems/portfolioItem5.js';
import PortfolioItem6 from './portfolioItems/portfolioItem6.js';
import './portfolio.css';

export default function PortfolioContainer() {
    const [item1, setItem1] = useState(false);
    const [item2, setItem2] = useState(false);
    const [item3, setItem3] = useState(false);
    const [item4, setItem4] = useState(false);
    const [item5, setItem5] = useState(false);
    const [item6, setItem6] = useState(false);

    const handleClick1 = () => {
        return(
        setItem1(true),
        setItem2(false),
        setItem3(false),
        setItem4(false),
        setItem5(false),
        setItem6(false)
        )
    }

    const handleClick2 = () => {
        return (
            setItem1(false),
            setItem2(true),
            setItem3(false),
            setItem4(false),
            setItem5(false),
            setItem6(false)
        )
    }

    const handleClick3 = () => {
        return (
            setItem1(false),
            setItem2(false),
            setItem3(true),
            setItem4(false),
            setItem5(false),
            setItem6(false)
        )
    }

    const handleClick4 = () => {
        return (
            setItem1(false),
            setItem2(false),
            setItem3(false),
            setItem4(true),
            setItem5(false),
            setItem6(false)
        )
    }

    const handleClick5 = () => {
        return (
            setItem1(false),
            setItem2(false),
            setItem3(false),
            setItem4(false),
            setItem5(true),
            setItem6(false)
        )
    }

    const handleClick6 = () => {
        return (
            setItem1(false),
            setItem2(false),
            setItem3(false),
            setItem4(false),
            setItem5(false),
            setItem6(true)
        )
    }

    return (
        <div className="portfolioContainer">
            <button class="portfolioButton" onClick={handleClick1}>Beachbody Shop Page</button>
            <button class="portfolioButton" onClick={handleClick2}>645 Commitment</button>
            <button class="portfolioButton" onClick={handleClick3}>Shakeology Recipe Tiles</button>
            <button class="portfolioButton" onClick={handleClick4}>Preferred Customer Pop Up</button>
            <button class="portfolioButton" onClick={handleClick5}>Ravenous React App</button>
            <button class="portfolioButton" onClick={handleClick6}>Jamming - Spotify Client</button>
            {item1 ? <PortfolioItem1 /> : ""}
            {item2 ? <PortfolioItem2 /> : ""}
            {item3 ? <PortfolioItem3 /> : ""}
            {item4 ? <PortfolioItem4 /> : ""}
            {item5 ? <PortfolioItem5 /> : ""}
            {item6 ? <PortfolioItem6 /> : ""}
        </div>
)
}