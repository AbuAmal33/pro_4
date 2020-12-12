import {useDispatch, useSelector} from "react-redux";
import {loadAlbums, loadPhotos} from "../redux/actions";
import {useEffect} from "react";
import Albums from "./Albums";
import Photos from "./Photos";


function App() {
  const dispatch = useDispatch();

  const loadingAlbums = useSelector(state => state.loadingAlbums);
  const loadingPhotos = useSelector(state => state.loadingPhotos);

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
