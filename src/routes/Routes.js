import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';
import Series from '../components/Series/Series';
import Episode from '../components/Series/Episode';
import Contact from '../components/Contact/Contact';

const Routes = () => {
    return(
        <Switch>
            <Route path="/series" component={ Series } />
            <Route path="/episode/:id" component={ Episode } />
            <Route path="/contact" component={ Contact } />
            <Route path="/" component={ Welcome } />
        </Switch>
    )
}

export default Routes