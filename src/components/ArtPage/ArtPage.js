
import React, { Component } from 'react';
import { connect } from 'react-redux';



class ArtPage extends Component {
    // Renders the entire app on the DOM

  
    render() {
      console.log('im here');
      

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
