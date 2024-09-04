import {
    ADMIN_ERROR,
    ADMIN_START, ADMIN_SUCCESS,
    IMAGES_ERROR,
    IMAGES_START,
    IMAGES_SUCCESS,
    IMAGES_UPLOAD_ERROR,
    IMAGES_UPLOAD_START,
    IMAGES_UPLOAD_SUCCESS
} from "./actions";

const initialState = {
    pictures: [],
    picturesError: '',
    uploadInfo: '',
    uploadError: '',
    adminPictures: [],
    adminVideos: [],
    adminBio: [],
    adminContacts: [],
    adminError: ''
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGES_START:
            return {
                ...state,
                pictures: [],
                picturesError: ''
            }
        case IMAGES_ERROR:
            return {
                ...state,
                pictures: [],
                picturesError: action.payload
            }
        case IMAGES_SUCCESS:
            return {
                ...state,
                pictures: action.payload,
                picturesError: ''
            }
        case IMAGES_UPLOAD_START:
            return {
                ...state,
                uploadInfo: '',
                uploadError: ''
            }
        case IMAGES_UPLOAD_ERROR:
            return {
                ...state,
                uploadInfo: '',
                uploadError: action.payload
            }
        case IMAGES_UPLOAD_SUCCESS:
            return {
                ...state,
                uploadInfo: action.payload,
                uploadError: action.payload.err
            }
        case ADMIN_START:
            return {
                ...state,
                pictures: [],
                picturesError: ''
            }
        case ADMIN_ERROR:
            return {
                ...state,
                pictures: [],
                picturesError: action.payload
            }
        case ADMIN_SUCCESS:
            return {
                ...state,
                pictures: action.payload,
                picturesError: ''
            }
        default:
            return state
    }
}

export default contentReducer;