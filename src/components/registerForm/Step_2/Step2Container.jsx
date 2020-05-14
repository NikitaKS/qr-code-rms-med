import React from 'react';
import Step2 from "./Step2";
import {useDispatch, useSelector} from "react-redux";
import {resendSms} from "../../../redux/registerReducer/registerReducer";

const Step2Container = (props) => {
    const dispatch = useDispatch()
    const code = useSelector((state) => state.registerPage.smsCode)
    const resend = () => {
        dispatch(resendSms())
    }
    return (
        <>
            <Step2 {...props} code={code} resend={resend}/>
        </>
    )
}
export default Step2Container;
