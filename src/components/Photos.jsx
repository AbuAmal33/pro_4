import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Photo from './Photo';

function Photos(props) {
  const photos = useSelector((state) => state.photos.photos);
  const filter = useSelector((state) => state.photos.filter);

  const id = parseInt(useParams().id);

  const dispatch = useDispatch();

  const filteredPhotos = photos
    .filter((photo) => photo.albumId === id)
    .filter((photo) => photo.url.indexOf(filter) > -1);

  if (!id) {
    return (
      <div className={'no-user-select'}>
        выбери пользователя из списка слева
      </div>
    );
  }
  //можно использывать и if(isNaN(id))
  return (
    <div className={'photos'}>
      <div className={'name_2'}>ФОТО</div>
      <div>
        {filteredPhotos.map((photo) => {
          return <Photo photo={photo} key={photo.id} />;
        })}
      </div>
    </div>
  );
}

export default Photos;
