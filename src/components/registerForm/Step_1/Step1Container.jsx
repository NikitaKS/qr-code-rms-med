import React from 'react';
import Step1 from "./Step1";
import ReCAPTCHA from "react-google-recaptcha";
import {useDispatch, useSelector} from "react-redux";
import {registerByToken, sendSmsCode, setCaptchaId, setSmsCode} from "../../../redux/registerReducer/registerReducer";
import s from '../RegisterForm.module.css';
import {useDidMount} from "../../../helpers/constants";

const Step1Container = (props) => {
    const dispatch = useDispatch();
    const captchaKey = useSelector((state) => state.registerPage.captchaKey);
    const code = useSelector((state) => state.registerPage.smsCode);
    const callBack = () => {
        dispatch(registerByToken(props.token))
        dispatch(setSmsCode(0))
    }

    useDidMount(callBack)

    const sendSms = (phone) => {
        dispatch(sendSmsCode(phone))
    }

    function onChange(value) {
        dispatch(setCaptchaId(value))
    }

    return (
        <>
            <Step1 {...props} code={code} sendSms={sendSms}/>
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
