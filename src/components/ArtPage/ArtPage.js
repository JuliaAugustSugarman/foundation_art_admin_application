
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ArtPage.css';




class ArtPage extends Component {





    render() {
        console.log('YO TONY', this.props.artPageReducer);


        return (

            <div>
                <div className="pageImage">
                    <img className="pageImageSize" src={this.props.artPageReducer.image} alt="a banana" />
                </div>


                <div className="pageList">
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

