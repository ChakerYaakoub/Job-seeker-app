import React from 'react'
import "./PopupLogReg.css"
import { useStateContext } from '../../contexts/ContextProvider';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

const CombinedPopupLogReg = () => {

    const { handleClickLogReg, showLogin } = useStateContext();
    return (
        <div>
            <div className='PopupLogReg' >
                <div className="PopupLogRegblocker" onClick={handleClickLogReg}></div>
                <div className='PopupLogReg-inner'>
                    <div className='PopupLogin'>

                        {showLogin ? (
                            <LoginForm />
                        ) : (
                            <>
                                <RegisterForm/>
                            </>
                        )}




                    </div>




                </div>

            </div>

        </div>
    )
}

export default CombinedPopupLogReg