import React, {Component} from 'react';

class Cell extends Component {
    render() {
        console.log("cell: state=" + this.props.cellState + " x=" + this.props.x + " y=" + this.props.y);
        return(
            <div className="cell">
                <div>
                    State:{this.props.cellState}
                </div>
                <div>
                    x:{this.props.x}
                </div>
                <div>
                    y:{this.props.y}
                </div>
            </div>

        )
    }
}
export default Cell;