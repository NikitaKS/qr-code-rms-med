import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setFormData} from "../../redux/registerReducer/registerReducer";
import StepTabs from "../stepTabs/StepTabs";
import s from "./RegisterForm.module.css";
import {compose} from "redux";
import Step1Container from "./Step_1/Step1Container";
import Step2Container from "./Step_2/Step2Container";
import Step3Container from "./Step_3/Step3Container";
import Step4Container from "./Step_4/Step4Container";


const RegisterFrom = (props) => {
    let token = props.match.params.token;

    return (
        <div className={s.registerFormWrapper}>
            <StepTabs step={props.step}/>
            <div className={s.paddingBlock}>
                {
                    props.step === 1 &&
                    <Step1Container setStep={props.setStep} setFormData={props.setFormData}
                                    userData={props.userData} token={token}/>
                }

                {
                    props.step === 2 &&
                    <Step2Container setStep={props.setStep} setFormData={props.setFormData}
                                    phoneNumber={props.phoneNumber}
                                    id={props.userData?.id ? props.userData.id : 0}/>
                }
                {
                    props.step === 3 &&
                    <Step3Container setStep={props.setStep} setFormData={props.setFormData}/>
                }
                {
                    props.step === 4 &&
                    <Step4Container setStep={props.setStep} setFormData={props.setFormData}
                                    userData={props.userData}/>
                }
            </div>
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