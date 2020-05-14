import React, {useEffect} from 'react';
import Step1 from "./Step1";
import ReCAPTCHA from "react-google-recaptcha";
import {useDispatch, useSelector} from "react-redux";
import {registerByToken, sendSmsCode, setCaptchaId} from "../../../redux/registerReducer/registerReducer";
import s from '../RegisterForm.module.css';
import {setCookie} from "../../../helpers/Cookie";

const Step1Container = (props) => {
    const dispatch = useDispatch();
    const captchaKey = useSelector((state) => state.registerPage.captchaKey);
    const status = useSelector((state) => state.registerPage.status);
    useEffect(() => {
        let date = new Date();
        date.setDate(date.getDate() + 1);
        dispatch(registerByToken(props.token))
        setCookie('token', props.token, date)
    }, [dispatch, props.token])

    const sendSms = (phone) => {
        dispatch(sendSmsCode(phone))
    }

    function onChange(value) {
        dispatch(setCaptchaId(value))
    }

    return (
        <>
            <Step1 {...props} status={status} sendSms={sendSms}/>
            {
                captchaKey &&
                <div className={s.captcha}>
                    <ReCAPTCHA sitekey={captchaKey} onChange={onChange}/>
                </div>
            }
        </>

    )
}
export default Step1Container;
