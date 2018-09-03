export default function fetchSiteList(searchTerm, take, skip) {
let defaultData = null;

    return new Promise((resolve, reject) => {
        chayns.showWaitCursor();
        let baseUrl = 'https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=';
        let filter = `&Take=${take + 1}&skip=${skip}`;
        let fullUrl = baseUrl + searchTerm + filter;
        
            fetch(fullUrl)
            .then( (response) => {
                return response.json();
            }).then( (json) => {
                let allowShowMore = false;
                let Data = defaultData;
                Data = json.Data;
                if (Data.length > take) {
                    allowShowMore = true;
                    Data.pop();
                }
                resolve({data: Data, allowShowMore: allowShowMore});

                chayns.hideWaitCursor();
            }).catch( (ex) => {
                reject(ex);
            })
    });
}
