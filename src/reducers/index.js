import { combineReducers } from 'redux';

import fetchData from './fetchData';
import siteList from './siteList';
import searchBar from './searchBar';
import showMoreButton from './showMoreButton';

export default combineReducers({
    fetchData,
    siteList,
    searchBar,
    showMoreButton
});
