import React from 'react';
import './ListItem.scss';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

const ListItem  = (props) => {
let title = props.title;
let description = props.description;

let imageUrl = `https://sub60.tobit.com/l/${description}`;
let url = `https://chayns.net/${description}`;

    return (
    <div className="ListItem ListItem--clickable">
        <a href={url} target="_blank">
            <div className="ListItem__head">
                <div className="ListItem__Image" style={{background: 'url("https://sub60.tobit.com/l/77891-07846)")', backgroundSize: '40px'}}>
                    <div className="ListItem__Image" style={{background: `url(${imageUrl})`, backgroundSize: '40px'}}></div>
                </div>
                <div className="ListItem__Title">
                    <p className="ListItem__Title--headline">{title}</p>
                    <p className="ListItem__Title--description">{description}</p>
                </div>
            </div>
        </a>
    </div>
    );
}

ListItem.propTypes = propTypes;

export default ListItem;