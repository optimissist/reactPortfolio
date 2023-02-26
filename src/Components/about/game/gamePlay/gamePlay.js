import React from 'react';
import Popup from 'reactjs-popup'
import GameResultsView from '../gameResults/gameResults.js';
import ScoreView from '../scoreView/scoreView.js';
import { GiSpockHand, GiFoldedPaper, GiStonePile, GiGecko } from "react-icons/gi";
import { BsScissors } from "react-icons/bs";
import { RiCloseLine } from 'react-icons/ri'
import 'reactjs-popup/dist/index.css';
import './gamePlay.css';


const choicesList = [
    {
        id: 'ROCK',
        imageUrl: 'images/game/rock.png',
    },
    {
        id: 'PAPER',
        imageUrl: 'images/game/paper.png',
    },
    {
        id: 'SCISSORS',
        imageUrl: 'images/game/scissors.png',
    },
    {
        id: 'LIZARD',
        imageUrl: 'images/game/lizard.png',
    },
    {
        id: 'SPOCK',
        imageUrl: 'images/game/spock.png',
    },
]

class GamePlay extends React.Component {
    state = {
        isShow: true,
        newArray: [choicesList[0], choicesList[1]],
        text: 'YOU WON',
        score: 0,
    }

getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
        switch (item2.id) {
            case 'PAPER':
                return 'YOU LOSE'
            case 'SCISSORS':
                return 'YOU WON'
            case 'LIZARD':
                return 'YOU WON'
            case 'SPOCK':
                return 'YOU LOSE'
            default:
                return 'IT IS DRAW'
        }
    } else if (item1.id === 'PAPER') {
        switch (item2.id) {
            case 'ROCK':
                return 'YOU WON'
            case 'SCISSORS':
                return 'YOU LOSE'
            case 'LIZARD':
                return 'YOU LOSE'
            case 'SPOCK':
                return 'YOU WON'
            default:
                return 'IT IS DRAW'
        }
    } else if (item1.id === 'SCISSORS') {
        switch (item2.id) {
            case 'ROCK':
                return 'YOU LOSE'
            case 'PAPER':
                return 'YOU WIN'
            case 'LIZARD':
                return 'YOU WIN'
            case 'SPOCK':
                return 'YOU LOSE'
            default:
                return 'IT IS DRAW'
        }
    } else if (item1.id === 'LIZARD') {
        switch (item2.id) {
            case 'ROCK':
                return 'YOU LOSE'
            case 'PAPER':
                return 'YOU WIN'
            case 'SCISSORS':
                return 'YOU LOSE'
            case 'SPOCK':
                return 'YOU WIN'
            default:
                return 'IT IS DRAW'
        } 
    } else {
        switch (item2.id)
        {
            case 'ROCK':
                return 'YOU WON'
            case 'PAPER':
                return 'YOU LOSE'
            case 'SCISSORS':
                return 'YOU WON'
            case 'LIZARD':
                return 'YOU LOSE'
            default:
                return 'IT IS DRAW'
        }
    }
    }

    restartGame = () => this.setState({ isShow: true })

    checkResult = id => {
        const { score } = this.state
        const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
        const choice1 = choicesList.filter(eachValue => eachValue.id === id)
        const result = this.getResult(choice1[0], choice2)
        let newScore = score
        if (result === 'YOU WON') {
            newScore = score + 1
        } else if (result === 'YOU LOSE') {
            newScore = score - 1
        } else {
            newScore = score
        }
        this.setState({
            isShow: false,
            newArray: [choice1[0], choice2],
            text: result,
            score: newScore,
        })
    }

    render() {
        const { isShow, newArray, text, score } = this.state
        return (
            <div className="mainContainer">
                <ScoreView score={score} />
                <GameResultsView
                    choicesList={choicesList}
                    text={text}
                    isShow={isShow}
                    newArray={newArray}
                    checkResult={this.checkResult}
                    restartGame={this.restartGame}
                />
                <div className="rulesView">
                    <Popup
                        modal
                        trigger={
                            <button type="button" className="trigger-button">
                                RULES
                            </button>
                        }
                    >
                        {close => (
                            <div className="popUpView">
                                <button
                                    type="button"
                                    className="trigger-button-close"
                                    onClick={() => close()}>
                                    <RiCloseLine />
                                </button>
                                <p className="rulesTitle">Rules</p>
                                <p className="rules"><BsScissors/> Scissors <strong>Cut</strong> Paper <GiFoldedPaper /></p>
                                <p className="rules"><GiFoldedPaper /> Paper <strong>Covers</strong> Rock <GiStonePile /> </p>
                                <p className="rules"><GiStonePile />  Rock <strong>Crushes</strong> Lizard <GiGecko/></p>
                                <p className="rules"><GiGecko /> Lizard <strong>Poisons</strong> Spock <GiSpockHand/></p>
                                <p className="rules"><GiSpockHand /> Spock <strong>Smashes</strong> Scissors <BsScissors /></p>
                                <p className="rules"><BsScissors /> Scissors    <strong>Decapitate</strong> Lizard <GiGecko /></p>
                                <p className="rules"><GiGecko /> Lizard <strong>Eats</strong> Paper <GiFoldedPaper/></p>
                                <p className="rules"><GiFoldedPaper /> Paper <strong>Disproves</strong> Spock <GiSpockHand /></p>
                                <p className="rules"><GiSpockHand /> Spock <strong>Vaporizes</strong> Rock <GiStonePile /> </p>
                                <p className="rules"><GiStonePile /> Rock <strong>Crushes</strong> Scissors <BsScissors /></p>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        )
    }
}

export default GamePlay;