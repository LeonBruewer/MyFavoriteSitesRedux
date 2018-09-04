import React from 'react';
import {connect} from 'react-redux';

import { createList, appendList, clearList } from '../../actions/siteList';
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

        this.createList = this.createList.bind(this);
    }

    showMore = () => {
        this.createList(this.displayedSites);
    }

    createList = (skip) => {
        this.searchTerm = this.props.searchTerm;
        
        let actions = {
            dispatchSaveData: this.props.saveData,
            dispatchShowButton: this.props.showButton,
            dispatchHideButton: this.props.hideButton
        }
        
         fetchSiteList(this.searchTerm, this.sitesPerFetch, skip, actions).then(() => {
            let data = this.props.data;
            this.displayedSites = skip + data.length;
            
            if (skip === 0) {
                this.props.createList(data);
            } else {
                this.props.appendList(data);
            }
            
        }).catch((ex) => {
            this.props.clearList();
            this.props.hideButton();
            chayns.hideWaitCursor();
        }); 
    }

    createListItems = (title, id) => {
        if (id) {
        return (
            <ListItem
                title={title}
                description={id}
                key={id}
            />
        );}
        else
        return <p>{title}</p>
    }

    render = () =>
    (
        <div className={this.props.accordionClass} data-group="mfs" id="sitesAccordion">
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
        data: state.fetchData.data,
        accordionClass: state.accordions.sitesClass
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createList: (data) => dispatch(createList(data)),
        appendList: (data) => dispatch(appendList(data)),
        clearList: () => dispatch(clearList()),
        saveData: (saveData, data) => dispatch(saveData(data)),
        showButton: () => dispatch(showButton()),
        hideButton: () => dispatch(hideButton())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteList)