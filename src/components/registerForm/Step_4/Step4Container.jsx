import React, {useEffect} from 'react';
import Step4 from "./Step4";
import {useDispatch, useSelector} from "react-redux";
import {registerConfirm} from "../../../redux/registerReducer/registerReducer";
import {statuses} from "../../../helpers/constants";

const Step4Container = (props) => {
    const dispatch = useDispatch()
    const status = useSelector((state) => state.registerPage.status);
    const confirmRegister = () => {
        dispatch(registerConfirm(props.userData.id))
    }
    useEffect(() => {
        if (status === statuses.success) {
            window.location = 'https://rms-med.ru/lk/#/auth/main'
        }
    }, [status])
    return (
        <>
            <Step4 {...props} confirmRegister={confirmRegister}/>
        </>
    )
}
export default Step4Container;
