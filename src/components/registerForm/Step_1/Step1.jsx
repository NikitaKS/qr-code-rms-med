import React, {useState} from 'react';
import s from "../RegisterForm.module.css";
import MaskedInput from "react-input-mask";
import {useForm} from "react-hook-form";
import {statuses} from "../../../helpers/constants";

const Step1 = (props) => {
    const {register, handleSubmit, errors} = useForm();
    const [tel, setTel] = useState("");
    const isNotFilledTel = v =>
        v && v.indexOf("_") === -1 ? undefined : "Введите номер телефона";

    const onSubmit = (data) => {
        const number = data.phoneNumber.match(/[0-9]/g).join('');
        props.sendSms(number)
        props.setFormData(data)

    };
    if (props.status === statuses.success) {
        props.setStep(2)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={s.registerForm}>
                <div className={s.formItem}>
                    <span>Проверьте свои данные:</span>
                    <div className={s.formItem}>
                        <input type={'text'} name="surname"
                               defaultValue={props.userData && props.userData.lastName}
                               ref={register({required: true})}
                               disabled/>
                    </div>
                    <input type={'text'} name="firstName"
                           defaultValue={props.userData && props.userData.firstName}
                           ref={register}
                           disabled/>
                </div>
                <div className={s.formItem}>
                    <input type={'text'} name="secondName"
                           defaultValue={props.userData && props.userData.secondName}
                           ref={register({required: true})}
                           disabled/>
                </div>
                <div className={s.formItem}>
                    <span>*Дата рождения:</span>
                    <div className={s.inputDate}>
                        <input type={'text'} name="date"
                               ref={register({required: true})}
                               defaultValue={props.userData && props.userData.birthday}
                               disabled/>
                        <div><span></span></div>
                    </div>
                </div>
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
                <button className={s.btn} disabled={props.status === statuses.loading}
                        type="submit">
                    Выслать СМС с кодом
                </button>
            </form>
        </>
    )
}
export default Step1;
