import {useEffect, useState} from "react";

export const SET_FORM_DATA = './registerPage/SET_FORM_DATA';
export const SET_DATA_FROM_SERVER = './registerPage/SET_DATA_FROM_SERVER';
export const RESET_STORE = './registerPage/RESET_STORE';
export const SET_CAPTCHA_CONFIG = './registerPage/SET_CAPTCHA_CONFIG';
export const SET_NEW_ID = './registerPage/SET_NEW_ID';
export const SET_SMS_CODE = './registerPage/SET_SMS_CODE';
export const SET_STATUS = './registerPage/SET_STATUS';

export const statuses = {
    notInit: 0,
    loading: 1,
    success: 2,
    error: 3
};


export const useDidMount = (callBack) => {
    const [firstRender, setFirstRender] = useState(true)
    useEffect(() => {
        if (firstRender) {
            callBack && callBack()
            setFirstRender(false)
        }
    }, [firstRender, setFirstRender, callBack])
    return firstRender
}