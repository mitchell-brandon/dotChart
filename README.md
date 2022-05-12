<h1>Welcome to dotChart! </h1>

dotChart is a reusable React component that generates a custom dot chart.
A dot chart is a simple graph that expresses disparate data values. 
The utility of dotChart is in the ability to customize multiple number 
ranges along the Y axis. This is extremely helpful when expressing gross 
value differences. I hope you find dotChart useful!

<h2> Installation </h2>
<p> In your terminal, npm install dotchart </p>
<img src="https://github.com/mitchell-brandon/dotChart/blob/c30f9eacfd65ef59f5f0b67ee3bcab1b728f064a/demo/src/imgs/npm-install.png">
<p> in your text editor, at the top of your file, import{Chart, ChartItem} from "dotChart" </P>
<img src="https://github.com/mitchell-brandon/dotChart/blob/c30f9eacfd65ef59f5f0b67ee3bcab1b728f064a/demo/src/imgs/import.png">

[View Demo](https://link-url-here.org)


<h2> Usage Instructions </h2>
<ol>
    <li> Instantiate the Chart component with a range property</li>
    <li>
        Determine the range, or ranges of the Y axis. 
    <ol>
        <li> range = {[lowest value, highest value, step value]}</li>
        <li> 
        the lowest value is the range start, the highest 
        value is the range end, and the step value is the interval
        at which the range is counted.
        </li>
    </ol>
    </li>
    <li>
        Instantiate ChartItem as children components
    <ol>
        <li> Specify the properties to label and position chart data </li>
        <ol>
        <li> tag={} - name of chart item</li>
        <li> value={} - numerical value of the item</li>
        <li> top={} - absolute position from top</li>
        <li> left={} - absolute position from left</li>
        </ol>
    </ol>
    </li>
</ol>

<h2> Demo </h2>
<img src="https://github.com/mitchell-brandon/dotChart/blob/c30f9eacfd65ef59f5f0b67ee3bcab1b728f064a/demo/src/imgs/demo.png">

<h2> Demo Result </h2>
<img src="https://github.com/mitchell-brandon/dotChart/blob/master/demo/src/imgs/result.png">


