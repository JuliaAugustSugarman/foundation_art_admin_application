
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';



class GalleryComponent extends Component {
    state = {
        redirect: false,

    }

    //redirects view artwork button to another page
    handleClick = id => () => {
        console.log('get work', id);
        
        this.setState({
            redirect: true,

        })
    }


    render() {
        console.log('Art lives on', this.props.setArtworkReducer);
        if (this.state.redirect) {
            return <Redirect push to='/artpage' />
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

