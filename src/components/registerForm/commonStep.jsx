import React from 'react';
import s from './RegisterForm.module.css';

const CommonStep = (props) => {
    return (
        <>
            <div className={s.formItem}>
                <span>Проверьте свои данные:</span>
                <input type={'text'} name="secondName"
                       defaultValue={props.userData && props.userData.firstName}
                    // ref={register}
                       disabled/>
            </div>
            <div className={s.formItem}>
                <input type={'text'} name="firstName"
                       defaultValue={props.userData && props.userData.lastName}
                    // ref={register({required: true})}
                       disabled/>
            </div>
            <div className={s.formItem}>
                <input type={'text'} name="surname"
                       defaultValue={props.userData && props.userData.secondName}
                    // ref={register({required: true})}
                       disabled/>
            </div>
            <div className={s.formItem}>
                <span>*Дата рождения:</span>
                <div className={s.inputDate}>
                    <input type={'text'} name="date"
                           defaultValue={props.userData && props.userData.birthday}
                           disabled/>
                    <div><span></span></div>
                </div>
            </div>
        </>
    )
}
export default CommonStep;
