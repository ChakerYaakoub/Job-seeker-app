import React, { useEffect, useRef, useState } from 'react'
import "./RegisterForm.css"
import { HeaderLogReg, TextBoxInput, TextBoxInputPassword, Button, AllAlert } from "../../../Components"
import { useStateContext } from '../../../contexts/ContextProvider';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { updateReg } from '../../../redux/ducks/registerForm'
import { optionsRegisterEnglish, optionsRegisterArabic } from "../../../assets/DummyData"
import { FormValidator } from '@syncfusion/ej2-inputs';

let formObject;
const RegisterForm = () => {
    const ref = useRef(null);
    const { t } = useTranslation();
    const { handleClickLogReg, handleClickShowLogin } = useStateContext();
    const dispatch = useDispatch();

    const emailReg = useSelector((stateReg) => stateReg.registerForm.emailReg);
    const passwordReg = useSelector((stateReg) => stateReg.registerForm.passwordReg);
    const isEmployer = useSelector((stateReg) => stateReg.registerForm.isEmployer);

    const myStatReg = useSelector((stateReg) => stateReg.registerForm);


    const [retryPassword, setretryPassword] = useState('')





    const HandleUpdateReg = (field) => (event) => {
        if (field != "retryPassword") {
            dispatch(updateReg(field, event.value));

        } else {
            setretryPassword(event.value)

        }



    };





    const HandleSubmitReg = (e) => {
        e.preventDefault();


        if (formObject.validate()) {

            console.log(myStatReg)
            console.log("Next comes APIS work")

        } else {
            console.log('validation error')

        }

    };

    const HandleisEmployer = (isEmployerTrueFalse) => {
        dispatch(updateReg("isEmployer", isEmployerTrueFalse));

    };



    useEffect(() => {
        ref.current.focusIn();


        const options = t('lang') == "En" ? optionsRegisterEnglish : optionsRegisterArabic



        formObject = new FormValidator('#CreateAccount', options);


    }, []);





    return (
        <div>
            {/* register from */}

            <HeaderLogReg title={t('CreateAccount')} handleClickLogReg={handleClickLogReg} />

            {/* users : condidate or Employerts ??  */}

            <div className='UserType'>
                <div>
                    <Button
                        text={<>
                            <i className="fa-regular fa-user"></i>
                            {t('Candidate')}
                        </>}
                        onClick={() => HandleisEmployer(false)}
                        myClass={`UserTypeBtn ${isEmployer ? '' : 'active'} `} />


                </div>
                <div>
                    <Button

                        text={<>
                            <i className="fa-solid fa-briefcase"></i>
                            {t('Employer')}
                        </>}
                        onClick={() => HandleisEmployer(true)}
                        myClass={`UserTypeBtn ${isEmployer ? 'active' : ''} `} />


                </div>
            </div>


            <div className="control_wrapper" id="control_wrapper">
                <div className="control_wrapper textbox-form">

                    <form id="CreateAccount">
                        <div className='CreateAccount'>

                            {/* //email  */}
                            <div className="form-group  ">



                                <TextBoxInput
                                    ref={ref}
                                    HandleUpdate={HandleUpdateReg('emailReg')}
                                    value={emailReg}
                                    type={"email"}
                                    placeholder={t('email')}
                                    name={"emailReg"}


                                />

                                <div id={`errroForemailReg`} />

                            </div>
                            {/* //password  */}
                            <div className="form-group  ">


                                <TextBoxInputPassword
                                    ref={null}

                                    HandleUpdate={HandleUpdateReg('passwordReg')}
                                    value={passwordReg}

                                    placeholder={t('password')}
                                    name={"passwordReg"}
                                    id={"passwordReg"}

                                />






                            </div>

                            {/* //password  */}
                            <div className="form-group retryPasswordDiv  ">


                                <TextBoxInputPassword
                                    ref={null}

                                    HandleUpdate={HandleUpdateReg('retryPassword')}
                                    value={retryPassword}

                                    placeholder={t('ConfrimePass')}
                                    name={"retryPassword"}

                                />




                            </div>
                        </div>


                        <div className='SubmitLogRegisterDiv retryPasswordDiv'>

                            <Button text={t('RegisterNow')}
                                onClick={HandleSubmitReg}
                                myClass={`SubmitLogRegister   `}
                                // style={{ background: `${activeSubmit}` }}


                            />

                        </div>

                    </form>

                </div>
            </div>


            <div className='NotHaveOrHaveAccount HaveAccountDiv'>

                {t('HaveAccount')} <span onClick={handleClickShowLogin}  >    {t('LoginTitle')}</span>


            </div>



        </div>
    )
}

export default RegisterForm