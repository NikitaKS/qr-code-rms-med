import React from 'react';
import {Route} from "react-router-dom";
import MainPageComponent from "../mainPage/MainPageContainer";
import RegisterPageComponent from "../mainPage/registerPage/RegisterPageContainer";
import PreLoader from "../preLoader/preLoader";

const RoutesComponent = () => {
    return (
        <>
            <Route path={['/registration/token=:token', '/registration/']} render={() => <MainPageComponent/>}/>
        </>
    );
}

export default RoutesComponent;
