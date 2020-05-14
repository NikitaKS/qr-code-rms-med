import React, {useEffect, useState} from 'react';
import s from './RegisterPage.module.css';
import RegisterFrom from '../../registerForm/registerForm';
import MobileBanner from '../../mobileBanner/mobileBanner';
import arrow from '../../../assets/rightArrow.svg';

const RegisterPageComponent = () => {
    const [showBanner, setShowBanner] = useState(true);
    const [step, setStep] = useState(1);
    const setDate = () => {
        const nextDate = new Date().getTime() + 5000;
        localStorage.setItem('bannerDate', nextDate.toString())
    }
    useEffect(() => {
        let showDate = localStorage.getItem('bannerDate')
        let currentDate = new Date().getTime().toString()
        if (showDate >= currentDate) {
            setShowBanner(false)
        }
    }, [])
    return (
        <div className={s.mainPageWrapper}>
            <div className='container-mb-tb'>
                {
                    showBanner && <MobileBanner setShowBanner={setShowBanner} setDate={setDate}/>
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
            </div>
        </div>
    )
}
export default RegisterPageComponent;
