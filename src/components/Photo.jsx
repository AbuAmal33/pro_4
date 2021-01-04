import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

function Photo(props) {
  return (
    <div className={'photo'}>
      <img src={props.photo.thumbnailUrl} />
    </div>
  );
}


Photo.propTypes = {
  photo: PropTypes.object
}

export default Photo;
