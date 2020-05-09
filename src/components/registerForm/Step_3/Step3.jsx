import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import s from "../RegisterForm.module.css";
import {withRouter} from "react-router-dom";
import arrow from "../../../assets/rightArrow.svg";
import showIcon from "../../../assets/view.svg";

const Step3 = (props) => {
    const {register, handleSubmit, errors} = useForm();
    const [showPass, setShow] = useState(false);
    const onSubmit = (data) => {
        console.log(data)
        props.history.push('./4')
        props.setFormData(data)
        props.setStep(4)
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={s.registerForm}>
                <div className={s.formItem}>
                    <span>Введите пароль для своей учетной записи:</span>
                    <input name="password" type={showPass ? 'text' : 'password'}
                           ref={register({
                               required: true,
                               minLength: {
                                   value: 4,
                                   message: 'Не мнее 4-х символов'
                               }
                           })} placeholder={'Пароль'}/>
                    <div className={s.showIcon} onMouseDown={() => setShow(true)}
                         onMouseUp={() => setShow(false)}>
                        <img src={showIcon} alt=""/>
                    </div>
                </div>
                {
                    errors && errors.password && <span>{errors.password.message}</span>
                }
                <div className={s.btn}>
                    <button>
                        Далее
                        <img src={arrow} alt="#"/>
                    </button>
                </div>
            </form>
        </>
    )
}
export default withRouter(Step3);
