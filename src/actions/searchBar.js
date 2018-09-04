export const GET_SEARCHTERM = 'GET_SEARCHTERM';

export const createList = (term) => {
    return {
        type: GET_SEARCHTERM,
        term
    }
}