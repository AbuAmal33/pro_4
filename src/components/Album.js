import React from 'react';
import {useDispatch} from "react-redux";
import {selectUser} from "../redux/actions";

function Album(props) {
    const dispatch = useDispatch();

    const handleSelectorAlbum = () => {
        dispatch(selectUser(props.album.id))
    }

    return (
        <div onClick={handleSelectorAlbum}>
            <li className={'album'} >
                {props.album.title}
            </li>
        </div>

    );
}

export default Album;