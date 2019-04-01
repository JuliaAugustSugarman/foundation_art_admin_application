
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ArtPage.css';




class ArtPage extends Component {





    render() {
        console.log('YO TONY', this.props.artPageReducer);


        return (

            <div className="imageText">
                <div className="pageImage">
                    <img className="pageImageSize" src={this.props.artPageReducer.image} alt="a banana" />
                </div>

              
                
                    
                <div className="pageList">
                    <ul className="artPageList">
                        <li>Size:   {this.props.artPageReducer.size}</li>
                        <li>Color:  {this.props.artPageReducer.color}</li>
                        <li>Price:  ${this.props.artPageReducer.price}</li>
                        <li>Artist:  {this.props.artPageReducer.name}</li>
                        <li>Style of Work:  {this.props.artPageReducer.type}</li>
                        <li>Other Notes:  {this.props.artPageReducer.description}</li>
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

