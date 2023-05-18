import React, { useEffect, useRef, useState } from 'react'
import "./LoginForm.css"
import { HeaderLogReg, TextBoxInput, TextBoxInputPassword, Button, AllAlert } from "../../../Components"
import { useStateContext } from '../../../contexts/ContextProvider';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { update, resetState } from '../../../redux/ducks/loginForm'
import { Link, useNavigate } from 'react-router-dom';
import { optionsLoginEnglish, optionsLoginArabic } from "../../../assets/DummyData"
import { FormValidator } from '@syncfusion/ej2-inputs';
import { loginSubmit } from "./LoginSubmit.js"


let formObject;
const LoginForm = () => {
    const navigate = useNavigate();

    const ref = useRef(null);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation();
    const { handleClickLogReg, handleClickShowLogin, isClickedLogReg, setIsClickedLogReg } = useStateContext();
    const dispatch = useDispatch();
    const email = useSelector((state) => state.loginForm.email);
    // const myStat = useSelector((state) => state.loginForm);
    const password = useSelector((state) => state.loginForm.password);
    const stayLog = useSelector((state) => state.loginForm.stayLog);
    const HandleUpdate = (field) => (event) => {


        dispatch(update(field, event.value));



    };











    const HandleSubmit = (e) => {
        e.preventDefault();

        let result;
        setLoading(true)
        if (formObject.validate()) {

            result = loginSubmit(email, password, stayLog)

            if (result) {
                setIsClickedLogReg(!isClickedLogReg)

                if (!stayLog) {
                    dispatch(resetState());
                }

                // navigate("/Profile");
                window.location.reload();

            } else {
                setError(true)

            }


        }
        setLoading(false)

        setTimeout(() => {
            setError(false);

        }, 5000);


        // In the ApiS, it must be loading , and if  error in server ,But this is enough for now ..


    };

    useEffect(() => {
        ref.current.focusIn();


        const options = t('lang') == "En" ? optionsLoginEnglish : optionsLoginArabic

        formObject = new FormValidator('#LoginForm', options);


    }, []);








    return (
        <div>
            {/* loginForm:loginFormReducer */}

            <HeaderLogReg title={t('LoginTitle')} handleClickLogReg={handleClickLogReg} />


            <div className="control_wrapper" id="control_wrapper">
                <div className="control_wrapper textbox-form">

                    <form id="LoginForm">
                        <div className='LoginFormForm'>

                            {/* //email  */}
                            <div className="form-group  ">



                                <TextBoxInput
                                    ref={ref}
                                    HandleUpdate={HandleUpdate('email')}
                                    value={email}
                                    type={"email"}
                                    placeholder={t('email')}
                                    name={"email"}

                                />

                                <div id={`errroForemail`} />

                            </div>
                            {/* //password  */}
                            <div className="form-group  ">


                                <TextBoxInputPassword
                                    ref={null}

                                    HandleUpdate={HandleUpdate('password')}
                                    value={password}

                                    placeholder={t('password')}
                                    name={"password"}

                                />





                            </div>
                        </div>

                        <div className='SupportLogin'>

                            <div className='StayLog'>

                                <input type="checkbox" name="stayLog" checked={stayLog}
                                    value={stayLog} onChange={() => dispatch(update("stayLog", !stayLog))}
                                />

                                <span>{t('keepMeSigned')}</span>

                            </div>
                            <div className='ForgotPass'>
                                <Link to={"/"}> {t('forgot')}</Link>


                            </div>

                        </div>

                        <div className='SubmitLogRegisterDiv'>

                            <Button text={t('LoginTitle')} onClick={HandleSubmit} myClass={'SubmitLogRegister'} loading={loading} />

                        </div>

                    </form>

                </div>
            </div>

            {error && <>
                <div className='Notmatched'>
                    {t('incorrectPass')}

                </div>

                {/* <AllAlert message={t('incorrectPass')} type="danger"/> */}


            </>}




            <div className='NotHaveOrHaveAccount'>

                {t('NotHaveAccount')} <span onClick={handleClickShowLogin}  >
                    {t('register')}
                </span>


            </div>



        </div>
    )
}

export default LoginForm