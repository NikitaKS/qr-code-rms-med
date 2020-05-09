import React from 'react';
import s from './StepTabs.module.css';

const StepTabs = (props) => {
    let divs = [];
    for (let i = 1; i < 5; i++) {
        divs.push(<div key={i} className={(i <= props.step) ? `${s.item} ${s.active}` : `${s.item}`}>
            <span style={{backgroundColor: i + 1 <= props.step && '#0f8dbd'}}></span>
        </div>)
    }
    return (
        <>
            <div className={s.formSteps}>
                <div className={s.controls}>
                    {divs}
                </div>
            </div>
        </>
    );
}

export default StepTabs;
