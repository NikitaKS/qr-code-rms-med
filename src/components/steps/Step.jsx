import React from 'react';
import QRCode from 'qrcode.react';
import s from './steps.module.css';
import appleStore from '../../assets/appStore.png';
import googlePlay from '../../assets/googlePlay.png';


const QrComponent = (props) => {
    return (
        <div className={s.qrWrapper}>
            {
                props.show &&
                <div className={s.icon}>
                    <img src={props.img} alt=""/>
                </div>
            }
            <QRCode value={props.qrURL} size={props.size}/>
        </div>
    )
}


const Step = (props) => {
    const {title, desc, textBlock} = props.stepData;
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
                                    <QrComponent size={80} show={true} qrURL={'AppStore'}
                                                 img={appleStore}
                                    />
                                    <QrComponent size={80} show={true} qrURL={'google Play'}
                                                 img={googlePlay}
                                    />
                                </>
                                :
                                <QrComponent size={150} show={false} qrURL={props.token}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Step;
