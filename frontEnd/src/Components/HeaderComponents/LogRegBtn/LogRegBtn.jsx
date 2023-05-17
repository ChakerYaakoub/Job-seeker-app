import React from 'react'
import "./LogRegBtn.css"
import { useTranslation } from 'react-i18next';
import { useStateContext } from '../../../contexts/ContextProvider';
import { Link, useNavigate } from 'react-router-dom';

// The css style of these components in the Haeder parent component in section file

const LogRegBtn = () => {
    const navigate = useNavigate()
    const { t } = useTranslation();
    const { handleClickLogReg } = useStateContext();
    const user = localStorage.getItem('userInfo') ;

    return (
        <>
            <button className={`LogRegBtn ${user ?"IsLoginProfil" :""}` }
                onClick={!user ? handleClickLogReg : () => navigate('/profile')}


            >

                <span className='HideMobile'>
                    {!user ?
                        t('Register')
                        :
                         <>  <i className="fa-regular fa-user"></i> {t('MyAccount')} </>}
                </span>




                <span className='showMobile'> <i className="fa-regular fa-user"></i>  </span>
            </button >




        </>
    )
}

export default LogRegBtn