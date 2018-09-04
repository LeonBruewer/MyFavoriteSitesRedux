import React from 'react';

const ShowMore = (props) => (
    <div id="showMore__wrapper" style={{textAlign: 'right', display: props.display}}>
        <a href="#" onClick={props.onClick} id="showMoreBtn">Mehr anzeigen</a>
    </div>
);

export default ShowMore;