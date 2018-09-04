import { combineReducers } from 'redux';

import fetchData from './fetchData';
import siteList from './siteList';
import searchBar from './searchBar';
import showMoreButton from './showMoreButton';
import changeValue from './addSite';
import accordions from './accordions';

export default combineReducers({
    fetchData,
    siteList,
    searchBar,
    showMoreButton,
    changeValue,
    accordions
});
