import React, {Component} from 'react';
import Cell from './Cell.jsx';
import Service from './service.js';

class Cells extends Component {
    //n = 0;
    constructor(props) {
        super(props);
        this.state = {
            cells: [[{"cellState":"DEAD","x":0,"y":0},{"cellState":"DEAD","x":0,"y":1},{"cellState":"DEAD","x":0,"y":2},{"cellState":"DEAD","x":0,"y":3},{"cellState":"DEAD","x":0,"y":4},{"cellState":"DEAD","x":0,"y":5},{"cellState":"DEAD","x":0,"y":6}],[{"cellState":"DEAD","x":1,"y":0},{"cellState":"DEAD","x":1,"y":1},{"cellState":"ALIVE","x":1,"y":2},{"cellState":"DEAD","x":1,"y":3},{"cellState":"DEAD","x":1,"y":4},{"cellState":"DEAD","x":1,"y":5},{"cellState":"DEAD","x":1,"y":6}],[{"cellState":"DEAD","x":2,"y":0},{"cellState":"DEAD","x":2,"y":1},{"cellState":"DEAD","x":2,"y":2},{"cellState":"ALIVE","x":2,"y":3},{"cellState":"ALIVE","x":2,"y":4},{"cellState":"DEAD","x":2,"y":5},{"cellState":"DEAD","x":2,"y":6}],[{"cellState":"DEAD","x":3,"y":0},{"cellState":"DEAD","x":3,"y":1},{"cellState":"ALIVE","x":3,"y":2},{"cellState":"ALIVE","x":3,"y":3},{"cellState":"DEAD","x":3,"y":4},{"cellState":"DEAD","x":3,"y":5},{"cellState":"DEAD","x":3,"y":6}],[{"cellState":"DEAD","x":4,"y":0},{"cellState":"DEAD","x":4,"y":1},{"cellState":"DEAD","x":4,"y":2},{"cellState":"DEAD","x":4,"y":3},{"cellState":"DEAD","x":4,"y":4},{"cellState":"DEAD","x":4,"y":5},{"cellState":"DEAD","x":4,"y":6}],[{"cellState":"DEAD","x":5,"y":0},{"cellState":"DEAD","x":5,"y":1},{"cellState":"DEAD","x":5,"y":2},{"cellState":"DEAD","x":5,"y":3},{"cellState":"DEAD","x":5,"y":4},{"cellState":"DEAD","x":5,"y":5},{"cellState":"DEAD","x":5,"y":6}],[{"cellState":"DEAD","x":6,"y":0},{"cellState":"DEAD","x":6,"y":1},{"cellState":"DEAD","x":6,"y":2},{"cellState":"DEAD","x":6,"y":3},{"cellState":"DEAD","x":6,"y":4},{"cellState":"DEAD","x":6,"y":5},{"cellState":"DEAD","x":6,"y":6}]]
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