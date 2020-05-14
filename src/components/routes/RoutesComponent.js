import React from 'react';
import {Route} from "react-router-dom";
import MainPageComponent from "../mainPage/MainPageContainer";
import RegisterPageComponent from "../mainPage/registerPage/RegisterPageContainer";

const RoutesComponent = () => {
    return (
        <>
            <Route path={['/registration/token=:token', '/registration/']} render={() => <MainPageComponent/>}/>
            <Route path={'/mobileTest/token=:token'} render={() => <RegisterPageComponent/>}/>
        </>
    );
}

export default RoutesComponent;
