import React from 'react';
import s from './RegisterForm.module.css';

const CommonStep = ({register, userData}) => {
    return (
        <>
            <div className={s.formItem}>
                <span>Проверьте свои данные:</span>
                <div className={s.formItem}>
                    <input type={'text'} name="surname"
                           defaultValue={userData && userData.lastName}
                           ref={register({required: true})}
                           disabled/>
                </div>
                <input type={'text'} name="firstName"
                       defaultValue={userData && userData.firstName}
                       ref={register}
                       disabled/>
            </div>
            <div className={s.formItem}>
                <input type={'text'} name="secondName"
                       defaultValue={userData && userData.secondName}
                       ref={register({required: true})}
                       disabled/>
            </div>
            <div className={s.formItem}>
                <span>*Дата рождения:</span>
                <div className={s.inputDate}>
                    <input type={'text'} name="date"
                           ref={register({required: true})}
                           defaultValue={userData && userData.birthday}
                           disabled/>
                    <div><span></span></div>
                </div>
            </div>
        </>
    )
}
export default CommonStep;
