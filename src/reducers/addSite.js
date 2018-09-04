import { CHANGE_NAME, CHANGE_STREET, CHANGE_PLZ, CHANGE_PLACE, CHANGE_MAIL, CHANGE_COMMENT } from '../actions/addSite';

const initialState = {
    inpName: '',
    inpStreet: '',
    inpPlz: '',
    inpPlace: '',
    inpMail: '',
    inpComment: ''
}

const changeValue = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                inpName: action.value,
                inpStreet: state.inpStreet,
                inpPlz: state.inpPlz,
                inpPlace: state.inpPlace,
                inpMail: state.inpMail,
                inpComment: state.inpComment
            }
        case CHANGE_STREET:
            return {
                inpName: state.inpName,
                inpStreet: action.value,
                inpPlz: state.inpPlz,
                inpPlace: state.inpPlace,
                inpMail: state.inpMail,
                inpComment: state.inpComment
            }
        case CHANGE_PLZ:
            return {
                inpName: state.inpName,
                inpStreet: state.inpStreet,
                inpPlz: action.value,
                inpPlace: state.inpPlace,
                inpMail: state.inpMail,
                inpComment: state.inpComment
            }
        case CHANGE_PLACE:
            return {
                inpName: state.inpName,
                inpStreet: state.inpStreet,
                inpPlz: state.inpPlz,
                inpPlace: action.value,
                inpMail: state.inpMail,
                inpComment: state.inpComment
            }
        case CHANGE_MAIL:
            return {
                inpName: state.inpName,
                inpStreet: state.inpStreet,
                inpPlz: state.inpPlz,
                inpPlace: state.inpPlace,
                inpMail: action.value,
                inpComment: state.inpComment
            }
        case CHANGE_COMMENT:
            return {
                inpName: state.inpName,
                inpStreet: state.inpStreet,
                inpPlz: state.inpPlz,
                inpPlace: state.inpPlace,
                inpMail: state.inpMail,
                inpComment: action.value
            }
    }
    return state;
}

export default changeValue;