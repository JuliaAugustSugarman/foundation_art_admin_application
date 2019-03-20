
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import ArtPage from '../ArtPage/ArtPage';
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
    // console.log('Art lives on', this.props.setArtworkReducer);
    // if (this.state.redirect) {
    //   return <Redirect push to='/artpage' />
    // }

    return (
      <>
        <div>


          {/* {this.props.setArtworkReducer.map((item) => ( */}
            <div>
               {this.displayArt()}
              {/* <img key={item.id} src={item.image} alt="a banana" /><button onClick={this.handleClick} key={item.id}>VIEW WORK DETAILS</button> */}
             </div>

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

