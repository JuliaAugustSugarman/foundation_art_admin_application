
import React, { Component } from 'react';
import { connect } from 'react-redux';


class CuratorsGallery extends Component {
    // Renders the entire app on the DOM

  componentDidMount() {
    this.getArtwork();
  }
  getArtwork() {
    this.props.dispatch({ type: 'FETCH_GALLERY' })
  }
    render() {
      console.log('TJ', this.props.setArtworkReducer);
      
        return (
            <>
            <div>
              {/* <p>{JSON.stringify(this.props.setArtworkReducer)}</p> */}
              {this.props.setArtworkReducer.map((item) => (
            
                <img key={item.id} src={item.image} />

           
            ))}
          </div>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}


export default connect(mapReduxStateToProps)(CuratorsGallery);

