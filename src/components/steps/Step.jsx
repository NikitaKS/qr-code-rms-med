import React from 'react';
import QRCode from 'qrcode.react';
import s from './steps.module.css';
import appleStore from '../../assets/appStore.png';
import googlePlay from '../../assets/google.png';


const QrComponent = (props) => {
    return (
        <div className={s.qrWrapper}>
            {
                props.show &&
                <div className={s.icon}>
                    <a href={props.qrURL} target="_blank" rel='noopener noreferrer'>
                        <img src={props.img} alt="app"/>
                    </a>
                </div>
            }
            <QRCode value={props.qrURL} size={props.size}/>
        </div>
    )
}


const Step = (props) => {
    const {title, desc, textBlock} = props.stepData;
    const urls = {
        appleUrl: 'https://apps.apple.com/ru/app/%D0%BC%D0%B5%D0%B4%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81/id1447371409',
        googleUrl: 'https://play.google.com/store/apps/details?id=com.gravitygroup.rms&hl=ru',
        uniqueUrl: `https://mp.rms-med.ru/RMS/register?token=${props.token}`
    };
    return (
        <div className={s.stepWrapper}>
            <div className={s.stepIn}>
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className={s.qrBlock}>
                    <div className={s.left}>
                        <p>{textBlock}</p>
                    </div>
                    <div className={s.right}>
                        {
                            props.count === 2 ?
                                <>
                                    <QrComponent size={80} show={true} qrURL={urls.appleUrl}
                                                 img={appleStore}/>
                                    <QrComponent size={80} show={true} qrURL={urls.googleUrl}
                                                 img={googlePlay}/>
                                </>
                                :
                                <QrComponent size={150} show={false} qrURL={urls.uniqueUrl}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Step;
