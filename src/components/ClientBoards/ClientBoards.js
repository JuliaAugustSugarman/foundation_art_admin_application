import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './ClientBoards.css'


class ClientBoards extends Component {

    

    render() {
        return (
            <>
                <div>
                   <h1 class = "background">Client Boards Coming Soon</h1>



                </div>


            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;

}


export default withRouter(connect(mapReduxStateToProps)(ClientBoards));

