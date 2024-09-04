export const IMAGES_START = "CONTENT::IMAGES_START";
export const IMAGES_SUCCESS = "CONTENT::IMAGES_SUCCESS";
export const IMAGES_ERROR = "CONTENT::IMAGES_ERROR";
export const IMAGES_UPLOAD_START = "CONTENT::IMAGE_NAMES_START";
export const IMAGES_UPLOAD_SUCCESS = "CONTENT::IMAGE_NAMES_SUCCESS";
export const IMAGES_UPLOAD_ERROR = "CONTENT::IMAGE_NAMES_ERROR";
export const ADMIN_START = "CONTENT::ADMIN_START";
export const ADMIN_SUCCESS = "CONTENT::ADMIN_SUCCESS";
export const ADMIN_ERROR = "CONTENT::ADMIN_ERROR";

export const imagesStart = () => ({
    type: IMAGES_START
})

export const imagesSuccess = (data) => ({
    type: IMAGES_SUCCESS,
    payload: data
})

export const imagesError = (err) => ({
    type: IMAGES_ERROR,
    payload: err
})

export const imagesUploadStart = () => ({
    type: IMAGES_UPLOAD_START
})

export const imagesUploadSuccess = (data) => ({
    type: IMAGES_UPLOAD_SUCCESS,
    payload: data
})

export const imagesUploadError = (err) => ({
    type: IMAGES_UPLOAD_ERROR,
    payload: err
})

export const adminStart = () => ({
    type: ADMIN_START
})

export const adminSuccess = (data) => ({
    type: ADMIN_SUCCESS,
    payload: data
})

export const adminError = (err) => ({
    type: ADMIN_ERROR,
    payload: err
})

export const imagesInitiate = () => {
    return async dispatch => {
        dispatch(imagesStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/image`);

            const data = await response.json();

            if (!data.success) {
                dispatch(imagesError(data.reason))
            } else {
                dispatch(imagesSuccess(data.data.pictures));
            }
        } catch (e) {
            dispatch(imagesError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const uploadInitiate = (images, token) => {
    return async dispatch => {
        dispatch(imagesUploadStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/image`, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: images
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(imagesUploadError(data.reason))
            } else {
                dispatch(imagesUploadSuccess(data.data.msg));
            }
        } catch (e) {
            dispatch(imagesUploadError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const adminInitiate = () => {
    return async dispatch => {
        dispatch(adminStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/image`);

            const data = await response.json();

            if (!data.success) {
                dispatch(adminError(data.reason))
            } else {
                dispatch(adminSuccess(data.data));
            }
        } catch (e) {
            dispatch(adminError(e.toString()));
            console.log(e.toString());
        }
    }
}