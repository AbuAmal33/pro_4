import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Photo from "./Photo";

function Photos(props) {
    const photos = useSelector(state => state.photos);
    const selectedUserId = useSelector(state => state.selectedUserId);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const filteredPhotos = photos
        .filter(photo => photo.albumId === selectedUserId)
        .filter(photo => photo.url.indexOf(filter) > -1)

    if(selectedUserId === null) {
        return (
            <div className={'no-user-select'}>
                выбери пользователя из списка слева
            </div>
        )
    }

    return (
        <div className={'photos'}>
            <div className={'name_2'}>
                ФОТО
            </div>
            <ol>
                {filteredPhotos.map(photo => {
                    return <Photo photo={photo} key={photo.id}/>
                })}
            </ol>
        </div>
    );
}

export default Photos;