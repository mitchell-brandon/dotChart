import React from 'react';
import './App.css';
import Chart from '../../../../src/components/Chart/Chart.js';
import ChartItem from '../../../../src/components/ChartItem/ChartItem.js';
import MainContent from '../MainContent/MainContent.js'

function App() {

  
  return(
    <div className="App">
      <MainContent/>
      <Chart range={[[4000, 6000, 500], [-100, 500, 100], [-300, -50, 50]]}>
        <ChartItem description={"Sun"} value={"5500c°"} top={"5.5%"} left={"20%"}/>
        <ChartItem description={"Mercury"} value={"167c°"} top={"50%"} left={"30%"}/>
        <ChartItem description={"Neptune"} value={"-225c°"} top={"93%"} left={"50%"}/>
      </Chart>
    </div>
  )
}

export default App
