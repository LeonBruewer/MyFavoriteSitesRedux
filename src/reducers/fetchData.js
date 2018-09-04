import { Map } from 'immutable';
import { SAVE_DATA } from '../utils/FetchData';

export const initialState = Map();

const fetchData = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DATA:
            return {
                data: action.data
            };
        default:
            return state;
    }
};

export default fetchData;
