import React from 'react';
import { connect } from 'react-redux';
import './AccordionSearchBar.scss';

import {setSearchterm} from '../../actions/searchBar';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.timeout;
        this.default = this.props.default;
        this.onChangeAction = this.props.action;
        
        this.props.setSearchterm(this.default);
        
        setTimeout( () => {
            this.onChangeAction(0);
        }, 0);
    }

    onInputChange = (e) => {
        let value = e.target.value;

        clearTimeout(this.timeout);
        this.timeout = setTimeout( () => {
            let searchTerm = value !== '' ? value : this.default;
            
            this.props.setSearchterm(searchTerm);
            this.onChangeAction(0);
        }, 500);
    }

    render = () =>
    <div id="searchBar" className="Suche Suche--accordion">
        <input id="searchBar--searchTerm" type="text" placeholder="Suche" onChange={this.onInputChange} />
        <label><i className="fa fa-search"></i></label>
    </div>;
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchterm: (term) => dispatch(setSearchterm(term))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);