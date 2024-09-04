import {
    ADMIN_ERROR,
    ADMIN_START,
    ADMIN_SUCCESS,
    BIO_EDIT_ERROR,
    BIO_EDIT_START,
    BIO_EDIT_SUCCESS,
    CLEAR_ADMIN_ERROR, CLEAR_ADMIN_MESSAGE,
    CONTACTS_EDIT_ERROR,
    CONTACTS_EDIT_START,
    CONTACTS_EDIT_SUCCESS,
    CONTENT_ERROR,
    CONTENT_START,
    CONTENT_SUCCESS,
    EMAIL_EDIT_ERROR,
    EMAIL_EDIT_START,
    EMAIL_EDIT_SUCCESS,
    IMAGE_DELETE_ERROR,
    IMAGE_DELETE_START,
    IMAGE_DELETE_SUCCESS,
    IMAGE_EDIT_ERROR,
    IMAGE_EDIT_START,
    IMAGE_EDIT_SUCCESS,
    IMAGES_UPLOAD_ERROR,
    IMAGES_UPLOAD_START,
    IMAGES_UPLOAD_SUCCESS,
    SCHEDULE_DELETE_ERROR,
    SCHEDULE_DELETE_START,
    SCHEDULE_DELETE_SUCCESS,
    SCHEDULE_UPLOAD_ERROR,
    SCHEDULE_UPLOAD_START,
    SCHEDULE_UPLOAD_SUCCESS,
    SEND_EMAIL_ERROR,
    SEND_EMAIL_START,
    SEND_EMAIL_SUCCESS,
    SET_ADMIN_ERROR, SET_ADMIN_MESSAGE,
    SOCIALS_DELETE_ERROR,
    SOCIALS_DELETE_START,
    SOCIALS_DELETE_SUCCESS,
    SOCIALS_UPLOAD_ERROR,
    SOCIALS_UPLOAD_START,
    SOCIALS_UPLOAD_SUCCESS,
    VIDEO_DELETE_ERROR,
    VIDEO_DELETE_START,
    VIDEO_DELETE_SUCCESS,
    VIDEO_UPLOAD_ERROR,
    VIDEO_UPLOAD_START,
    VIDEO_UPLOAD_SUCCESS,
} from "./actions";

