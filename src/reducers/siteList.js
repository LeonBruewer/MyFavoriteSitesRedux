import { CREATE_LIST, CLEAR_LIST } from '../actions/siteList';

const initialState = {
    listData: [{
        title: 'Keine Ergebnisse gefunden'
    }]
};

const siteList = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LIST:
            return {
                listData: action.data
            }
        case CLEAR_LIST:
            return initialState;
        default:
            return state;
    }
};

export default siteList;