import React, { Component } from 'react'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Welcome!</h2>
        <p>This is a simple application using React framework.</p>
        <p>Navigate using Top Navigation bar.</p>
        <ul>
          <li>Map: To view a map with location markers and its geolocation information provided from “location.json” file.</li>
          <li>Chart: To view time series data points provided from “timeseries.json” file.</li>
        </ul>
      </div>
    );
  }
}

export default HomePage;