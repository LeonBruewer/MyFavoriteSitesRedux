import React from 'react';
import {connect} from 'react-redux';

import { createList, clearList } from '../../actions/siteList';
import SearchBar from '../searchBar/SearchBar';
import ListItem from '../listItem/ListItem';
import {fetchSiteList} from '../../utils/FetchData';
import ShowMore from '../showMore/ShowMore';
import { showButton, hideButton } from '../../actions/showMoreButton';

class SiteList extends React.Component {
    constructor (props) {
        super(props);
        this.sitesPerFetch = 20;
        this.displayedSites = 0;
        this.showMoreStyleDisplay = 'none';

        this.createList = this.createList.bind(this);
        
    }

    showMore = () => {
        this.createList(this.displayedSites);
    }

    createList = (skip) => {
        this.searchTerm = this.props.searchTerm;
        console.log(this.props.listData);
        let actions = {
            dispatchSaveData: this.props.saveData,
            dispatchShowButton: this.props.showButton,
            dispatchHideButton: this.props.hideButton
        }
        

         fetchSiteList(this.searchTerm, this.sitesPerFetch, skip, actions).then(() => {
            let data = this.props.data;
            this.props.createList(data);
            //console.log(this.props.list.map( (d) => this.createListItems(d.appstoreName, d.siteId)));
            this.displayedSites = skip + data.length;

            let elementList = this.state.list;
            if (skip === 0) {
                elementList = this.props.listData.map( (d) => this.createListItems(d.appstoreName, d.siteId));
            }
        
            if (skip > 0) {
                let oldList = this.state.list;
                let newList = data.map( (d) => this.createListItems(d.appstoreName, d.siteId));
                elementList = oldList.concat(newList);
            }

            this.list = elementList;
            
        }).catch((ex) => {
            //this.setState({list: 'Keine Ergebnisse gefunden.'});
            //chayns.hideWaitCursor();
            console.log(`siteList error: ${ex}`);
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
                            display={this.props.showMoreStyleDisplay}
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
        listData: state.siteList.listData,
        searchTerm : state.searchBar.term,
        showMoreStyleDisplay: state.showMoreButton.displayStyle,
        data: state.fetchData.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createList: (data) => dispatch(createList(data)),
        clearList: () => dispatch(clearList()),
        saveData: (saveData, data) => dispatch(saveData(data)),
        showButton: () => dispatch(showButton()),
        hideButton: () => dispatch(hideButton())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteList)