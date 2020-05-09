import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {withRouter} from "react-router-dom";
import s from "../RegisterForm.module.css";
import arrow from '../../../assets/rightArrow.svg';

const Step2 = (props) => {
    const {register, handleSubmit, errors, setError} = useForm();
    const onSubmit = (data) => {
        if (data.smsCode === '0101') {
            console.log(data)
            props.history.push('./3')
            props.setFormData(data)
            props.setStep(3)
        } else {
            setError("smsCode", "notMatch", "Неверный СМС код")
        }
    };

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    const [time, setTime] = useState(120000)
    let min = addZero(Math.floor((time / 1000 / 60) << 0));
    let sec = addZero(Math.floor((time / 1000) % 60));
    useEffect(() => {
        let interval
        if (time > 0) {
            interval = setInterval(() => {
                setTime(time - 1000)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [time])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={`${s.registerForm} ${s.step2}`}>
                <div className={s.formItem}>
                    <span>На номер {props.phoneNumber} отправлено СМС с кодом активации</span>
                    <span style={{color: 'black', fontWeight: "600"}}>sms code: 0101</span>
                    <input className={s.inputPhoneNumber} name="smsCode" placeholder={'Введите код из СМС'}
                           type={'number'} autoComplete={'off'}
                           ref={register({required: true})}/>
                </div>
                {
                    errors && errors.smsCode
                    &&
                    <span>{errors.smsCode.message}</span>
                }
                <div className={s.btn}>
                    <button>
                        Подтвердить код
                        <img src={arrow} alt="#"/>
                    </button>
                </div>
                <div className={s.bottomBlock}>
                    <span>00:{min}:{sec}</span>
                    <span>Выслать новый код</span>
                </div>
            </form>
        </>
    )
}
export default withRouter(Step2);
