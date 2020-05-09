import {RESET_STORE, SET_CAPTCHA_CONFIG, SET_DATA_FROM_SERVER, SET_FORM_DATA} from "../../helpers/constants";
import {registerAPI} from "../../api/registerAPI";

let initialState = {
    formData: null,
    userData: null,
    captchaKey: null
}


export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA: {
            return {...state, formData: {...state.formData, ...action.value}}
        }
        case SET_DATA_FROM_SERVER: {
            return {
                ...state,
                userData: action.data
            }
        }
        case SET_CAPTCHA_CONFIG: {
            return {...state, captchaKey: action.key}
        }
        case RESET_STORE: {
            return state
        }
        default:
            return state
    }
}


////////// AC //////////

export const setFormData = (value) => ({type: SET_FORM_DATA, value})
export const setUserData = (data) => ({type: SET_DATA_FROM_SERVER, data})
export const resetStore = () => ({type: RESET_STORE})
export const setCaptchaKey = (key) => ({type: SET_CAPTCHA_CONFIG, key})

////////// ThunkCreators //////////

export const registerStep1 = (token) => async (dispatch) => {
    try {
        const result = await registerAPI.registerStep1(token)
        const captchaConfig = await registerAPI.getCaptchaConfig(result.id)
        dispatch(setUserData(result))
        dispatch(setCaptchaKey(captchaConfig.data.keys.web))

    } catch (e) {

    }
}
export const setCaptchaId = (id, captchaId) => async (dispatch) => {
    try {
        const result = await registerAPI.captchaValidation(id, captchaId)

        // dispatch(setUserData(result))
    } catch (e) {

    }
}
export const getSmsCode = (id) => async (dispatch) => {
    try {
        const result = await registerAPI.getSmsCode(id)

        // dispatch(setUserData(result))
    } catch (e) {

    }
}
export const registerConfirm = (id) => async (dispatch, getState) => {
    const state = getState().registerPage;
    const dataForServer = {
        "only_check_code": true,
        "phone": state.formData.phoneNumber,
        "code": state.formData.smsCode,
        "firstname": state.formData.firstName,
        "secondname": state.formData.secondName,
        "surname": state.formData.surname,
        "birthday": state.userData.birthday,
        "email": state.formData.email,
        "password": state.formData.password,
        "os": "android"
    };
    try {
        const result = await registerAPI.confirmRegistration(id, dataForServer)

        // dispatch(setUserData(result))
    } catch (e) {

    }
}
