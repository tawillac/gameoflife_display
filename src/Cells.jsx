import React, {Component} from 'react';
import Cell from './Cell.jsx';
import Service from './service.js';

class Cells extends Component {
    //n = 0;
    constructor(props) {
        super(props);
        this.state = {
            cells: [{cellState:"DEAD", x: 1, y:1}, {cellState:"ALIVE", x: 0, y:2}]
        }
        this.getGrid = this.getGrid.bind(this);
    }
    render() {
        return (
            <div className="cellsContainer">
                <span>Cells</span>
                <div className="cells">
                {this.state.cells.map((v,i,a) => {
                    console.log("#" + v + " " + i);
                    return(
                        <Cell key={i} {...v}/>
                    )
                })}
                </div>
                <br/>
                <button onClick={() => this.getGrid()}>BUTTON</button>
            </div>
        )
    }

    getGrid() {
        Service.get().then(
            response => {
                console.log("getGrid() -> " + response.data);
                this.setState({cells: response.data});
            }
        )
    }
}
export default Cells;