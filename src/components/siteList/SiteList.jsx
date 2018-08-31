import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import ListItem from '../listItem/ListItem';
import fetchSiteList from '../../utils/FetchData';
import ShowMore from '../showMore/ShowMore';

export default class SiteList extends React.Component {
    constructor (props) {
        super(props);
        this.sitesPerFetch = 20;
        this.displayedSites = 0;
        this.showMoreStyleDisplay = 'none';

        this.state = {
            showMoreStyleDisplay: 'none'
        };
        
        this.createList = this.createList.bind(this);
    }

    showMore = () => {
        this.createList(this.searchTerm, this.displayedSites);
    }

    createList = (searchTerm, skip) => {
        this.searchTerm = searchTerm;

        fetchSiteList(searchTerm, this.sitesPerFetch, skip).then((d) => {
            let {data, allowShowMore} = d;
            this.showMoreStyleDisplay = allowShowMore === true ? 'block' : 'none';

            this.displayedSites = skip + data.length;

            let elementList = this.state.list;
            if (skip === 0) {
                elementList = data.map( (d) => this.createListItems(d.appstoreName, d.siteId));
            }
        
            if (skip > 0){
                
                let oldList = this.state.list;
                let newList = data.map( (d) => this.createListItems(d.appstoreName, d.siteId));
                elementList = oldList.concat(newList);
            }

            this.setState({list: elementList, showMoreStyleDisplay: this.showMoreStyleDisplay});
            
        }).catch((ex) => {
            this.setState({list: 'Keine Ergebnisse gefunden.'});
            chayns.hideWaitCursor();
        });
    }

    createListItems = (title, id) => (
        <ListItem
            title={title}
            description={id}
            key={id}
        />
    );

    render = () =>
    (
        <div className="accordion accordion--open" data-group="mfs" id="sitesAccordion">
            <div className="accordion__head accordion__head--search">
                Sites
                <SearchBar
                    default = "chayns"
                    action={this.createList}
                />
            </div>
            <div className="accordion__body">
                <div className="accordion__content">
                    <div id="siteList">
                        {this.state.list}
                        <ShowMore
                            display={this.state.showMoreStyleDisplay}
                            onClick={this.showMore}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}