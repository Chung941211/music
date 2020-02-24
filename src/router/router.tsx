import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import index from '../pages/index/index';


const routeApp = () => (
    <Router>
        <Route exact path="/"   component={index}  />
        <Switch>
            <Route path={`/video`} component={index} />
        </Switch>
    </Router>
);

export default routeApp;
