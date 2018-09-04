import { CREATE_LIST, APPEND_LIST, CLEAR_LIST } from '../actions/siteList';

const initialState = {
    listData: [{
        appstoreName: 'Keine Ergebnisse gefunden'
    }]
};

const siteList = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LIST:
            return {
                listData: action.data
            }
        case APPEND_LIST:
            let oldData = state.listData;
            let newData = action.data;
            let fullData = oldData.concat(newData);

            return {
                listData: fullData
            }
        case CLEAR_LIST:
            return initialState;
        default:
            return state;
    }
};

export default siteList;