import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import s from '../RegisterForm.module.css';

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
                    <span>Добавьте адрес электронной почты:</span>
                    <input type={'text'} name="email" placeholder={'example@example.com'}
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
                    {/*<input type={'text'} name="email"*/}
                    {/*       defaultValue={props.userData && props.userData.email}*/}
                    {/*       ref={register()} disabled/>*/}
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
                    Внимательно укажите персональные <br/> данные,
                    это влияет на корректное <br/> оформление медицинской карты
                </div>
            </form>
        </>
    )
}
export default Step4;
