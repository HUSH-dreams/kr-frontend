export const IMAGES_UPLOAD_START = "CONTENT::IMAGE_NAMES_START";
export const IMAGES_UPLOAD_SUCCESS = "CONTENT::IMAGE_NAMES_SUCCESS";
export const IMAGES_UPLOAD_ERROR = "CONTENT::IMAGE_NAMES_ERROR";
export const ADMIN_START = "CONTENT::ADMIN_START";
export const ADMIN_SUCCESS = "CONTENT::ADMIN_SUCCESS";
export const ADMIN_ERROR = "CONTENT::ADMIN_ERROR";
export const IMAGE_DELETE_START = "CONTENT::IMAGE_DELETE_START";
export const IMAGE_DELETE_SUCCESS = "CONTENT::IMAGE_DELETE_SUCCESS";
export const IMAGE_DELETE_ERROR = "CONTENT::IMAGE_DELETE_ERROR";
export const VIDEO_DELETE_START = "CONTENT::VIDEO_DELETE_START";
export const VIDEO_DELETE_SUCCESS = "CONTENT::VIDEO_DELETE_SUCCESS";
export const VIDEO_DELETE_ERROR = "CONTENT::VIDEO_DELETE_ERROR";
export const SCHEDULE_DELETE_START = "CONTENT::SCHEDULE_DELETE_START";
export const SCHEDULE_DELETE_SUCCESS = "CONTENT::SCHEDULE_DELETE_SUCCESS";
export const SCHEDULE_DELETE_ERROR = "CONTENT::SCHEDULE_DELETE_ERROR";
export const SOCIALS_DELETE_START = "CONTENT::SOCIALS_DELETE_START";
export const SOCIALS_DELETE_SUCCESS = "CONTENT::SOCIALS_DELETE_SUCCESS";
export const SOCIALS_DELETE_ERROR = "CONTENT::SOCIALS_DELETE_ERROR";
export const VIDEO_UPLOAD_START = "CONTENT::VIDEO_NAMES_START";
export const VIDEO_UPLOAD_SUCCESS = "CONTENT::VIDEO_NAMES_SUCCESS";
export const VIDEO_UPLOAD_ERROR = "CONTENT::VIDEO_NAMES_ERROR";
export const SCHEDULE_UPLOAD_START = "CONTENT::SCHEDULE_NAMES_START";
export const SCHEDULE_UPLOAD_SUCCESS = "CONTENT::SCHEDULE_NAMES_SUCCESS";
export const SCHEDULE_UPLOAD_ERROR = "CONTENT::SCHEDULE_NAMES_ERROR";
export const IMAGE_EDIT_START = "CONTENT::VIDEO_NAMES_START";
export const IMAGE_EDIT_SUCCESS = "CONTENT::VIDEO_NAMES_SUCCESS";
export const IMAGE_EDIT_ERROR = "CONTENT::VIDEO_NAMES_ERROR";
export const SOCIALS_UPLOAD_START = "CONTENT::SOCIALS_NAMES_START";
export const SOCIALS_UPLOAD_SUCCESS = "CONTENT::SOCIALS_NAMES_SUCCESS";
export const SOCIALS_UPLOAD_ERROR = "CONTENT::SOCIALS_NAMES_ERROR";
export const BIO_EDIT_START = "CONTENT::BIO_EDIT_START";
export const BIO_EDIT_SUCCESS = "CONTENT::BIO_EDIT_SUCCESS";
export const BIO_EDIT_ERROR = "CONTENT::BIO_EDIT_ERROR";
export const CONTACTS_EDIT_START = "CONTENT::CONTACTS_EDIT_START";
export const CONTACTS_EDIT_SUCCESS = "CONTENT::CONTACTS_EDIT_SUCCESS";
export const CONTACTS_EDIT_ERROR = "CONTENT::CONTACTS_EDIT_ERROR";
export const EMAIL_EDIT_START = "CONTENT::EMAIL_EDIT_START";
export const EMAIL_EDIT_SUCCESS = "CONTENT::EMAIL_EDIT_SUCCESS";
export const EMAIL_EDIT_ERROR = "CONTENT::EMAIL_EDIT_ERROR";
export const SEND_EMAIL_START = "CONTENT::SEND_EMAIL_START";
export const SEND_EMAIL_SUCCESS = "CONTENT::SEND_EMAIL_SUCCESS";
export const SEND_EMAIL_ERROR = "CONTENT::SEND_EMAIL_ERROR";
export const CONTENT_START = "CONTENT::CONTENT_START";
export const CONTENT_SUCCESS = "CONTENT::CONTENT_SUCCESS";
export const CONTENT_ERROR = "CONTENT::CONTENT_ERROR";
export const CLEAR_ADMIN_ERROR = "CONTENT::CLEAR_ADMIN_ERROR";
export const SET_ADMIN_ERROR = "CONTENT::SET_ADMIN_ERROR"
export const CLEAR_ADMIN_MESSAGE = "CONTENT::CLEAR_ADMIN_MESSAGE";
export const SET_ADMIN_MESSAGE = "CONTENT::SET_ADMIN_MESSAGE"
export const contentStart = () => ({
    type: CONTENT_START
})

