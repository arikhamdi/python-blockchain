import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import './index.css';
import App from './components/App';
import history from './history';
import Blockchain from './components/Blockchain';
import ConductTransaction from './components/ConductTransaction';
import TransactionPool from './components/TransactionPool';

ReactDOM.render(
    <Router history={history}>
        <Route path={'/'} exact component={App} />
        <Route path={'/blockchain'} component={Blockchain} />
        <Route path={'/conduct-transaction'} component={ConductTransaction} />
        <Route path={'/transaction-pool'} component={TransactionPool} />
    </Router>,
    document.getElementById('root')
);