const initialState = {
    pictures: [],
    videos: [],
    bio: [],
    contacts: [],
    email: '',
    socials: [],
    schedule: [],
    emailMessage: '',
    emailError: '',
    bioError: '',
    scheduleError: '',
    contactsError: '',
    socialsError: '',
    videosError: '',
    picturesError: '',
    uploadInfo: '',
    uploadError: '',
    adminMessage: '',
    adminPictures: [],
    adminVideos: [],
    adminBio: [],
    adminContacts: [],
    adminSchedule: [],
    adminEmail: '',
    adminSocials: [],
    adminError: ''
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTENT_START:
            return {
                ...state,
                error: '',
                schedule: [],
                videos: [],
                bio: [],
                pictures: [],
                socials: [],
                email: '',
                contacts: []
            }
        case CONTENT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CONTENT_SUCCESS:
            return {
                ...state,
                schedule: action.payload.schedule,
                videos: action.payload.videos,
                bio: action.payload.bio,
                pictures: action.payload.images,
                socials: action.payload.socials,
                email: action.payload.email,
                contacts: action.payload.contacts
            }
        case IMAGES_UPLOAD_START:
            return {
                ...state
            }
        case IMAGES_UPLOAD_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case IMAGES_UPLOAD_SUCCESS:
            return {
                ...state,
                adminMessage: action.payload.message,
                adminError: action.payload.err,
                adminPictures: action.payload.pictures
            }
        case ADMIN_START:
            return {
                ...state,
                adminPictures: [],
                adminVideos: [],
                adminBio: '',
                adminContacts: '',
                adminSocials: [],
                adminEmail: '',
                adminError: '',
                adminSchedule: [],
            }
        case ADMIN_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case ADMIN_SUCCESS:
            return {
                ...state,
                adminPictures: action.payload.pictures,
                adminVideos: action.payload.videos,
                adminBio: action.payload.bio,
                adminContacts: action.payload.contacts,
                adminEmail: action.payload.email,
                adminSocials: action.payload.socials,
                adminSchedule: action.payload.schedule,
            }
        case IMAGE_DELETE_START:
            return {
                ...state
            }
        case IMAGE_DELETE_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case IMAGE_DELETE_SUCCESS:
            return {
                ...state,
                adminPictures: action.payload.pictures,
                adminMessage: action.payload.message
            }
        case VIDEO_DELETE_START:
            return {
                ...state
            }
        case VIDEO_DELETE_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case VIDEO_DELETE_SUCCESS:
            return {
                ...state,
                adminVideos: action.payload.videos,
                adminMessage: action.payload.message
            }
        case SCHEDULE_DELETE_START:
            return {
                ...state
            }
        case SCHEDULE_DELETE_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case SCHEDULE_DELETE_SUCCESS:
            return {
                ...state,
                adminSchedule: action.payload.schedule,
                adminMessage: action.payload.message
            }
        case SOCIALS_DELETE_START:
            return {
                ...state
            }
        case SOCIALS_DELETE_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case SOCIALS_DELETE_SUCCESS:
            return {
                ...state,
                adminSocials: action.payload.socials,
                adminMessage: action.payload.message
            }
        case VIDEO_UPLOAD_START:
            return {
                ...state
            }
        case VIDEO_UPLOAD_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case VIDEO_UPLOAD_SUCCESS:
            return {
                ...state,
                adminMessage: action.payload.message,
                adminVideos: action.payload.videos
            }
        case SCHEDULE_UPLOAD_START:
            return {
                ...state
            }
        case SCHEDULE_UPLOAD_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case SCHEDULE_UPLOAD_SUCCESS:
            return {
                ...state,
                adminSchedule: action.payload.schedule,
                adminMessage: action.payload.message
            }
        case IMAGE_EDIT_START:
            return {
                ...state
            }
        case IMAGE_EDIT_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case IMAGE_EDIT_SUCCESS:
            return {
                ...state,
                adminMessage: action.payload.message,
                adminPictures: action.payload.pictures
            }
        case SOCIALS_UPLOAD_START:
            return {
                ...state
            }
        case SOCIALS_UPLOAD_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case SOCIALS_UPLOAD_SUCCESS:
            return {
                ...state,
                adminMessage: action.payload.message,
                adminSocials: action.payload.socials
            }
        case BIO_EDIT_START:
            return {
                ...state
            }
        case BIO_EDIT_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case BIO_EDIT_SUCCESS:
            return {
                ...state,
                adminMessage: action.payload.message,
                adminBio: action.payload.bio
            }
        case CONTACTS_EDIT_START:
            return {
                ...state
            }
        case CONTACTS_EDIT_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case CONTACTS_EDIT_SUCCESS:
            return {
                ...state,
                adminMessage: action.payload.message,
                adminContacts: action.payload.contacts
            }
        case EMAIL_EDIT_START:
            return {
                ...state
            }
        case EMAIL_EDIT_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case EMAIL_EDIT_SUCCESS:
            return {
                ...state,
                adminMessage: action.payload.message,
                adminEmail: action.payload.email
            }
        case SEND_EMAIL_START:
            return {
                ...state
            }
        case SEND_EMAIL_ERROR:
            return {
                ...state,
                emailError: action.payload
            }
        case SEND_EMAIL_SUCCESS:
            return {
                ...state,
                emailMessage: action.payload.message
            }
        case CLEAR_ADMIN_ERROR:
            return {
                ...state,
                adminError: ''
            }
        case SET_ADMIN_ERROR:
            return {
                ...state,
                adminError: action.payload
            }
        case CLEAR_ADMIN_MESSAGE:
            return {
                ...state,
                adminMessage: ''
            }
        case SET_ADMIN_MESSAGE:
            return {
                ...state,
                adminMessage: action.payload
            }
        default:
            return state
    }
}

export default contentReducer;