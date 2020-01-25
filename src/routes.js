import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './components/Layout';

const BaseRouter = () =>
    <div>
        <Route exact path='/' component = {Layout}/>
        <Route exact path='/:movieID' component = {Layout}/>
    </div>;

export default BaseRouter;