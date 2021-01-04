import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Album(props) {
  const dispatch = useDispatch();

  return (
    <li>
      <Link to={`/${props.album.id}`}>
        <div className={'album'}>{props.album.title}</div>
      </Link>
    </li>
  );
}


Album.propTypes = {
  album: PropTypes.object
}

export default Album;
