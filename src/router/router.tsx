import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router";
import index from '../pages/index/index';


const routeApp = () => (
    <Router>
        <Route exact path="/" component={index} />
    </Router>
);

export default routeApp;
