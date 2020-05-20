import React from "react";
import s from './modalError.module.css';

const ModalError = (props) => {
    return (
        <div className={s.modalWrapper}>
            <div className={s.modalError}>
                <span>Что то пошло не так. Попробуйте позже.</span>
                <div className={s.closeBtn} onClick={props.closeModal}></div>
            </div>
        </div>
    )
}
export default ModalError;