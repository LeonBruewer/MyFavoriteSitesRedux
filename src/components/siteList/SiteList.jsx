import React from 'react';
import {connect} from 'react-redux';

import { createList, clearList } from '../../actions/siteList';
import SearchBar from '../searchBar/SearchBar';
import ListItem from '../listItem/ListItem';
import fetchSiteList from '../../utils/FetchData';
import ShowMore from '../showMore/ShowMore';

class SiteList extends React.Component {
    constructor (props) {
        super(props);
        this.sitesPerFetch = 20;
        this.displayedSites = 0;
        this.showMoreStyleDisplay = 'none';

        this.state = {
            showMoreStyleDisplay: 'none'
        };
        
        this.createList = this.createList.bind(this);

        this.createList('Hallo', 0);
    }

    showMore = () => {
        this.createList(this.searchTerm, this.displayedSites);
    }

    createList = (searchTerm, skip) => {
        this.searchTerm = searchTerm;
        

         fetchSiteList(searchTerm, this.sitesPerFetch, skip).then((d) => {
            let {data, allowShowMore} = d;
            
            this.props.createList(data);
            console.log(this.props.list.map( (d) => this.createListItems(d.appstoreName, d.siteId)));
            this.showMoreStyleDisplay = allowShowMore === true ? 'block' : 'none';

            this.displayedSites = skip + data.length;

            let elementList = this.state.list;
            if (skip === 0) {
                elementList = this.props.listData.map( (d) => this.createListItems(d.appstoreName, d.siteId));
            }
        
            if (skip > 0){
                
                let oldList = this.state.list;
                let newList = data.map( (d) => this.createListItems(d.appstoreName, d.siteId));
                elementList = oldList.concat(newList);
            }

            this.list = elementList;
            
        }).catch((ex) => {
            //this.setState({list: 'Keine Ergebnisse gefunden.'});
            //chayns.hideWaitCursor();
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
                        {this.props.listData.map( (d) => this.createListItems(d.appstoreName, d.siteId))}
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

const mapStateToProps = state => {
    return {
        listData: state.siteList.listData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createList: (data) => dispatch(createList(data)),
        clearList: () => dispatch(clearList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteList)