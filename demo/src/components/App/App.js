import React from 'react';
import './App.css';
import Chart from '../../../../src/components/Table/Chart.js';
import ChartItem from '../../../../src/components/TableItem/ChartItem.js';
import MainContent from '../MainContent/MainContent.js'

function App() {

  
  return(
    <div className="App">
      <MainContent/>
      <Chart range={[[4000, 6000, 500], [-100, 500, 100], [-300, -50, 50]]}>
        <ChartItem description={"A"} value={5500} top={"6%"} left={"20%"}/>
        <ChartItem description={"B"} value={255} top={"45%"} left={"30%"}/>
        <ChartItem description={"C"} value={-155} top={"85%"} left={"50%"}/>
      </Chart>
    </div>
  )
}

export default App
