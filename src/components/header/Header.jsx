import React from "react";
import s from './Header.module.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.logo}>
                <a href={'https://rms-med.ru/lk/#/login'} target={'_blank'} rel="noopener noreferrer">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div className={s.contacts}>
                <div className={s.phoneNumber}>8 (800) 770-70-94</div>
                <div className={s.description}>Для застрахованных по ДМС</div>
            </div>
        </div>
    )
};
export default Header;