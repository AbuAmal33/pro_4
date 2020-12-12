const initialState = {
    filter: "",
    photos: [],

    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'load/photos/start':
            return {
                ...state,
                loadingPhotos: true
            }
        case 'load/photos/success':
            return  {
                ...state,
                photos: action.payload,
                loadingPhotos: false
            }
        default:
            return state
    }
}
