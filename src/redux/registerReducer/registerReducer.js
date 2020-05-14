import {
    RESET_STORE,
    SET_CAPTCHA_CONFIG,
    SET_CAPTCHA_PASSED,
    SET_DATA_FROM_SERVER,
    SET_FORM_DATA, SET_NEW_ID, SET_SMS_CODE, SET_STATUS, statuses
} from "../../helpers/constants";
import {registerAPI} from "../../api/registerAPI";

let initialState = {
    formData: null,
    userData: null,
    captchaKey: null,
    isCaptchaPassed: false,
    id: null,
    smsCode: 0,
    status: 'isNotInit'
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
        case SET_CAPTCHA_PASSED: {
            return {...state, isCaptchaPassed: action.status}
        }
        case SET_NEW_ID: {
            return {...state, id: action.id}
        }
        case SET_SMS_CODE: {
            return {...state, smsCode: action.code}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
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
export const isCaptchaPassed = (status) => ({type: SET_CAPTCHA_PASSED, status})
export const setNewID = (id) => ({type: SET_NEW_ID, id})
export const setSmsCode = (code) => ({type: SET_SMS_CODE, code})
export const setStatus = (status) => ({type: SET_STATUS, status})

////////// ThunkCreators //////////

export const registerByToken = (token) => async (dispatch) => {
    try {
        const result = await registerAPI.registerByToken(token)
        dispatch(setUserData(result))
    } catch (e) {

    }
}

export const sendSmsCode = (phone) => async (dispatch) => {
    try {
        dispatch(setStatus(statuses.loading))
        const res = await registerAPI.sendSms(phone)
        const captchaConfig = await registerAPI.getCaptchaConfig(res.data.id)
        dispatch(setCaptchaKey(captchaConfig.data.keys.web))
        dispatch(setNewID(res.data.id))
    } catch (e) {

    }
}
export const setCaptchaId = (captchaId) => async (dispatch, getState) => {
    try {
        await registerAPI.captchaValidation(getState().registerPage.id, captchaId)
        const resultCode = await registerAPI.getSmsCode(getState().registerPage.id)
        dispatch(isCaptchaPassed(true))
        dispatch(setSmsCode(resultCode))
        dispatch(setStatus(statuses.success))
    } catch (e) {
        dispatch(isCaptchaPassed(false))
    }
}

export const resendSms = () => async (dispatch, getState) => {
    try {
        const resultCode = await registerAPI.getSmsCode(getState().registerPage.id)
        dispatch(setSmsCode(resultCode))
    } catch (e) {

    }
}

export const registerConfirm = (id) => async (dispatch, getState) => {
    const state = getState().registerPage;
    const dataForServer = {
        "only_check_code": true,
        "phone": state.formData.phoneNumber.match(/[0-9]/g).join(''),
        "code": state.formData.smsCode,
        "firstname": state.formData.firstName,
        "secondname": state.formData.secondName,
        "surname": state.formData.surname,
        "birthday": state.userData.birthday,
        "email": 'asfas@asf.com',
        "password": state.formData.password,
        "os": "web"
    };
    try {
        const result = await registerAPI.confirmRegistration(state.id, dataForServer)
        setTimeout(async () => {
            await registerAPI.confirmRegistration(state.id,
                {...dataForServer, only_check_code: false})
            alert('success')
        }, 1000)

        // dispatch(setUserData(result))

    } catch (e) {
        alert('error')
    }
    dispatch(resetStore())
}
