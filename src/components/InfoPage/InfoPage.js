
import React, { Component } from 'react';
import { connect } from 'react-redux';


class infoPage extends Component {
    // Renders the entire app on the DOM

  componentDidMount() {
    this.getArtwork();
  }
  getArtwork() {
    this.props.dispatch({ type: 'FETCH_GALLERY' })
  }
    render() {
        return (
            <div>
               
          {JSON.stringify(this.props.setArtworkReducer)}

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}


export default connect(mapReduxStateToProps)(infoPage);

