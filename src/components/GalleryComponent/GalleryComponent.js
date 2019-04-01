
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Grid from '@material-ui/core/Grid';


class GalleryComponent extends Component {
    state = {
        redirect: false,
        selectedImage: '',
        showAdd: true,
    }


    // redirects to artpage when view artWork button is clicked
    handleClick = selectedItem => () => {
        console.log('setting artwork on page', selectedItem);
        this.props.dispatch({ type: 'SET_WORK', payload: selectedItem })
        this.setState({
            redirect: true
        });
    }


    toggleButton = () => {
        console.log('in toggle button');
        this.setState({
            showAdd: !(this.state.showAdd),
        })
    }

    // showButtonText = () => {
    //     if (this.state.showAdd) {
    //         return <button>AVAILABLE</button>
    //     }
    //     else {
    //         return <button onClick={this.removePizza(this.props.item)}>RENTED</button>
    //     }
    // }
    //Delete button on gallery component
    // handleDelete = id => {
    //     return () => {
    //         this.props.dispatch({ type: 'DELETE_ARTWORK', payload: id })
    //     }
    // }
  

    getButton = () => {
        return this.state.showAdd ? <button onClick={this.toggleButton}>AVAILABLE</button> : 
            <button style={{ backgroundColor: '#ff5b45' }} onClick={this.toggleButton}>RENTED</button>;
    }


    render() {
        if (this.state.redirect) {
            console.log('selected image', this.state.selectedImage);
            return <Redirect to={{ pathname: '/artpage' }} />
        }
        console.log(this.props.item.image);
        console.log('Tj', this.props.setArtworkReducer);
        
        return (

         

            <Grid item sm={3} xs={12} className="image-div">
                <img key={this.props.item.id} src={this.props.item.image} alt={this.props.item} /> <br />


                <div className="item-button-div">
                    <button onClick={this.handleClick(this.props.item)} >VIEW WORK DETAILS</button>
                </div>

                <div className="item-button-div">
                    {/* <button style={{backgroundColor: 'blue'}} onClick={this.toggleButton}>{this.getButtonText()}</button> */}
                    {this.getButton()}
                </div>

                <div>
                    <select className="clientButton">
                        <option>SELECT PROJECT BOARD</option>
                        <option>Prime Digital Academy</option>
                        <option>RCM Plaza</option>
                        <option>Foshay</option>
                    </select>
                </div>
                
                </Grid>
              

        );
    }
}




const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(GalleryComponent);

