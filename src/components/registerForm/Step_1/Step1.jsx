import React, {useState} from 'react';
import s from "../RegisterForm.module.css";
import MaskedInput from "react-input-mask";
import {useForm} from "react-hook-form";
import {useDidMount} from "../../../helpers/constants";
import CommonStep from "../commonStep";

const Step1 = (props) => {
    const {register, handleSubmit, errors} = useForm();
    const [tel, setTel] = useState("");
    const isNotFilledTel = v =>
        v && v.indexOf("_") === -1 ? undefined : "Введите номер телефона";

    const firstRender = useDidMount()

    const onSubmit = (data) => {
        const number = data.phoneNumber.match(/[0-9]/g).join('');
        console.log(data)
        props.sendSms(number)
        props.setFormData(data)
    };
    if (props.code && !firstRender) {
        props.setStep(2)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={s.registerForm}>
                <CommonStep register={register} userData={props.userData}/>
                <div className={s.formItem}>
                    <span>Введите номер телефона для регистрации:</span>
                    <MaskedInput
                        value={tel}
                        name="phoneNumber"
                        inputRef={register({
                            validate: {
                                inputTelRequired: isNotFilledTel
                            }
                        })}
                        mask="+7 (999) 999-99-99"
                        alwaysShowMask
                        onChange={e => setTel(e.target.value)}
                    >
                    </MaskedInput>
                    {
                        errors && errors.phoneNumber
                        &&
                        <span>{errors.phoneNumber.message}</span>
                    }
                </div>
                <button className={s.btn}
                        type="submit">
                    Выслать СМС с кодом
                </button>
            </form>
        </>
    )
}
export default Step1;
