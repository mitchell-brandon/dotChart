import React from 'react';
import './TableItem.css'

function ChartItem(props) {
    let style = {
        position: "absolute",
        top: props.top,
        left: props.left,
    }
    return(
        <div style={style}>
            <p className={`table-item ${props.description}`}> --{props.description}</p>
            <p className={` table-item ${props.value}`}> {props.value}</p>
        </div>
    )
}

export default ChartItem