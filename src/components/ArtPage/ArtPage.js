
import React, { Component } from 'react';
import { connect } from 'react-redux';




class ArtPage extends Component {
    // Renders the entire app on the DOM

   
  

    render() {
        console.log('YO TONY', this.props.artPageReducer);
      
//How do I get the image ID into this page
        return (
           
     <div>
              <div>
                  <img src= {this.props.artPageReducer.image} />
              </div> 
              
              
             <div>
                <ul>
                   <li>{this.props.artPageReducer.size}</li>
                        <li>{this.props.artPageReducer.color}</li>
                        <li>{this.props.artPageReducer.price}</li>
                        <li>{this.props.artPageReducer.name}</li>
                        <li>{this.props.artPageReducer.type}</li>
                        <li>{this.props.artPageReducer.description}</li>
                    </ul>
                    
            </div>

                       
    
               
               
               
               
     </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
    
}


export default connect(mapReduxStateToProps)(ArtPage);

