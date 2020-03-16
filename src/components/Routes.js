import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ChartPage from './pages/ChartPage';
import MapPage from './pages/MapPage';
import HomePage from './pages/HomePage';

class Routes extends React.Component {
  render() {
    return (
      <>
        <Redirect from='/' to='/gmhc' />
        <Switch>
          <Route path='/gmhc' exact component={HomePage} />
          <Route path='/gmhc/map' component={MapPage} />
          <Route path='/gmhc/chart' component={ChartPage} />
        </Switch>
      </>
    );
  }
}

export default Routes;
