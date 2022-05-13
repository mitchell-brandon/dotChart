import React from 'react'
import './Table.css'

function yValues(values){ 
    let tempGraphValues = [];
    const horizontalBar = 'data-division'

    for (let value of values){
      while (value[0] < value[1]){
          tempGraphValues.push(value[0]+= value[2])
      }
      tempGraphValues.push(horizontalBar)
    }

    tempGraphValues.sort(function(a, b){return b - a});
    return tempGraphValues
  }

function Chart(props){
    const tempGraphValues = yValues(props.range)
    return(
        <div className="graph-container">
            <div className='graph-wrapper'>
                <ul className='data-list'>
                    {
                        tempGraphValues.map( (value) => (
                            value === 'data-division' 
                            ? 
                            value = <div className='horizontal-bar'> </div>
                            :
                            <li key={value} className='graph-y-labels'>{value.toLocaleString()}</li>
                        ))
                    }
                </ul>
                <div className="vertical-bar"></div>
                {props.children}
            </div>
        </div>
    )
}

export default Chart;