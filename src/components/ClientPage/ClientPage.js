import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './ClientPage.css'


class ClientPage extends Component {



    render() {
        return (
            <>
                <div>


                  

                </div>


            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;

}


export default withRouter(connect(mapReduxStateToProps)(ClientPage));

