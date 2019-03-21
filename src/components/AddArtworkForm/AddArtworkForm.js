
import React, { Component } from 'react';
import { connect } from 'react-redux';


class CuratorsGallery extends Component {

   


    render() {
        return (
            <>
                <div>
                    {/* <form onSubmit={this.addNewArtwork}>
                        <input value={this.state.artwork.size} onChange={this.handleChangeFor('name')} placeholder="name" />
                        <input value={this.state.artwork.price} onChange={this.handleChangeFor('date_completed')} type="date" />
                        <select value={this.state.artwork.color} onChange={this.handleChangeFor('tag_id')}>
                            <option>- SELECT ACCENT COLOR -</option>
                            {this.props.tags.map(tag =>
                                <option key={tag.id}>{tag.name}</option>
                            )}
                        </select>
                        <input value={this.state.artwork.github} onChange={this.handleChangeFor('github')} placeholder="Github" />
                        <input value={this.state.artwork.website} onChange={this.handleChangeFor('website')} placeholder="Website (optional)" />
                        <input value={this.state.artwork.description} onChange={this.handleChangeFor('description')} placeholder="Description" />
                        <input type="submit" value="Submit" />
                    </form> */}
                </div>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}


export default connect(mapReduxStateToProps)(CuratorsGallery);

