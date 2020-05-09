import React, {useEffect, useState} from "react";
import {Route, withRouter} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {setFormData} from "../../redux/registerReducer/registerReducer";
import StepTabs from "../stepTabs/StepTabs";
import s from "./RegisterForm.module.css";
import {compose} from "redux";
import Step1Container from "./Step_1/Step1Container";
import Step2Container from "./Step_2/Step2Container";
import Step3Container from "./Step_3/Step3Container";
import Step4Container from "./Step_4/Step4Container";


const RegisterFrom = (props) => {
    let stepURL = Number(props.match.params.step);
    let token = props.match.params.token;
    const [step, setStep] = useState(stepURL)

    useEffect(() => {
        setStep(Number(props.match.params.step))
    }, [props.match.params.step])

    return (
        <div className={s.registerFormWrapper}>
            <StepTabs step={step}/>
            <Route path={'/mobileTest/token=:token/step/1'}
                   render={() => <Step1Container setStep={setStep} setFormData={props.setFormData}
                                                 userData={props.userData} token={token}
                   />}/>
            <Route path={'/mobileTest/token=:token/step/2'}
                   render={() => <Step2Container setStep={setStep} setFormData={props.setFormData}
                                                 phoneNumber={props.phoneNumber} id={props.userData.id}
                   />}/>
            <Route path={'/mobileTest/token=:token/step/3'}
                   render={() => <Step3Container setStep={setStep} setFormData={props.setFormData}/>}/>
            <Route path={'/mobileTest/token=:token/step/4'}
                   render={() => <Step4Container setStep={setStep} setFormData={props.setFormData}
                                                 userData={props.userData}
                   />}/>
        </div>
    );
}
const mapState = (state) => {
    return {
        userData: state.registerPage.userData,
        phoneNumber: state.registerPage.formData?.phoneNumber
    }
}
export default compose(
    connect(mapState, {setFormData}),
    withRouter
)(RegisterFrom);