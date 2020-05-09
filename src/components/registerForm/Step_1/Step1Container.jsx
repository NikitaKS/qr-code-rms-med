import React, {useEffect} from 'react';
import Step1 from "./Step1";
import ReCAPTCHA from "react-google-recaptcha";
import {useDispatch, useSelector} from "react-redux";
import {registerStep1, setCaptchaId} from "../../../redux/registerReducer/registerReducer";
import s from '../RegisterForm.module.css';

const Step1Container = (props) => {
    const dispatch = useDispatch();
    const captchaKey = useSelector((state) => state.registerPage.captchaKey)
    useEffect(() => {
        dispatch(registerStep1(props.token))
    }, [dispatch, props.token])


    function onChange(value) {
        dispatch(setCaptchaId(props.userData.id, value))
        console.log("Captcha value:", value);
    }

    return (
        <>
            <Step1 {...props}/>
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
