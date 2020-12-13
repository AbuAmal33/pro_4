import React from 'react';

function Photo(props) {
    return (
        <li className={'photo'}>
            <img src={props.photo.thumbnailUrl} />
        </li>
    );
}

export default Photo;