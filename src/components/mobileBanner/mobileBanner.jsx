import React from "react";
import s from './mobileBanner.module.css';
import logo from '../../assets/logoForBanner.png';

const MobileBanner = (props) => {
    const setDate = () => {
        props.setShowBanner(false)
        props.setDate()
    }
    return (
        <div className={s.bannerWrapper}>
            <div className={s.left}>
                <div className={s.closeBtn} onClick={setDate}></div>
                <div className={s.logo}>
                    <img src={logo} alt="#"/>
                </div>
            </div>
            <div className={s.right}>
                <div className={s.body}>
                    <span>Медсервис</span>
                    <span>Медицина</span>
                    <div className={s.rating}>
                        <span className={s.rait}>
                        <span className={s.orange}>★★★★</span>
                            <span className={s.half}>
                                <div>★</div>
                                <div>★</div>
                            </span>
                        </span>
                        <p>4.5</p>
                    </div>
                    <span>Беслатно</span>
                </div>
                <div className={s.link}>Смотреть</div>
            </div>
        </div>
    )
}
export default MobileBanner;