import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChartPage from './pages/ChartPage';
import MapPage from './pages/MapPage';
import HomePage from './pages/HomePage';

class Routes extends React.Component {
  render() {
    return (
      <>
        {/* <Redirect from='/' to='/google-maps-high-charts' /> */}
        <Switch>
          <Route path='/google-maps-high-charts' exact component={HomePage} />
          <Route path='/google-maps-high-charts/map' component={MapPage} />
          <Route path='/google-maps-high-charts/chart' component={ChartPage} />
        </Switch>
      </>
    );
  }
}

export default Routes;
