import { SET_SEARCHTERM } from '../actions/searchBar';

const initialState = {
    term: ''
};

const siteList = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCHTERM:
            return {
                term: action.term
            }
        default:
            return state;
    }
};

export default siteList;