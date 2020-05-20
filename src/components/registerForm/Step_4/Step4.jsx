import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import s from '../RegisterForm.module.css';
import CommonStep from "../commonStep";

const Step4 = (props) => {
    const {register, handleSubmit, errors} = useForm();
    const [checked, setChecked] = useState(true)
    const onSubmit = (data) => {
        if (checked) {
            props.setFormData(data)
            props.confirmRegister()
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={s.registerForm}>
                <CommonStep register={register} userData={props.userData}/>
                <div className={s.formItem}>
                    <span>Добавьте адрес электронной почты:</span>
                    <input type={'text'} name="email" placeholder={'Введите почту'}
                           ref={register(
                               {
                                   required: true,
                                   pattern: {
                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                       message: "example@example.com"
                                   }
                               }
                           )}
                    />
                    {
                        errors && errors.email
                        && <span>{errors.email.message}</span>
                    }
                </div>
                <button className={s.btn} disabled={!checked} type="submit">
                    Завершить регистрацию
                </button>
                <label className={s.container}>
                    <span>Нажимая на кнопку Вы принимаете условия Соглашений</span>
                    <input type="checkbox" checked={checked} onChange={() => {
                        setChecked(!checked)
                    }}/>
                    <span className={s.checkmark}></span>
                </label>
                <div className={s.infoBlock}>
                    Внимательно укажите персональные данные,
                    это влияет на корректное <br/> оформление медицинской карты
                </div>
            </form>
        </>
    )
}
export default Step4;
