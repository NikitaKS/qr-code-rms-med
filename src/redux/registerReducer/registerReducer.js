import {
    RESET_STORE,
    SET_CAPTCHA_CONFIG,
    SET_DATA_FROM_SERVER,
    SET_FORM_DATA,
    SET_NEW_ID,
    SET_SMS_CODE,
    SET_STATUS,
    statuses
} from "../../helpers/constants";
import {registerAPI} from "../../api/registerAPI";
import {setCookie} from "../../helpers/Cookie";

let initialState = {
    formData: null,
    userData: null,
    captchaKey: null,
    id: null,
    smsCode: 0,
    status: statuses.notInit
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
export const setNewID = (id) => ({type: SET_NEW_ID, id})
export const setSmsCode = (code) => ({type: SET_SMS_CODE, code})
export const setStatus = (status) => ({type: SET_STATUS, status})

////////// ThunkCreators //////////

export const registerByToken = (token) => async (dispatch) => {
    try {
        dispatch(setStatus(statuses.loading))
        const result = await registerAPI.registerByToken(token)
        if (result.code === 0) {
            dispatch(setUserData(result.data.user))
            dispatch(setStatus(statuses.success))
        } else {
            dispatch(setStatus(statuses.error))
        }
    } catch (e) {
        dispatch(setStatus(statuses.error))
    }
}

export const sendSmsCode = (phone) => async (dispatch) => {
    try {
        const res = await registerAPI.sendSms(phone)
        const captchaConfig = await registerAPI.getCaptchaConfig(res.data.id)
        if (res.code === 0 && captchaConfig.code === 0) {
            dispatch(setCaptchaKey(captchaConfig.data.keys.web))
            dispatch(setNewID(res.data.id))
        } else {
            dispatch(setStatus(statuses.error))
        }
    } catch (e) {
        dispatch(setStatus(statuses.error))
    }
}
export const setCaptchaId = (captchaId) => async (dispatch, getState) => {
    try {
        dispatch(setStatus(statuses.loading))
        await registerAPI.captchaValidation(getState().registerPage.id, captchaId)
        const resultCode = await registerAPI.getSmsCode(getState().registerPage.id)
        if (resultCode.code === 0) {
            dispatch(setSmsCode(resultCode.data.codeOtp))
            dispatch(setStatus(statuses.success))
        } else {
            dispatch(setStatus(statuses.error))
        }
    } catch (e) {
        dispatch(setStatus(statuses.error))
    }
}
// TEST RESEND
export const resendSms = () => async (dispatch, getState) => {
    try {
        // const resultCode = await registerAPI.getSmsCode(getState().registerPage.id)
        // dispatch(setSmsCode(resultCode))
    } catch (e) {
        // dispatch(setStatus(statuses.error))
    }
}

export const registerConfirm = () => async (dispatch, getState) => {
    const state = getState().registerPage;
    const dataForServer = {
        "only_check_code": true,
        "phone": state.formData.phoneNumber.match(/[0-9]/g).join(''),
        "code": state.formData.smsCode,
        "firstname": state.formData.firstName,
        "secondname": state.formData.secondName,
        "surname": state.formData.surname,
        "birthday": state.userData.birthday,
        "email": state.formData.email,
        "password": state.formData.password,
        "os": "web"
    };
    try {
        dispatch(setStatus(statuses.loading))
        const confirmResult1 = await registerAPI.confirmRegistration(state.id, dataForServer)
        setTimeout(async () => {
            const confirmResult2 = await registerAPI.confirmRegistration(state.id,
                {...dataForServer, only_check_code: false})
            const tokenForLogin = await registerAPI.getTokenForLogin(
                state.formData.phoneNumber.match(/[0-9]/g).join(''), state.formData.password)
            setCookie('token', tokenForLogin.data.token, 86400000)
            const promises = await Promise.all([confirmResult1, confirmResult2, tokenForLogin])
            const resultCode = promises.every((v) => v.code === 0)
            resultCode ? dispatch(setStatus(statuses.success)) : dispatch(setStatus(statuses.error))
        }, 1000)
    } catch (e) {
        dispatch(setStatus(statuses.error))
    }
    dispatch(resetStore())
}
