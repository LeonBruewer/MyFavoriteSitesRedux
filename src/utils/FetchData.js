export const SAVE_DATA = 'SAVE_DATA';
export const saveData = data => ({
    type: SAVE_DATA,
    data
});

export const fetchSiteList = (searchTerm, take, skip, actions) => {
let defaultData = null;

let { dispatchSaveData, dispatchShowButton, dispatchHideButton } = actions;

    return new Promise((resolve, reject) => {
        chayns.showWaitCursor();
        let baseUrl = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=';
        let filter = `&Take=${take + 1}&skip=${skip}`;
        let fullUrl = baseUrl + searchTerm + filter;
        let allowShowMore = false;
        
            fetch(fullUrl)
            .then( (response) => {
                return response.json();
            }).then( (json) => {
                
                let Data = defaultData;
                Data = json.Data;
                if (Data.length > take) {
                    dispatchShowButton();
                    Data.pop();
                }
                else {
                    dispatchHideButton();
                }
                dispatchSaveData(saveData, Data);
                resolve();

                chayns.hideWaitCursor();
            }).catch( (ex) => {
                reject(ex);
            })
    });
}
