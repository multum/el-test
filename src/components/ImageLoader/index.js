import React from 'react';
import {connect} from 'react-redux';

import includes from 'lodash/includes';

import {ADD_LOADED_IMAGE} from "../../constans/imageLoader";

const ImageLoader = props => {

  let image = null;
  const {src, alt} = props;
  const {PUBLIC_URL} = process.env;

  const loadHandler = () => {
    const isLoaded = includes(props.loadedImages, src);
    const parentNode = image.parentNode;
    if (isLoaded) {
      parentNode.classList.add('no-transition');
    } else props.addLoadedImage(src);
    parentNode.classList.add('loaded');
  };

  return <img
    src={PUBLIC_URL + src}
    alt={alt}
    onLoad={loadHandler}
    ref={element => image = element}
  />;
};

const mapStateToProps = ({imagesReducer}) => {
  return {
    loadedImages: imagesReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addLoadedImage: image => dispatch({
      type: ADD_LOADED_IMAGE,
      image
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageLoader);