import * as types from 'app/constants/actionTypes';

let defaultState = {
    email: '',
    userId: '',
    authed: false,
    profile: {},
    wrongCredentials: false,
    errorUserGet: false
};

export let authorizeReducer = (state = defaultState, action) => {
    const {payload} = action;
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                email: action.email,
                authed: true,
                profile: action.user
            };
        case types.GET_USER_ID:
            return {
                ...state,
                userId: payload.userId,
                email: payload.email,
                authed: true
            };
        case types.LOGOUT:
            return {
                ...state,
                email: '',
                authed: false
            };
        case types.WRONG_CREDENTIALS:
            return {
                ...state,
                wrongCredentials: true
            };
        case types.CURRENT_CREDENTIALS:
            return {
                ...state,
                wrongCredentials: false
            };
        case types.NO_USER_GET:
            return {
                ...state,
                errorUserGet: true
            };
        case types.SUCCESS_USER_GET:
            return {
                ...state,
                errorUserGet: false
            };
        default:
            return state
    }
};
