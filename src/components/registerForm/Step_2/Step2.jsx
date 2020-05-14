import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import s from "../RegisterForm.module.css";
import arrow from '../../../assets/rightArrow.svg';

const Step2 = (props) => {
    const {register, handleSubmit, errors, setError} = useForm();
    const onSubmit = (data) => {
        if (data.smsCode === props.code) {
            props.setStep(3)
            props.setFormData(data)
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

    const [time, setTime] = useState(12000)

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
    const resend = () => {
        props.resend(props.phoneNumber.match(/[0-9]/g).join(''))
        setTime(12000)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={`${s.registerForm} ${s.step2}`}>
                <div className={s.formItem}>
                    <span>На номер {props.phoneNumber} отправлено СМС с кодом активации</span>
                    <span style={{color: 'black', fontWeight: "600"}}>sms code: {props.code}</span>
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
                    <button disabled={time < 1000}>
                        Подтвердить код
                        <img src={arrow} alt="#"/>
                    </button>
                </div>
                <div className={s.bottomBlock}>
                    <span>00:{min}:{sec}</span>
                    {
                        time < 1000 &&
                        <span className={s.resendCode} onClick={resend}>Выслать новый код</span>
                    }
                </div>
            </form>
        </>
    )
}
export default Step2;
