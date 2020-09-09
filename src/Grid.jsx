import React, {Component} from 'react';
import Cell from './Cell.jsx';
import Service from './service.js';

class Grid extends Component {
    //n = 0;
    constructor(props) {
        super(props);
        this.state = {
            cells: [], 
            gameRunning: false
        }
        this.getNextStep = this.getNextStep.bind(this);
        this.startGame = this.startGame.bind(this);
        this.isGameRunning = this.isGameRunning.bind(this);
    }
    render() {
        console.log("gameRunning=" + this.state.gameRunning);
        console.log("cells=" + this.state.cells);
        return (
            <div className="cellContainer">
                <span>GameOfLife</span>
                <button onClick={() => this.startGame()}>START</button>
                <button className={this.state.gameRunning ? "visible" : "invisible"} onClick={() => this.getNextStep()}>NEXT</button>
                <div className="cellColumn">
                {this.state.cells.map((vColumn,iColumn,aColumn) => {
                    return(
                        <div key={iColumn} className="cellRow">
                            {vColumn.map((vRow,iRow,aRow) => {
                                return(
                                    <Cell key={iRow} {...vRow}/>
                                )
                            })}
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }

    getNextStep() {
        console.log("nextStep()");
        Service.getNextStep().then(
            response => {
                this.setState({cells: response.data});
            }
        )
        this.isGameRunning();
    }

    startGame() {
        console.log("startGame()");
        Service.startGame().then(
            response => {
                this.setState({cells: response.data});
            }
        )
        this.isGameRunning();
    }

    isGameRunning() {
        console.log("isGameRunning()");
        Service.isGameRunning().then(
            response => {
                this.setState({gameRunning: response.data});
            }
        )
    }
}
export default Grid;