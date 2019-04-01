import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './ClientBoards.css'


class ClientBoards extends Component {

    

    render() {
        return (
            <>
                <div>
                   
                    <div className="clientbody">
                        <img src={require('./clientPage.png')} />
                    
                    </div>



                </div>


            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;

}


export default withRouter(connect(mapReduxStateToProps)(ClientBoards));

