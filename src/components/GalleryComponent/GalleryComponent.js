
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


class GalleryComponent extends Component {
    state = {
        redirect: false,
        selectedImage: '',
    }


    // redirects to artpage when view artWork button is clicked
    handleClick = selectedItem => () => {
        console.log('setting artwork on page', selectedItem);
        this.props.dispatch({ type: 'SET_WORK', payload: selectedItem })
        this.setState({
            redirect: true
        });
    }


    //Delete button on gallery component
    handleDelete = id => {
        return () => {
            this.props.dispatch({ type: 'DELETE_ARTWORK', payload: id })
        }
    }


    render() {
        if (this.state.redirect) {
            console.log('selected image', this.state.selectedImage);
            return <Redirect to={{ pathname: '/artpage' }} />
        }
        console.log(this.props.item.image);

        return (
            <div className="container">
                <div className="imageGallery">
                    <img key={this.props.item.id} src={this.props.item.image} alt={this.props.item} /><br />
                    <button onClick={this.handleClick(this.props.item)} >VIEW WORK DETAILS</button>
                    <button onClick={this.handleDelete(this.props.artPageReducer.id)}>DELETE ARTWORK</button>
                </div>
            </div>

        );
    }
}




const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(GalleryComponent);

