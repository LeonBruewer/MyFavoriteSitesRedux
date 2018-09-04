import { SHOW_BUTTON, HIDE_BUTTON } from '../actions/showMoreButton';

const initialState = {
    displayStyle : 'none'
};

const showMoreButton = (state = initialState) => {
    switch (action.type) {
        case SHOW_BUTTON:
            return {
                displayStyle: 'block'
            }
        case HIDE_BUTTON:
            return initialState;
        default:
            return state;
    }
};

export default showMoreButton;