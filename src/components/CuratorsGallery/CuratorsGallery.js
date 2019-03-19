
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router';



class CuratorsGallery extends Component {
    // Renders the entire app on the DOM
    state = {
      redirect: false,

    }




  componentDidMount() {
    this.getArtwork();
  }
  getArtwork() {
    this.props.dispatch({ type: 'FETCH_GALLERY' })
  }


  handleClick =()=>{
    this.setState({
      redirect: true,

    })


    
  }
    render() {
      console.log('Art lives on', this.props.setArtworkReducer);
      if (this.state.redirect){
        return <Redirect push to = '/artpage' />
      }

        return (
            <>
            <div>
             
              {/* <p>{JSON.stringify(this.props.setArtworkReducer)}</p> */}
              {this.props.setArtworkReducer.map((item) => (
                <div>
                <img key={item.id} src={item.image} alt = "a banana"/><button onClick = {this.handleClick} key={item.id}>View Art</button>
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

