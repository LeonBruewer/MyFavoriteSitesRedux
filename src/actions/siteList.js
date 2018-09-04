export const CREATE_LIST = 'CREATE_LIST';
export const APPEND_LIST = 'APPEND_LIST';
export const CLEAR_LIST = 'CLEAR_LIST';

export const createList = (data) => {
    return {
        type: CREATE_LIST,
        data
    }
}

export const appendList = (data) => {
    return {
        type: APPEND_LIST,
        data
    }
}

export const clearList = () => {
    return {
        type: CLEAR_LIST
    }
}