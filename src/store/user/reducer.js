import {
    LOGIN_ERROR,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGOUT_ERROR,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    REGISTER_ERROR,
    REGISTER_START,
    REGISTER_SUCCESS,
} from './actions';

const initialState = {
    currentUser: null,
    token: null,
    registerError: null,
    loginError: null,
    logoutError: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                currentUser: null,
                loginError: null,
                dolls: [],
                token: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.user,
                token: action.payload.token
            }
        case LOGIN_ERROR:

            return {
                ...state,
                loginError: action.payload
            }
        case REGISTER_START:
            return {
                ...state,
                currentUser: null,
                registerError: null,
                dolls: [],
                token: null
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.user,
                token: action.payload.token
            }
        case REGISTER_ERROR:
            return {
                ...state,
                registerError: action.payload,
            }
        case LOGOUT_START:
            return {
                ...state,
                logoutError: null
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                token: null,
                dolls: []
            }
        case LOGOUT_ERROR:
            return {
                ...state,
                logoutError: action.payload
            }

        default:
            return state
    }
}

export default userReducer;