import React from 'react';

import Display from './parts/Display'

const Board = ({
    currentQuestion,
    results,
    status
}) => {
    return (
        <div id="scoreboard">
            <Display If={status === 'connected' && currentQuestion} >
                <h3>{currentQuestion.q}</h3>
                <p>{JSON.stringify(results)}</p>
            </Display>
            <Display If={status === 'connected' && !currentQuestion} >
                <h3>Awaiting a Question...</h3>
            </Display>
        </div>
    );
}

export default Board;