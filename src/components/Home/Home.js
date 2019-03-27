import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Home.css'


class Home extends Component {

    handleClickGallery = () => {
        this.props.history.push('/curatorGallery')
    };

    handleClickArtPage = () => {
        this.props.history.push('/artPage')
    };


    render() {
        return (
            <>
          <div>
                    <div className="buttonBox">
                        <button onClick = {this.handleClickGallery} > CURATOR'S GALLERY</button>
                        <button onClick = {this.handleClickArtPage}> ADD ART WORK</button>
                        <button> CLIENT BOARDS</button>
                    </div>



          </div>
            
               
            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;

}


export default withRouter(connect(mapReduxStateToProps)(Home));

