
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GalleryComponent from '../GalleryComponent/GalleryComponent';


class CuratorsGallery extends Component {

  componentDidMount() {
    this.getArtwork();
  }

  //GET entire gallery of work
  getArtwork() {
    this.props.dispatch({ type: 'FETCH_GALLERY' })
  }

  //displays the gallery of work 
  displayArt() {
    console.log('inside disp function', this.props.setArtworkReducer);
    return this.props.setArtworkReducer.map(item =>
      <GalleryComponent key={item.id} item={item} />)
  }


  render() {
    return (
      <>
        <div>
          <div>
            {this.displayArt()}
          </div>
        </div>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}


export default connect(mapReduxStateToProps)(CuratorsGallery);

