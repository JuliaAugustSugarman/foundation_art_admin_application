import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Home.css'


class Home extends Component {

    handleClickGallery = () => {
        this.props.history.push('/curatorGallery')
    };

    handleClickAddArtwork = () => {
        this.props.history.push('/artform')
    };

    handleClickClientBoards = () => {
        this.props.history.push('/clientBoards')
    };

    handleClickAddClient = () => {
        this.props.history.push('/clientForm')
    };


    render() {
        return (
            <>
          <div>
              <div className="container">

                    <div className="buttonBox button-grid-container">
                        
                            <div className="button-grid-item"><button className="homeButton " onClick={this.handleClickGallery} > CURATOR'S GALLERY</button></div>
                        
                            <div className="button-grid-item"><button className="homeButton" onClick = {this.handleClickClientBoards}> CLIENT BOARDS</button></div>
                          
                            <div className="button-grid-item"><button className="homeButton" onClick = {this.handleClickAddArtwork}> ADD ART WORK</button></div>
                            <div className="button-grid-item"><button className="homeButton" onClick={this.handleClickAddClient}> ADD CLIENT</button></div>
                           

                    </div>

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

