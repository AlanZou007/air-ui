import * as React from 'react';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {history} from "../history";

import Index from '../container/index';
import Button from '../container/button';
import Panel from '../container/panel';
import Cell from "../container/cell";


class Routers extends React.Component{
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route path='/button' component={Button} />
                    <Route path='/panel' component={Panel} />
                    <Route path='/cell' component={Cell} />
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    }
}

export default Routers;