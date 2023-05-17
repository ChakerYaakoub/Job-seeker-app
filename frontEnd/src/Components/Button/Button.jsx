import React from 'react'
import "./Button.css"

const Button = ({ text, onClick, disabled = false, myClass = '',loading=false,style }) => {
    return ( 
        <>
            <button
                className={`ReusableButton ${myClass} `}
                disabled={disabled}
                onClick={onClick}
                style={style}
            >
                {!loading && text}
                {loading && <> loading ..</>}


            </button>

        </>
    )
}

export default Button