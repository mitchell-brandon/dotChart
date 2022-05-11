import React from 'react';
import "./MainContent.css"
import npmInstall from '../../imgs/npm-install.png'
import importChart from '../../imgs/import.png'
import demo from '../../imgs/demo.png'

function MainContent (){

  return(
    <div id="MainContent">
      {/* ABOUT */}
      <h1 className="main-title"> dotChart </h1>
      <p className='main-about'> 
        dotChart is a reusable React component that generates a custom dot chart.
        A dot chart is a simple graph that expresses disparate data values. 
        The utility of dotChart is in the ability to customize multiple number 
        ranges along the Y axis. This is extremely helpful when expressing gross 
        value differences. I hope you find dotChart useful!
      </p>
      <div className='underline'></div>

      {/* INSTALLATION */}
      <h1> Installation </h1>
        <ol className="installation-list list">
          <li> 
            In your ternimal, install using npm
            <img className="install-img npm-install" src={npmInstall}/> 
          </li>
          <li>
            In your text editor, at the top of your file import the package
            <img className="install-img import-chart" src={importChart}/>
          </li>
        </ol>
      <div className='underline'></div>

      {/* INSTRUCTIONS */}
      <h1> Instructions </h1>
      <div className="instructions-container">
        <ol className="instructions-list list">
          <li> {"Instantiate the Chart component with a range property <Chart range={}> </Chart>"} </li>
          <li>
            Determine the range, or ranges of the Y axis. 
            <ol className='lower-alpha'>
              <li> {"range = {[lowest value, highest value, step value]}"}</li>
              <li> 
                the lowest value is the range start, the highest 
                value is the range end, and the step value is the interval
                at which the range is counted.
              </li>
            </ol>
          </li>
          <li>
            {"Instantiate <ChartItem/> children components"}
            <ol className='lower-alpha'>
              <li> Specify the properties to label and position chart data </li>
              <ol className="lowest-roman">
                <li> {`tag={} - name of chart item`}</li>
                <li> {`value={} - numerical value of the item`}</li>
                <li> {`top={} - absolute position from top`}</li>
                <li> {`left={} - absolute position from left`}</li>
              </ol>
            </ol>
          </li>
        </ol>
        <img className="demo-img" src={demo}/>
      </div>
      <div className='underline'></div>
      {/* RESULT EXAMPLE DEMO */}
      <h1> Result Example</h1>

    </div>
  )
};

export default MainContent