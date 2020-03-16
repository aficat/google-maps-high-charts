import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import timeSeriesJson from '../utils/timeseries.json';

const options = {
  title: {
    text: 'Time Series Chart'
  },
  series: [{
    type: 'line',
    data: timeSeriesJson
  },
  {
    type: 'column',
    data: timeSeriesJson
  }]
}

class ChartPage extends Component {
  render() {
    return (
      <div>
        <h2>Chart</h2>
        <p>Below is a line and bar chart showing the time series data provided from “timeseries.json” file.</p>
        <br />
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
        <br />
        <p>Created using High Charts API.</p>
      </div>
    );
  }
}

export default ChartPage;