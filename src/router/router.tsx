import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import index from '../pages/index/index';


const routeApp = () => (
    <Router>
        <Route exact path="/" component={index} />
    </Router>
);

export default routeApp;
