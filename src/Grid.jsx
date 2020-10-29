import React, {Component} from 'react';
import Cell from './Cell.jsx';
import Service from './service.js';

class Grid extends Component {
    //n = 0;
    constructor(props) {
        super(props);
        this.state = {
            cells: [], 
            gameRunning: false,
            rules: [], 
            pattern: ''
        }
    }
    render() {
        //console.log("gameRunning=" + this.state.gameRunning);
        //console.log("cells=" + this.state.cells);
        //<button className={this.state.gameRunning ? "visible" : "invisible"} onClick={() => this.getNextStep()}>NEXT</button>

        return (
            <div className="cellContainer">
                <span>GameOfLife</span>
                <button onClick={() => this.startGame()}>START</button>
                <button onClick={() => this.getNextStep()}>NEXT</button>
                <br></br>
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
                <button onClick={() => this.addRule('SURVIVE')}>AddRule(Survive)</button>
                <button onClick={() => this.addRule('REPRODUCTION')}>AddRule(Reproduction)</button>
                <button onClick={() => this.addRule('OVERPOPULATION')}>AddRule(Overpopulation)</button>
                <button onClick={() => this.addRule('UNDERPOPULATION')}>AddRule(Underpopulation)</button>
                <br></br>
                <button onClick={() => this.deleteRule('SURVIVE')}>DeleteRule(Survive)</button>
                <button onClick={() => this.deleteRule('REPRODUCTION')}>DeleteRule(Reproduction)</button>
                <button onClick={() => this.deleteRule('OVERPOPULATION')}>DeleteRule(Overpopulation)</button>
                <button onClick={() => this.deleteRule('UNDERPOPULATION')}>DeleteRule(Underpopulation)</button>
                <br></br>
                <button onClick={() => this.setPattern('BLINKER')}>Pattern -> Blinker</button>
                <button onClick={() => this.setPattern('GLIDER')}>Pattern -> Glider</button>
                <button onClick={() => this.setStandardRules()}>SetStandardRules</button>
                <button onClick={() => this.clearAllRules()}>ClearAllRules</button>
                <button onClick={() => this.getRules()}>GetRules</button>

                <span>Current Rules:</span>
                <div>{this.state.rules.map((v,i,a) => {
                    return (<span key={i}>-{v} <br></br></span>)
                })}</div>
                <br></br>
                <span>Current Starting Pattern:</span>
                <div>{this.state.pattern}</div>

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
        this.getRules();
        this.getPattern();

    }

    startGame() {
        console.log("startGame()");
        Service.startGame().then(
            response => {
                this.setState({cells: response.data});
            }
        )
        this.isGameRunning();
        this.getRules();
        this.getPattern();

    }

    setStandardRules() {
        console.log("setStandardRules()");
        var rules = ['REPRODUCTION', 'SURVIVE', 'OVERPOPULATION', 'UNDERPOPULATION'];
        Service.setRules(rules);
        this.getRules();

    }

    clearAllRules() {
        console.log("clearAllRules()");
        var rules = [];
        Service.setRules(rules);
        this.getRules();

    }

    setPattern(pattern) {
        console.log("setPattern()");
        Service.setPattern(pattern);
        this.getPattern();
    }

    addRule(rule) {
        console.log("addRule " + rule);
        Service.addRule(rule);
        //this.doesRuleExist(rule);
        this.getRules();
    }

    deleteRule(rule) {
        console.log("deleteRule " + rule);
        Service.deleteRule(rule);
        //doesRuleExist(rule);
        this.getRules();
    }

    doesRuleExist(rule) {
        Service.doesRuleExist(rule).then(
            response =>  {
                var r =  true === response.data;
                console.log("doesRuleExist: " + rule + " -> " + r);
                return r;
            }
        );
    }

    getRules() {
        Service.getRules().then(
            response => {
                this.setState({rules: response.data});
            }
        )
    }

    getPattern() {
        Service.getPattern().then(
            response => {
                this.setState({pattern: response.data});
            }
        )
    }
    

    isGameRunning() {
        console.log("isGameRunning()");
        Service.isGameRunning().then(
            response => {
                this.setState({gameRunning: response.data});
            }
        )
        this.getRules();

    }
}
export default Grid;