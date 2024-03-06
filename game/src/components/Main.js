import React, { Component } from 'react';
import ScoreView from './ScoreView.js';
import Game from './Game.js';


const choicesList = [
    {
        id: 'ROCK',
        imageUrl: 'https://i.pinimg.com/originals/4d/40/db/4d40dbef4879e329e9e9309ca3320470.png',
    },
    {
        id: 'SCISSORS',
        imageUrl: 'https://www.onlygfx.com/wp-content/uploads/2020/02/scissors-5.png',
    },
    {
        id: 'PAPER',
        imageUrl: 'https://img-fotki.yandex.ru/get/27/119528728.16d4/0_ca1ee_79bcaaa0_L.jpg',
    },
];

class Main extends Component{
    state = {
        isShow: true,
        newArray: [choicesList[0], choicesList[1]],
        text: 'YOU WON',
        score: 0,
    };

    getResult = (item1, item2) => {
        if (item1.id === 'ROCK') {
            switch (item2.id) {
                case 'PAPER':
                    return 'YOU LOSE';
                case 'SCISSORS':
                    return 'YOU WON';
                default:
                    return 'IT IS DRAW';
            }
        } else if (item1.id === 'PAPER') {
            switch (item2.id) {
                case 'ROCK':
                    return 'YOU WON';
                case 'SCISSORS':
                    return 'YOU LOSE';
                default:
                    return 'IT IS DRAW';
            }
        } else {
            switch (item2.id) {
                case 'ROCK':
                    return 'YOU LOSE';
                case 'PAPER':
                    return 'YOU WON';
                default:
                    return 'IT IS DRAW';
            }
        }
    };

    restartGame = () => this.setState({ isShow: true });

    checkResult = (id) => {
        const { score } = this.state;
        const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)];
        const choice1 = choicesList.find((eachValue) => eachValue.id === id);
        const result = this.getResult(choice1, choice2);
        let newScore = score;
        if (result === 'YOU WON') {
            newScore = score + 1;
        } else if (result === 'YOU LOSE') {
            newScore = newScore > 0 ? score - 1:score;
        }
        this.setState({
            isShow: false,
            newArray: [choice1, choice2],
            text: result,
            score: newScore,
        });
    };

    render() {
        const { isShow, newArray, text, score } = this.state;
        return (
            <div className="main-container d-flex flex-column flex-wrap justify-content-start align-items-center min-vh-100 bg-dark w-100 ">
                <ScoreView score={score} />
                <Game
                    choicesList={choicesList}
                    text={text}
                    isShow={isShow}
                    newArray={newArray}
                    checkResult={this.checkResult}
                    restartGame={this.restartGame}
                />
            </div>
        );
    }
}

export default Main;