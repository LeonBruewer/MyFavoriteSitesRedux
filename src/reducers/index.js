import { combineReducers } from 'redux';

import fetchData from './fetchData';
import siteList from './siteList';

export default combineReducers({
    fetchData,
    siteList
});
