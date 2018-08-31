import React from 'react';
import './AccordionSearchBar.scss';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.timeout;
        this.default = this.props.default;
        this.state = {
            value: '',
            searchTerm: ''
        };

        this.onChangeAction = props.action;
        this.onChangeAction(this.default, 0);
    }

    onInputChange = (e) => {
        let newValue = e.target.value;
        this.setState({value: newValue});

        clearTimeout(this.timeout);
        this.timeout = setTimeout( () => {
            this.setState({searchTerm: newValue});
            let searchTerm = this.state.searchTerm !== '' ? this.state.searchTerm : this.default;

            this.onChangeAction(searchTerm, 0);
        }, 500);
    }

    render = () =>
    <div id="searchBar" className="Suche Suche--accordion">
        <input id="searchBar--searchTerm" type="text" placeholder="Suche" onChange={this.onInputChange} value={this.state.value} />
        <label><i className="fa fa-search"></i></label>
    </div>;
}