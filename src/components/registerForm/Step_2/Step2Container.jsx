import React, {useEffect} from 'react';
import Step2 from "./Step2";
import {useDispatch, useSelector} from "react-redux";
import {resendSms, setStatus} from "../../../redux/registerReducer/registerReducer";
import {statuses} from "../../../helpers/constants";

const Step2Container = (props) => {
    const dispatch = useDispatch()
    const code = useSelector((state) => state.registerPage.smsCode)
    const resend = () => {
        dispatch(resendSms())
    }
    useEffect(() => {
        return () => {
            dispatch(setStatus(statuses.notInit))
        }
    }, [dispatch])
    return (
        <>
            <Step2 {...props} code={code} resend={resend}/>
        </>
    )
}
export default Step2Container;
