import {useDispatch, useSelector} from "react-redux";
import {loadAlbums, loadPhotos} from "../redux/actions";
import {useEffect} from "react";
import Albums from "./Albums";
import Photos from "./Photos";


function App() {
  const dispatch = useDispatch();

  const loadingAlbums = useSelector(state => state.albums.loading);
  const loadingPhotos = useSelector(state => state.photos.loading);

  useEffect(() => {
    dispatch(loadAlbums());
    dispatch(loadPhotos());
  }, [])

  if(loadingAlbums || loadingPhotos) {
    return (
      <div className={'loading'}>
        идет загрузка...
      </div>
    )
  }

  return (
    <div className={'container'}>
      <Albums />
      <Photos />
    </div>
  );
}

export default App;
