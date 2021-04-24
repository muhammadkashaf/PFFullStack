import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage, SplashPage } from "../pages";

function MainRouter() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SplashPage} />
                <Route path="/Splash" component={SplashPage} />
                <Route path="/Dashboard" component={MainPage} />
            </Switch>
        </Router>
    );
}
export default MainRouter;