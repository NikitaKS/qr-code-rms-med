import React from 'react';
import s from './MainPage.module.css';
import Step from "../steps/Step";
import {useParams} from 'react-router-dom';
import Header from "../header/Header";

const MainPage = () => {
    const {token} = useParams()
    const stepData = {
        stepOne: {
            title: 'Шаг 1: Скачайте мобильное приложение',
            desc: 'Установите приложение Медсервис, просто скачав его по ссылке или сосканировав QR код:',
            textBlock: 'QR код для скачивания',
        },
        stepTwo: {
            title: 'Шаг 2: Зарегистрируйтесь через QR код',
            desc: 'Вы можете пройти процедуру ускоренной  регистрации, при которой в приложение автоматически будут внесены Ваши данные. Для этого выберете в приложении: «Регистрация»  - «Сосканировать QR-код».',
            textBlock: 'Индивидуальный QR-код для автоматической регистрации'
        }
    }
    return (
        <div className={s.mainPageWrapper}>
            <div className="container">
                <Header/>
                <div className={s.mainPageIn}>
                    <div className={s.topBlock}>
                        <h3>Уважаемый клиент!</h3>
                        <p>
                            ООО «Регион-Медсервис» осуществляет обслуживание по Вашему полису добровольного медицинского
                            страхования.
                            Для комфортного и удобного использования ДМС предлагаем Вам установить приложение
                            «МЕДСЕРВИС»,
                            в котором Вы сможете получить всю информацию по программе страхования,
                            записаться к врачу и воспользоваться другими полезными функциями.
                        </p>
                    </div>
                    <Step count={2} stepData={stepData.stepOne}/>
                    {
                        token &&
                        <Step token={token} count={1} stepData={stepData.stepTwo}/>
                    }
                </div>
                <div className={s.footerWrapper}>
                    <p>
                        «МЕДСЕРВИС» сделает Ваш ДМС лучше и удобнее. Если возникли трудности, обратитесь к нам по
                        телефону: <span>8(800) 770-70-94</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default MainPage;
