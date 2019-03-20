
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';




class GalleryComponent extends Component {
    state = {
        redirect: false,
        selectedImage: '',

    }

   // redirects view artwork button to another page
    handleClick = id => () => {
        console.log('setting artwork on page', id);
        // this.props.dispatch({ type: 'SET-WORK', payload: this.state.artImage })
        // this.setState({
        //     artImage: {
        //         image: '',
        //         size: '',
        //         color: '',
        //         price: '',
        //         name: '',
        //         type: '',
        //         description: '',
        //     }
        // });

        
    
    }


    render() {
        console.log('Art lives on', this.props.setArtworkReducer);
        if (this.state.redirect) {
            console.log('selected image', this.state.selectedImage);
            
            return <Redirect to={{pathname: '/artpage', state: this.state.selectedImage}}/>
            // return <Redirect to {{ pathname: '/artpage', image: { image: this.state.selectedImage } }} image={this.state.selectedImage} push to='/artpage' />
        }
        console.log(this.props.item.image);
        
        return (

            <div>
                <img key={this.props.item.id} src={this.props.item.image} alt="a banana" /><button onClick={this.handleClick(this.props.item)} >VIEW WORK DETAILS</button>


            </div>

        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}


export default connect(mapReduxStateToProps)(GalleryComponent);

