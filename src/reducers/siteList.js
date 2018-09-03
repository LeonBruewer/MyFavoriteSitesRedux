import { CREATE_LIST, CLEAR_LIST } from '../actions/siteList';

const initialState = {};

const siteList = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LIST:
            let list =  action.data.map( (d) =>
            <ListItem
                title={d.appstoreName}
                description={d.siteId}
                key={d.siteId}
            />);

            return {
                list
            }
        case CLEAR_LIST:
            return {
                list: <p>Keine Ergebnisse</p>
            };
        default:
            return state;
    }
};

export default siteList;