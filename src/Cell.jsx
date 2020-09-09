import React, {Component} from 'react';

class Cell extends Component {
    render() {
        /*console.log("cell: state=" + this.props.cellState + " x=" + this.props.x + " y=" + this.props.y);*/
        return(
            <div className={this.props.cellState==="DEAD" ? "cell-dead" : "cell-alive"}>
                <p></p>
            </div>

        )
    }
}
export default Cell;