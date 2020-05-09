import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";
import Step2 from "./Step2";
import {getSmsCode} from "../../../redux/registerReducer/registerReducer";
import {useDispatch} from "react-redux";

const Step2Container = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSmsCode(props.id))

    }, [dispatch, props.id])
    return (
        <>
            <Step2 {...props}/>
        </>
    )
}
export default withRouter(Step2Container);
