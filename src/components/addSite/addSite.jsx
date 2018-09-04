import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {changeName, changeStreet, changePlz, changePlace, changeMail, changeComment} from '../../actions/addSite';

const propTypes = {
    title: PropTypes.string.isRequired
};

class AddSite extends React.Component {
    constructor(props) {
        super(props);
    }

    onInputChange = (e) => {
        switch (e.target.id) {
            case 'inpName':
                this.props.changeName(e.target.value);
                break;
            case 'inpStreet':
                this.props.changeStreet(e.target.value);
                break;
            case 'inpPlz':
                this.props.changePlz(e.target.value);
                break;
            case 'inpPlace':
                this.props.changePlace(e.target.value);
                break;
            case 'inpMail':
                this.props.changeMail(e.target.value);
                break;
            case 'inpComment':
                this.props.changeComment(e.target.value);
                break;
        }
    }

    submit = () => {
        let name = this.props.changeValue.inpName;
        let street = this.props.changeValue.inpStreet;
        let plz = this.props.changeValue.inpPlz;
        let ort = this.props.changeValue.inpPlace;
        let mail = this.props.changeValue.inpMail;
        let comment = this.props.changeValue.inpComment;

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/.test(mail)) {
            chayns.intercom.sendMessageToPage({ 
                text: `Name: ${name}  \nStraße: ${street}  \nPLZ: ${plz}  \nOrt: ${ort}  \nE-Mail: ${mail}  \nKommentar: ${comment}`
            }).then((data) => {            
                if(data.status == 200)
                chayns.dialog.alert('','Antrag wurde gestellt');
            });
        }
        else {
            chayns.dialog.alert('', 'Du musst eine gültige E-Mail Adresse angeben');
        }
    }

    render = () =>
    (<div className={this.props.accordions.formClass} data-group="mfs" id="addSite">
    <div className="accordion__head">{this.props.title}<p className="badge right"><i className="fa fa-plus "></i></p></div>
    <div className="accordion__body">
        <div className="accordion__content">
            <input type="text" value={this.props.changeValue.inpName} onChange={this.onInputChange} className="input" id="inpName" placeholder="Name" style={{width: "100%"}} />
            <input type="text" value={this.props.changeValue.inpStreet} onChange={this.onInputChange} className="input" id="inpStreet" placeholder="Straße" style={{width: "100%"}} />
            <div className="grid">
                <div className="grid__item col-1-2-desktop"><input type="text" value={this.props.changeValue.inpPlz} onChange={this.onInputChange} className="input" id="inpPlz" placeholder="PLZ" style={{width: "90%"}} /></div>
                <div className="grid__item col-1-2-desktop"><input type="text" value={this.props.changeValue.inpPlace} onChange={this.onInputChange} className="input" id="inpPlace" placeholder="Ort" style={{width: "100%"}} /></div>
            </div>
            <input type="text" value={this.props.changeValue.inpMail} onChange={this.onInputChange} className="input" id="inpMail" placeholder="E-Mail" style={{width: "100%"}} />
            <textarea type="text" value={this.props.changeValue.inpComment} onChange={this.onInputChange} className="input" id="inpComment" placeholder="Kommentar" style={{width: "100%"}}></textarea>
            <div style={{textAlign: "center", marginTop: "15px"}}>
                <button id="send" onClick={this.submit} className="button">Senden</button>
            </div>
        </div>
    </div>
    </div>);
}

AddSite.propTypes = propTypes;

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (value) => dispatch(changeName(value)),
        changeStreet: (value) => dispatch(changeStreet(value)),
        changePlz: (value) => dispatch(changePlz(value)),
        changePlace: (value) => dispatch(changePlace(value)),
        changeMail: (value) => dispatch(changeMail(value)),
        changeComment: (value) => dispatch(changeComment(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSite);