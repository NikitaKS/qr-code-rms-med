import React, {useEffect, useState} from 'react';
import s from './RegisterPage.module.css';
import RegisterFrom from '../../registerForm/registerForm';
import MobileBanner from '../../mobileBanner/mobileBanner';
import arrow from '../../../assets/rightArrow.svg';
import PreLoader from "../../preLoader/preLoader";
import {useDispatch, useSelector} from "react-redux";
import {statuses} from "../../../helpers/constants";
import ModalError from "../../modalError/modalError";
import {setStatus} from "../../../redux/registerReducer/registerReducer";
import {isAndroid} from 'react-device-detect';


const RegisterPageComponent = () => {
    const dispatch = useDispatch()
    const [showBanner, setShowBanner] = useState(true);
    const [step, setStep] = useState(1);
    const status = useSelector((state) => state.registerPage.status);
    const setDate = () => {
        const nextDate = new Date().getTime() + 86400000;
        localStorage.setItem('bannerDate', nextDate.toString())
    }

    useEffect(() => {
        let showDate = localStorage.getItem('bannerDate')
        let currentDate = new Date().getTime().toString()
        if (showDate >= currentDate) {
            setShowBanner(false)
        }
    }, [])

    const closeModal = () => {
        dispatch(setStatus(statuses.notInit))
    }
    const url = isAndroid
        ? 'https://play.google.com/store/apps/details?id=com.gravitygroup.rms&hl=ru'
        : 'https://apps.apple.com/ru/app/%D0%BC%D0%B5%D0%B4%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81/id1447371409';

    return (
        <div className={s.mainPageWrapper}>
            <div className='container-mb-tb'>
                {
                    showBanner
                    && <MobileBanner url={url} setShowBanner={setShowBanner} setDate={setDate}/>
                }
                <div className={s.top}>
                    {
                        step !== 1
                        &&
                        <img src={arrow} onClick={() => setStep(step - 1)} alt='back'/>
                    }
                    <h2>Регистрация</h2>
                </div>
                <RegisterFrom step={step} setStep={setStep}/>
                {
                    status === statuses.loading
                    && <PreLoader/>
                }
                {
                    status === statuses.error
                    && <ModalError closeModal={closeModal}/>
                }
            </div>
        </div>
    )
}
export default RegisterPageComponent;
