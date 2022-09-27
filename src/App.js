import PropTypes from "prop-types";
import React from "react";
import "./App.css";
import Header from "./header";
import Nav from "./nav";
import Gallery from "react-grid-gallery";
import photos from "./photos";
import YouTube from 'react-youtube-embed'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images,
    };

    // this.onSelectImage = this.onSelectImage.bind(this);
  }

  // // onSelectImage handler
  // onSelectImage (index, image) {
  //   let images = this.state.images.slice();
  //   let img = images[index];
  //   if (img.hasOwnProperty('isSelected'))
  //     img.isSelected = !img.isSelected;
  //   else
  //     img.isSelected = true;

  //   this.setState({
  //     images: images
  //   });
  // }

  render() {
    return (
      <div className="gallery">
        <Header />
        <Nav />
        <YouTube id='6ATNhJaj-lc' />

        <div className="about">
          <h1>Portfolio</h1>
          <p>
            The work shown in this gallery represents a few examples of the
            types of projects we specialize in: reproducing Park Slope and
            Ditmas Park historical entrance doors; intricate parquet floor
            border patterns; kitchen and bathroom remodels; matched exterior
            woodwork, and fine interior architectural details.
          </p>
          <p>
            We know these houses; every day we do what others say can't be done
            anymore.
          </p>
        </div>

        <Gallery
          images={this.state.images}
          backdropClosesModal={true}
          showCloseButton={false}
        ></Gallery>
      </div>
    );
  }
}
App.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
      isSelected: PropTypes.bool,
    })
  ).isRequired,
};

App.defaultProps = {
  images: photos,
};

export default App;
