import React from 'react';

function Photo(props) {
    return (
        <li className={'photo'}>
            {props.photo.thumbnailUrl}
        </li>
    );
}

export default Photo;