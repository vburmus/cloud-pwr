import React from 'react';
const ScoreView = (props) => {
    const { score } = props;
    return (
        <div className="score-container d-flex flex-wrap justify-content-center align-items-beteween px-3 w-100 mt-2">
            <div className="score-name-container d-flex flex-column text-white w-75">
                <h1>
                    ROCK
                    <br /> PAPER <br /> SCISSORS
                </h1>
            </div>
            <div className="score-board flex-fill bg-white d-flex align-items-center justify-content-around rounded shadow">
                <h2>Score</h2>
                <h2>{score}</h2>
            </div>
        </div>
    );
};

export default ScoreView;