
import React, { Component } from 'react';
import { connect } from 'react-redux';




class ArtPage extends Component {
    // Renders the entire app on the DOM

  
    render() {
        console.log('this is a clear page with clear objectives', this.props.setArtworkReducer);
      
//How do I get the image ID into this page
        return (
           
     <div>
               
               
                          
               
               
               
               
     </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
    
}


export default connect(mapReduxStateToProps)(ArtPage);

