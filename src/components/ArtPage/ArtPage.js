
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
                        <br></br>
                        <li>Size:   {this.props.artPageReducer.size}</li>
                        <br></br>
                        <li>Color:  {this.props.artPageReducer.color}</li>
                        <br></br>
                        <li>Price:  ${this.props.artPageReducer.price}</li>
                        <br></br>
                        <li>Artist:  {this.props.artPageReducer.name}</li>
                        <br></br>
                        <li>Style of Work:  {this.props.artPageReducer.type}</li>
                        <br></br>
                        <li>Other Notes:  {this.props.artPageReducer.description}</li>
                    </ul>

                </div>

                    {/* <div>
                    <select className = "clientButton">
                        <option>SELECT PROJECT BOARD</option>
                        <option>Prime Digital Academy</option>
                        <option>RCM Plaza</option>
                        <option>Foshay</option>
                    </select>
                    </div> */}





            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;

}


export default connect(mapReduxStateToProps)(ArtPage);

