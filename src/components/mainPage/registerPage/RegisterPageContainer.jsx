import React from 'react';
import s from './RegisterPage.module.css';
import RegisterFrom from "../../registerForm/registerForm";

const RegisterPageComponent = () => {
    return (
        <div className={s.mainPageWrapper}>
            <div className="container-mb-tb">
                <div className={s.top}>
                    <h2>Регистрация</h2>
                </div>
                <RegisterFrom/>
            </div>
        </div>
    )
}
export default RegisterPageComponent;
