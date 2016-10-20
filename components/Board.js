import React from 'react';
import { BarChart } from 'react-d3'

import Display from './parts/Display'

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    barGraphData(results) {
        return Object.keys(results).map(function(choice) {
            return {
                label: choice,
                value: results[choice]
            };
        });
    }

    render() {
        const {
            currentQuestion,
            results,
            status
        } = this.props;
        return (
            <div id="scoreboard">
                <Display If={status === 'connected' && currentQuestion} >
                    <BarChart data={this.barGraphData.bind(this, results)()} 
                              title={currentQuestion.q}
                              height={window.innerHeight * 0.6}
                              width={window.innerWidth * 0.9} />
                </Display>
                <Display If={status === 'connected' && !currentQuestion} >
                    <h3>Awaiting a Question...</h3>
                </Display>
            </div>
        );
    }
}

export default Board;