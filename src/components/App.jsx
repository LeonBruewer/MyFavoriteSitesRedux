import React from 'react';
import { hot } from 'react-hot-loader';
import { Mode } from 'chayns-components';
import Intro from './intro/Intro';
import PersonFinderContainer from '../containers/PersonFinderContainer';
import UserListContainer from '../containers/UserListContainer';
//import SiteList from './siteList/SiteList';

const App = () => (
    <div>
        <Intro />
        <div className="tapp__content">
            
        </div>
    </div>
);

export default hot(module)(App);
