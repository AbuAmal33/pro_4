import React from 'react';

function Photo(props) {
    return (
        <li>
            {props.photo.thumbnailUrl}
        </li>
    );
}

export default Photo;