import React from 'react';
import Step4 from "./Step4";
import {useDispatch} from "react-redux";
import {registerConfirm} from "../../../redux/registerReducer/registerReducer";

const Step4Container = (props) => {
    const dispatch = useDispatch()
    const confirmRegister = () => {
        dispatch(registerConfirm(props.userData.id))
    }
    return (
        <>
            <Step4 {...props} confirmRegister={confirmRegister}/>
        </>
    )
}
export default Step4Container;
