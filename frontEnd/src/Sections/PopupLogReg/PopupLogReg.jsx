import React from 'react'
import "./PopupLogReg.css"

import { useStateContext } from '../../contexts/ContextProvider';
import CombinedPopupLogReg from './CombinedPopupLogReg';


const PopupLogReg = () => {

    const { isClickedLogReg,isLogin } = useStateContext();
    return (

        <>
            {(isClickedLogReg && !isLogin )&&  <CombinedPopupLogReg />}

        </>
    )
}

export default PopupLogReg