
import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddArtWorkForm extends Component {
state= {
    image:'',
    size: '',
    price: '',
    description: '',
    title: '',
    }
    

handleChangeFor = (property) => (event) => {
    this.setState({
    ...this.state, 
    [property]: event.target.value,
    })

}//handleChangeFor add to artwork gallery



addNewArtwork = () => {
    alert('Added New ArtWork!')
  console.log(this.state);
    this.props.dispatch({
        type: "ADD_ARTWORK",
        payload: this.state,

    })
    this.setState({
    image:'',
    size: '',
    price: '',
    description: '',
    title: '',
    })
}


render() {
        return (
        
                <div>
                    <form onSubmit={this.addNewArtwork}>
                       <input value={this.state.image} onChange={this.handleChangeFor('image')} placeholder= "Image URL" />
                        <input value={this.state.size} onChange={this.handleChangeFor('size')} placeholder= "Size of ArtWork" />
                        $ <input value={this.state.price} onChange={this.handleChangeFor('price')} type = "number" placeholder ="Price" />
                         <input id= "box" value={this.state.description} onChange={this.handleChangeFor('description')} placeholder="Description" />
                        <input value={this.state.title} onChange={this.handleChangeFor('title')} placeholder="Title Of Piece" />
                       
                       
                      <center>  <button>  ADD ARTWORK TO GALLERY  </button></center>
                    </form>
                </div>
            
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}


export default connect(mapReduxStateToProps)(AddArtWorkForm);

