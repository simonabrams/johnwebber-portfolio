import PropTypes from "prop-types";
import React from "react";
import "./App.css";
import Header from "./header";
import Nav from "./nav";
import Gallery from "react-grid-gallery";
import photos from "./photos";

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

        <div className="about">
          <h1>Portfolio</h1>
          The work shown in this gallery represent examples of the types of
          projects I specialize in — from full kitchen builds, to exterior work,
          to recreating fine interior architectural details.
        </div>

        <Gallery
          images={this.state.images}
          backdropClosesModal={true}
          showCloseButton={false}
        />
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
