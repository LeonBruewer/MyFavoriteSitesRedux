import React from 'react';
import { connect } from 'react-redux';
import { HEADLINE, DESCRIPTION } from '../../constants/text';
import { switchAccordions, defaultAccordions } from '../../actions/accordions';

const Intro = (props) => (
    <div className="tapp__intro">
        <h1 className="headline">
            {HEADLINE}
        </h1>
        <p>
        Hier findest du alle deine lieblings Chayns Sites. Wenn du deine eigene Seite hinzufügen möchtest, kannst du sie <a href="#" onClick={() => {setTimeout(() => {props.defaultAccordions(); props.switchAccordions()}, 0)}}>hier beantragen.</a>
        </p>
    </div>
);

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchAccordions: () => dispatch(switchAccordions()),
        defaultAccordions: () => dispatch(defaultAccordions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
