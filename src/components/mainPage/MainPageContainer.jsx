import React from 'react';
import s from './MainPage.module.css';
import {useParams} from 'react-router-dom';
import QRCodePage from "./QRCodePage/QRCodePage";
import RegisterPageComponent from "./registerPage/RegisterPageContainer";
import {isMobile, isTablet} from 'react-device-detect';

const MainPageComponent = () => {
    const {token} = useParams();

    return (
        <div className={s.mainPageWrapper}>
            {
                !isMobile && !isTablet
                &&
                <QRCodePage token={token}/>

            }
            {
                (isMobile || isTablet)
                &&
                <RegisterPageComponent/>
            }

        </div>
    )
}
export default MainPageComponent;
