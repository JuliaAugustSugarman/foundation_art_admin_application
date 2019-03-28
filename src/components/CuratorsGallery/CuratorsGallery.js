
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GalleryComponent from '../GalleryComponent/GalleryComponent';
import './CuratorsGallery.css';
import Grid from '@material-ui/core/Grid';



class CuratorsGallery extends Component {
  state = {
    style: '',
    color: '',
    size: '',

  };


  componentDidMount() {
    this.getArtwork();
  }

  //GET entire gallery of work
  getArtwork() {
    this.props.dispatch({ type: 'FETCH_GALLERY' })
  }

  //displays the gallery of work 
  displayArt() {
    console.log('inside disp function', this.props.setArtworkReducer);

    if (this.state.style !== '' || this.state.color !== '' || this.state.size !== '') {
      console.log('Filter');

      // apply filter
      return this.props.setArtworkReducer.filter(item => {

        if (this.state.color && this.state.style && this.state.size) {
          return (item.color_id === Number(this.state.color) &&
            item.style_id === Number(this.state.style) &&
            item.size === (this.state.size));
        }

        if (this.state.color && this.state.style) {
          return (item.color_id === Number(this.state.color) &&
            item.style_id === Number(this.state.style));
        }

        if (this.state.color && this.state.size) {
          return (item.color_id === Number(this.state.color) &&
            item.size_id === (this.state.size));
        }

        if (this.state.style && this.state.size) {
          return (item.style_id === Number(this.state.style) &&
            item.size_id === (this.state.size));
        }

        if (this.state.style) {
          return (item.style_id === Number(this.state.style));
        }

        if (this.state.color) {
          return (item.color_id === Number(this.state.color));
        }

        if (this.state.size) {
          return (item.size_id === (this.state.size));
        }

        return true;

      }
      ).map((item, index) =>
        <GalleryComponent key={index} item={item} />)
    } else {
      console.log('No filter');

      // no filter
      return this.props.setArtworkReducer.map((item, index) =>
        <GalleryComponent key={index} item={item} />)
    }



  }

  filterConditions = () => [

  ]



  handleChange = (property) => (event) => {
    this.setState({
      ...this.state,
      [property]: event.target.value
    });

  }


  render() {
    console.log('this.props.setArtworkReducer', this.props.setArtworkReducer);
    console.log('this.state', this.state);


    return (
      <>
        <Grid container className="whiteSpace">

          <Grid item className="dropdowns">

            <Grid container>

              <Grid item>
                <select onChange={this.handleChange("style")}>
                  <option value=''>STYLE</option>
                  <option value="1">Modern Art Work</option>
                  <option value="2">Digital Prints</option>
                  <option value="3">Pop Art</option>
                  <option value="4">Abstract Landscape</option>
                  <option value="5">Realist Landscape</option>
                  <option value="6">Graffiti</option>
                  <option value="7">Photography</option>
                  <option value="8">Painting</option>
                  <option value="9">3D Artwork</option>
                  <option value="10">Hyperrealism</option>
                  <option value="11">Magical Realism</option>
                  <option value="12">Impressionism</option>
                  <option value="13">Abstract Minimalism</option>
                  <option value="14">Mixed Media</option>
                  <option value="15">Miscellaneous</option>
                  <option value="16">Works on Paper</option>
                  <option value="17">Assemblage</option>
                  <option value="18">Collage</option>
                  <option value="19">Local Artist</option>
                  <option value="20">American Artists</option>
                  <option value="21">International Artists</option>
                </select>
              </Grid>

              <Grid item>
                <select onChange={this.handleChange("color")}>
                  <option value=''>COLOR</option>
                  <option value="1">Pastels</option>
                  <option value="2">Black and White</option>
                  <option value="11">Neon Electric</option>
                  <option value="12">Warm</option>
                  <option value="13">Cool Tones</option>
                  <option value="14">Monochromatic</option>
                  <option value="15">Retro Cool</option>
                  <option value="16">Primary Colors</option>
                  <option value="17">Earth Tones</option>
                  <option value="18">City Grit</option>
                  <option value="19">High Contrast</option>
                  <option value="22">Deep Dark</option>
                  <option value="23">Bright Bold</option>
                  <option value="24">Godly Glow</option>
                  <option value="25">Muted Tones</option>
                  <option value="26">Matallics</option>
                  <option value="27">Natural Materials</option>
                </select>
              </Grid>

              <Grid item>
                <select onChange={this.handleChange("size")}>
                  <option value=''>SIZE</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid item> */}
            <Grid container spacing={24}>
              {this.displayArt()}
            </Grid>
          {/* </Grid> */}

        </Grid>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}


export default connect(mapReduxStateToProps)(CuratorsGallery);

