export const CREATE_LIST = 'CREATE_LIST';
export const CLEAR_LIST = 'CLEAR_LIST';

export const createList = (data) => {
    return {
        type: CREATE_LIST,
        data
    }
}

export const clearList = () => {
    return {
        type: CLEAR_LIST
    }
}