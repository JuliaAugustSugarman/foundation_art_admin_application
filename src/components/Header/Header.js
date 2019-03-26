import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css'


class Header extends Component {


    render() {
        return (

            <div className = "logo">

            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;

}


export default connect(mapReduxStateToProps)(Header);

