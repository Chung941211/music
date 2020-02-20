import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import index from '../pages/index/index';


const routeApp = () => (
    <Router>
        <Route exact path="/"   />
        <Switch>
            <Route path={`/video`} />
        </Switch>
    </Router>
);

export default routeApp;
