import { SWITCH_ACCORDIONS } from '../actions/accordions';

const initialState = {
    sitesClass: 'accordion accordion--open',
    formClass: 'accordion'
}

const accordions = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_ACCORDIONS:
            return {
                sitesClass: 'accordion',
                formClass: 'accordion accordion--open'
            }
        default:
            return initialState;
    }
}

export default accordions;