import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Header from '../components/header/Header';
import index from '../pages/index/index';
// import Player from '../components/player/player';

const routeApp: React.SFC = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={index}  />
        </Switch>
        {/* <Player /> */}

    </Router>
);

export default routeApp;