export const contentSuccess = (data) => ({
    type: CONTENT_SUCCESS,
    payload: data
})

export const contentError = (err) => ({
    type: CONTENT_ERROR,
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

export const imageDeleteStart = () => ({
    type: IMAGE_DELETE_START
})

export const imageDeleteSuccess = (data) => ({
    type: IMAGE_DELETE_SUCCESS,
    payload: data
})

export const imageDeleteError = (err) => ({
    type: IMAGE_DELETE_ERROR,
    payload: err
})

export const videoDeleteStart = () => ({
    type: VIDEO_DELETE_START
})

export const videoDeleteSuccess = (data) => ({
    type: VIDEO_DELETE_SUCCESS,
    payload: data
})

export const videoDeleteError = (err) => ({
    type: VIDEO_DELETE_ERROR,
    payload: err
})

export const scheduleDeleteStart = () => ({
    type: SCHEDULE_DELETE_START
})

export const scheduleDeleteSuccess = (data) => ({
    type: SCHEDULE_DELETE_SUCCESS,
    payload: data
})

export const scheduleDeleteError = (err) => ({
    type: SCHEDULE_DELETE_ERROR,
    payload: err
})

export const socialsDeleteStart = () => ({
    type: SOCIALS_DELETE_START
})

export const socialsDeleteSuccess = (data) => ({
    type: SOCIALS_DELETE_SUCCESS,
    payload: data
})

export const socialsDeleteError = (err) => ({
    type: SOCIALS_DELETE_ERROR,
    payload: err
})

export const videoUploadStart = () => ({
    type: VIDEO_UPLOAD_START
})

export const videoUploadSuccess = (data) => ({
    type: VIDEO_UPLOAD_SUCCESS,
    payload: data
})

export const videoUploadError = (err) => ({
    type: VIDEO_UPLOAD_ERROR,
    payload: err
})

export const scheduleUploadStart = () => ({
    type: SCHEDULE_UPLOAD_START
})

export const scheduleUploadSuccess = (data) => ({
    type: SCHEDULE_UPLOAD_SUCCESS,
    payload: data
})

export const scheduleUploadError = (err) => ({
    type: SCHEDULE_UPLOAD_ERROR,
    payload: err
})

export const imageEditStart = () => ({
    type: IMAGE_EDIT_START
})

export const imageEditSuccess = (data) => ({
    type: IMAGE_EDIT_SUCCESS,
    payload: data
})

export const imageEditError = (err) => ({
    type: IMAGE_EDIT_ERROR,
    payload: err
})

export const socialsUploadStart = () => ({
    type: SOCIALS_UPLOAD_START
})

export const socialsUploadSuccess = (data) => ({
    type: SOCIALS_UPLOAD_SUCCESS,
    payload: data
})

export const socialsUploadError = (err) => ({
    type: SOCIALS_UPLOAD_ERROR,
    payload: err
})

export const bioEditStart = () => ({
    type: BIO_EDIT_START
})

export const bioEditSuccess = (data) => ({
    type: BIO_EDIT_SUCCESS,
    payload: data
})

export const bioEditError = (err) => ({
    type: BIO_EDIT_ERROR,
    payload: err
})

export const contactsEditStart = () => ({
    type: CONTACTS_EDIT_START
})

export const contactsEditSuccess = (data) => ({
    type: CONTACTS_EDIT_SUCCESS,
    payload: data
})

export const contactsEditError = (err) => ({
    type: CONTACTS_EDIT_ERROR,
    payload: err
})

export const emailEditStart = () => ({
    type: EMAIL_EDIT_START
})

export const emailEditSuccess = (data) => ({
    type: EMAIL_EDIT_SUCCESS,
    payload: data
})

export const emailEditError = (err) => ({
    type: EMAIL_EDIT_ERROR,
    payload: err
})

export const sendEmailStart = () => ({
    type: SEND_EMAIL_START
})

export const sendEmailSuccess = (data) => ({
    type: SEND_EMAIL_SUCCESS,
    payload: data
})

export const sendEmailError = (err) => ({
    type: SEND_EMAIL_ERROR,
    payload: err
})

export const clearAdminError = () => ({
    type: CLEAR_ADMIN_ERROR
})

export const setAdminError = (error) => ({
    type: SET_ADMIN_ERROR,
    payload: error
})

export const clearAdminMessage = () => ({
    type: CLEAR_ADMIN_MESSAGE
})

export const setAdminMessage = (message) => ({
    type: SET_ADMIN_MESSAGE,
    payload: message
})

export const contentInitiate = () => {
    return async dispatch => {
        dispatch(contentStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/content`);

            const data = await response.json();

            if (!data.success) {
                dispatch(contentError(data.reason))
            } else {
                dispatch(contentSuccess(data.data.data));
            }
        } catch (e) {
            dispatch(contentError(e.toString()));
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
                dispatch(imagesUploadSuccess(data.data));
            }
        } catch (e) {
            dispatch(imagesUploadError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const adminInitiate = (token) => {
    return async dispatch => {
        dispatch(adminStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/admin`, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                }
            });

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

export const imageDelete = (id, token) => {
    return async dispatch => {
        dispatch(imageDeleteStart());

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/image/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: {}
            })

            const data = await response.json();
            if (!data.success) {
                dispatch(imageDeleteError(data.reason))
            } else {
                dispatch(imageDeleteSuccess(data.data));
            }
        } catch (e) {
            dispatch(imageDeleteError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const videoDelete = (id, token) => {
    return async dispatch => {
        dispatch(videoDeleteStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/video/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer " + token
                }
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(videoDeleteError(data.reason))
            } else {
                dispatch(videoDeleteSuccess(data.data));
            }
        } catch (e) {
            dispatch(videoDeleteError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const scheduleDelete = (id, token) => {
    return async dispatch => {
        dispatch(scheduleDeleteStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/schedule/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer " + token
                }
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(scheduleDeleteError(data.reason))
            } else {
                dispatch(scheduleDeleteSuccess(data.data));
            }
        } catch (e) {
            dispatch(scheduleDeleteError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const socialsDelete = (id, token) => {
    return async dispatch => {
        dispatch(socialsDeleteStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/social/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer " + token
                }
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(socialsDeleteError(data.reason))
            } else {
                dispatch(socialsDeleteSuccess(data.data));
            }
        } catch (e) {
            dispatch(socialsDeleteError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const uploadVideo = (video, token) => {
    return async dispatch => {
        dispatch(videoUploadStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/video`, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    link: video.link,
                    descriptionRu: video.descriptionRu,
                    descriptionEng: video.descriptionEng
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(videoUploadError(data.reason))
            } else {
                dispatch(videoUploadSuccess(data.data));
            }
        } catch (e) {
            dispatch(videoUploadError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const uploadSchedule = (schedule, file, token) => {
    return async dispatch => {
        dispatch(scheduleUploadStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/schedule/image`, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: file
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(scheduleUploadError(data.reason))
            } else {
                const newResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/schedule`, {
                    method: "POST",
                    headers: {
                        "Authorization": "Bearer " + token
                    },
                    body: JSON.stringify({
                        link: schedule.link,
                        nameRu: schedule.nameRu,
                        nameEng: schedule.nameEng,
                        placeRu: schedule.placeRu,
                        placeEng: schedule.placeEng,
                        time: schedule.time,
                        descriptionRu: schedule.descriptionRu,
                        descriptionEng: schedule.descriptionEng,
                        file: data.data.file ? data.data.file : 'schedule.jpg',
                        id: 'none',
                        yandex: schedule.yandex
                    })
                });

                const newData = await newResponse.json();
                if (!newData.success) {
                    dispatch(scheduleUploadError(newData.reason))
                } else {
                    dispatch(scheduleUploadSuccess(newData.data));
                }
            }
        } catch (e) {
            dispatch(scheduleUploadError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const editSchedule = (schedule, token) => {
    return async dispatch => {
        dispatch(scheduleUploadStart());
        try {
            const newResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/schedule`, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    link: schedule.link,
                    nameRu: schedule.nameRu,
                    nameEng: schedule.nameEng,
                    placeRu: schedule.placeRu,
                    placeEng: schedule.placeEng,
                    time: schedule.time,
                    descriptionRu: schedule.descriptionRu,
                    descriptionEng: schedule.descriptionEng,
                    file: schedule.file,
                    yandex: schedule.yandex,
                    id: schedule.id
                })
            });

            const newData = await newResponse.json();

            if (!newData.success) {
                dispatch(scheduleUploadError(newData.reason))
            } else {
                dispatch(scheduleUploadSuccess(newData.data));
            }
        } catch (e) {
            dispatch(scheduleUploadError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const imageEdit = (image, token) => {
    return async dispatch => {
        dispatch(imageEditStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/image/${image.id}`, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    id: image.id,
                    descriptionRu: image.descriptionRu,
                    descriptionEng: image.descriptionEng
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(imageEditError(data.reason))
            } else {
                dispatch(imageEditSuccess(data.data));
            }
        } catch (e) {
            dispatch(imageEditError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const uploadSocials = (socials, token) => {
    return async dispatch => {
        dispatch(socialsUploadStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/social`, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    link: socials.link,
                    name: socials.name
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(socialsUploadError(data.reason))
            } else {
                dispatch(socialsUploadSuccess(data.data));
            }
        } catch (e) {
            dispatch(socialsUploadError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const editBio = (bio, token) => {
    return async dispatch => {
        dispatch(bioEditStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/bio`, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    text: bio.text,
                    lang: bio.lang
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(bioEditError(data.reason))
            } else {
                dispatch(bioEditSuccess(data.data));
            }
        } catch (e) {
            dispatch(bioEditError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const editContacts = (contacts, token) => {
    return async dispatch => {
        dispatch(contactsEditStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/contacts`, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    text: contacts.text,
                    lang: contacts.lang
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(contactsEditError(data.reason))
            } else {
                dispatch(contactsEditSuccess(data.data));
            }
        } catch (e) {
            dispatch(contactsEditError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const editEmail = (email, token) => {
    return async dispatch => {
        dispatch(emailEditStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/email`, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    email: email.email
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(emailEditError(data.reason))
            } else {
                dispatch(emailEditSuccess(data.data));
            }
        } catch (e) {
            dispatch(emailEditError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const sendEmail = (email) => {
    return async dispatch => {
        dispatch(sendEmailStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/mail`, {
                method: "POST",
                body: JSON.stringify({
                    email: email.email,
                    name: email.name,
                    message: email.message
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(sendEmailError(data.reason))
            } else {
                dispatch(sendEmailSuccess(data.data));
            }
        } catch (e) {
            dispatch(sendEmailError(e.toString()));
            console.log(e.toString());
        }
    }
}