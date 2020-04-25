import React, {Component} from 'react';
import s from './MainPage.module.css';
import Step from "../steps/Step";
import {useParams} from 'react-router-dom';
import Header from "../header/Header";
import {ReactComponent as Question} from '../../assets/question.svg';

const MainPage = () => {
    const {token} = useParams()
    const stepData = {
        stepOne: {
            title: 'Шаг 1: Скачайте мобильное приложение',
            desc: 'Установите приложение Медсервис, просто скачав его по ссылке или сосканировав QR код:',
            textBlock: 'Со сканируйте QR код для скачивания',
        },
        stepTwo: {
            title: 'Шаг 2: Зарегистрируйтесь через QR код',
            desc: 'В приложении Медсервис выберите: Регистрация - Со сканировать QR код',
            textBlock: 'Со сканируйте Ваш персональный код для регистрации'
        }
    }
    return (
        <div className={s.mainPageWrapper}>
            <div className="container">
                <Header/>
                <div className={s.mainPageIn}>
                    <div className={s.topBlock}>
                        <h3>Уважаемый, Сергей Сергеевич</h3>
                        <p>
                            Компания РМС является провайдером услуг по вашему ДМС полису.
                            Для записи к врачам, зарегистрируйтесь в мобильном приложении Медсервис.
                            Записывайтесь к врачам по полису ДМС через приложение.
                        </p>
                    </div>
                    <Step count={2} stepData={stepData.stepOne}/>
                    {
                        token &&
                        <Step token={token} count={1} stepData={stepData.stepTwo}/>
                    }
                </div>
                <div className={s.buttonWrapper}>
                    <div className={s.buttonHelp}>
                        <span>?</span> Помощь
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainPage;
