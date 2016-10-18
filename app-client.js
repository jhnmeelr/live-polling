import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import App from './components/App';
import Audience from './components/Audience';
import Board from './components/Board';
import Speaker from './components/Speaker';
import NotFoundPage from './components/NotFoundPage';

const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Audience} />
        <Route path='/board' component={Board} />
        <Route path='/speaker' component={Speaker} />
        <Route path='/404' component={NotFoundPage} />
        <Redirect from='*' to='/404' />
    </Route>
);

render(<Router routes={routes} history={browserHistory} />, document.getElementById('react-container'));