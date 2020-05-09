import React from "react";
import s from './mobileBanner.module.css';
import logo from '../../assets/logoForBanner.png';

const MobileBanner = (props) => {
    return (
        <div className={s.bannerWrapper}>
            <div className={s.left}>
                <div className={s.closeBtn}>x</div>
                <div className={s.logo}>
                    <img src={logo} alt="#"/>
                </div>
            </div>
            <div className={s.right}>
                <div className={s.body}>
                    <span>Хочу к врачу</span>
                    <span>Медицина</span>
                    <div className={s.rating}>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <p>4.8</p>
                        {/*<img src={star} alt="#"/>*/}
                        {/*<img src={star} alt="#"/>*/}
                        {/*<img src={star} alt="#"/>*/}
                        {/*<img src={star} alt="#"/>*/}
                        {/*<img src={star} alt="#"/>*/}
                    </div>
                    <span>Беслатно</span>
                </div>
                <div className={s.link}>Смотреть</div>
            </div>
        </div>
    )
}
export default MobileBanner;