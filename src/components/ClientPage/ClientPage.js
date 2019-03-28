import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './ClientPage.css'


class ClientPage extends Component {



    render() {
        return (
            <>
                <div>
                    <h1 class="background">Client Page Coming Soon</h1>



                </div>


            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;

}


export default withRouter(connect(mapReduxStateToProps)(ClientPage));

