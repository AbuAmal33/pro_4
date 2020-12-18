import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

function Album(props) {
    const dispatch = useDispatch();

    return (
        <li>
            <Link to={`/${props.album.id}`}>
                <div className={'album'} >
                    {props.album.title}
                </div>
            </Link>
        </li>
    );
}

export default Album;