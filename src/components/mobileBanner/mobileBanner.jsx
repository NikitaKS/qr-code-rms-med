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
                    <div>
                        <span>Медсервис</span>
                    </div>
                    <div>
                        <span>Медицина</span>
                    </div>
                    <div className={s.rait}>
                        <span className={s.orange}>★★★★</span>
                        <span className={s.half}>
                                <div>★</div>
                                <div>★</div>
                            </span>
                        <p>4.5</p>
                    </div>
                    <div>
                        <span>Беслатно</span>
                    </div>
                </div>
                <div className={s.link}>
                    <a href={props.url} target={'_black'}>
                        Смотреть
                    </a>
                </div>
            </div>
        </div>
    )
}
export default MobileBanner;