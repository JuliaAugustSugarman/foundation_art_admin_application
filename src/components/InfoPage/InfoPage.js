
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
            <img src= "https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg"></img>
          {JSON.stringify(this.props.setArtworkReducer)}

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}


export default connect(mapReduxStateToProps)(infoPage);

