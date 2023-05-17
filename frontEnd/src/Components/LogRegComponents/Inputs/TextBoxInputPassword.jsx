import React, { useState } from 'react'
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import "./TextBoxInput.css"

const TextBoxInputPassword = (props) => {

    const [passwordType, setpasswordType] = useState('password')
    const SHowPass = () => {
        if (passwordType == 'password') {
            setpasswordType('text')

        } else {
            setpasswordType('password')

        }

    };


    return (
        <>
            <span className='TitleFormInput'>{props.placeholder} </span>
            <div className='PasswordInput'>



                <TextBoxComponent
                    ref={props.ref}

                    name={props.name}
                    placeholder={props.placeholder}
                    floatLabelType="Auto"
                    type={passwordType}

                    value={props.value}
                    id={props.id}
                    change={props.HandleUpdate}
                    data-msg-containerid={`errroFor${props.name}`}
                // onFocus={() => setisFocusInJobTitle(true)}
                // onBlur={() => setisFocusInJobTitle(false)}


                />

               


                <span onClick={SHowPass} className='SHowPassBTN'>

                    {passwordType === "password" ? (
                        <>
                            <i className="fa-regular fa-eye-slash"></i>
                        </>
                    ) : (
                        <>
                            <i className="fa-regular fa-eye"></i>
                        </>
                    )}


                </span>
            </div>
            <div id={`errroFor${props.name}`} />

        </>
    )
}

export default TextBoxInputPassword