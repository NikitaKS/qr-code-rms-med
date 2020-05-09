import React, {useEffect} from 'react';
import Step4 from "./Step4";
import {useDispatch} from "react-redux";
import {registerConfirm} from "../../../redux/registerReducer/registerReducer";

const Step4Container = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(registerConfirm(props.userData.id))
    }, [dispatch, props.userData.id])
    return (
        <>
            <Step4 {...props} />
        </>
    )
}
export default Step4Container;
