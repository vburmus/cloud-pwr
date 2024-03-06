import React from 'react';

const Game = (props) => {
    const {choicesList, isShow, checkResult, newArray, text, restartGame} = props;

    const showGame = () => {
        return (
            <div className="game-view-container d-flex flex-wrap justify-content-center w-50 text-white">
                {!isShow && (
                    <>
                        <>
                            <div className="result-image-container d-flex flex-column align-items-center w-50">
                                <p>YOU</p>
                                <img className="img-fluid" src={newArray[0].imageUrl} alt="your choice"/>
                            </div>
                            <div className="result-image-container d-flex flex-column align-items-center w-50">
                                <p>OPPONENT</p>
                                <img className="img-fluid" src={newArray[1].imageUrl} alt="opponent choice"/>
                            </div>
                        </>
                        <div className="d-flex flex-column align-items-center">
                            <h3 className="pb-4">{text}</h3>
                            <button className="btn btn-success" type="button" onClick={restartGame}>
                                PLAY AGAIN
                            </button>
                        </div>
                    </>
                )}
                {isShow && choicesList.map((choice) => (
                    <button
                        className="w-25 bg-dark border-0"
                        key={choice.id}
                        type="button"
                        data-testid={`${choice.id.toLowerCase()}Button`}
                        onClick={() => checkResult(choice.id)}
                    >
                        <img className="img-fluid" src={choice.imageUrl} alt={choice.id}/>
                    </button>
                ))

                }
            </div>
        );
    };

    return showGame();
};

export default Game;