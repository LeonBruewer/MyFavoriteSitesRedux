export const SET_SEARCHTERM = 'SET_SEARCHTERM';

export const setSearchterm = (term) => {
    return {
        type: SET_SEARCHTERM,
        term
    }
}