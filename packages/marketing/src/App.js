import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default function App() {
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={props => <Pricing {...props} />}></Route>
                    <Route path="/" component={props => <Landing {...props} />}></Route>
                </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}
