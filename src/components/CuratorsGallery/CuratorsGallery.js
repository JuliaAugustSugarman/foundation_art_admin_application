
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GalleryComponent from '../GalleryComponent/GalleryComponent';




class CuratorsGallery extends Component {
  // state = {
  //   redirect: false,

  // }
  componentDidMount() {
    this.getArtwork();
  }

  //props reducer
  getArtwork() {
    this.props.dispatch({ type: 'FETCH_GALLERY' })
  }
//   //redirects view artwork button to another page
//   handleClick = () => {
//     this.setState({
//       redirect: true,

//     })
// }
  displayArt() {
    console.log('inside disp function', this.props.setArtworkReducer);
    return this.props.setArtworkReducer.map(item=>
    <GalleryComponent key={item.id} item={item}/>)
    
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

