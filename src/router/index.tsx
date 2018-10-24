import * as React from 'react';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {history} from "../history";

import Index from '../container/index';

class Routers extends React.Component{
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/' component={Index} />
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    }
}

export default Routers;