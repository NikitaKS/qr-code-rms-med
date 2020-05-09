import React from 'react';
import {Route} from "react-router-dom";
import MainPageComponent from "../mainPage/MainPageContainer";
import RegisterPageComponent from "../mainPage/registerPage/RegisterPageContainer";
import MobileBanner from "../mobileBanner/mobileBanner";

const RoutesComponent = () => {
    return (
        <>
            <Route path={['/registration/token=:token', '/registration/']} render={() => <MainPageComponent/>}/>
            <Route path={'/mobileTest/token=:token/step/:step'} render={() => <RegisterPageComponent/>}/>
            <Route path={'/mobileBanner'} render={() => <MobileBanner/>}/>
        </>
    );
}

export default RoutesComponent;
