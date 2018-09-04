export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_STREET = 'CHANGE_STREET';
export const CHANGE_PLZ = 'CHANGE_PLZ';
export const CHANGE_PLACE = 'CHANGE_PLACE';
export const CHANGE_MAIL = 'CHANGE_MAIL';
export const CHANGE_COMMENT = 'CHANGE_COMMENT';

export const changeName = (value) => {
    return {
        type: CHANGE_NAME,
        value
    }
}

export const changeStreet = (value) => {
    return {
        type: CHANGE_STREET,
        value
    }
}

export const changePlz = (value) => {
    return {
        type: CHANGE_PLZ,
        value
    }
}

export const changePlace = (value) => {
    return {
        type: CHANGE_PLACE,
        value
    }
}

export const changeMail = (value) => {
    return {
        type: CHANGE_MAIL,
        value
    }
}

export const changeComment = (value) => {
    return {
        type: CHANGE_COMMENT,
        value
    }
}