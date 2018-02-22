import React, {Component} from 'react';
import {connect} from 'react-redux';

import includes from 'lodash/includes';

import {ADD_LOADED_IMAGE} from "../../constans/imageLoader";

class ImageLoader extends Component {

  loadHandler = () => {
    const parent = this.image.parentNode;
    const isLoaded = includes(this.props.loadedImages, this.props.src);

    if (isLoaded) {
      parent.classList.add('no-transition');
    } else {
      this.props.addLoadedImage(this.props.src);
    }

    parent.classList.add('loaded');
  };

  render() {
    return (
      <img
        src={process.env.PUBLIC_URL + this.props.src}
        alt={this.props.alt}
        onLoad={this.loadHandler} ref={image => this.image = image}
      />
    );
  }
}

const mapStateToProps = ({imagesReducer}) => {
  return {
    loadedImages: imagesReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addLoadedImage: (image) => {
      dispatch({
        type: ADD_LOADED_IMAGE,
        image
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageLoader);