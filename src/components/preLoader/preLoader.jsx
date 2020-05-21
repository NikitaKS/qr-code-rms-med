import React from "react";
import loader from '../../assets/loader.svg';
import s from './preLoader.module.css';
const PreLoader = (props) => {
    return (
        <div className={s.overlay}>
            <div className={s.loader}>
                <img src={loader} alt="loading..."/>
            </div>
        </div>
    )
}
export default PreLoader;