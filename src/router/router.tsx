import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Header from '../components/Header';
import index from '../pages/index/index';


const routeApp = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/"  component={index}  />
        </Switch>
    </Router>
);

export default routeApp;
