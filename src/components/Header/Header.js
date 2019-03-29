import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css'


class Header extends Component {


    render() {
        return (
<>
            <div>

                <img class="logo" src="images/final.png" alt="header"/>

            </div>
            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;

}


export default connect(mapReduxStateToProps)(Header);

