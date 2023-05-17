import React from 'react'
import "./DounloadBtnApp.css"
import { Link } from "react-router-dom"

const DounloadBtnApp = ({ text1 = "test", text2 = "test", icon }) => {
    return (

        <button className='DounloadBtnAppcom'>


            
                <div className='IImageGetApp'>

                    <i class={`fa-brands ${icon}`}></i>

                </div>
                <div className='TextGetApp123'>
                    <div className='GetApp11'>{text1}</div>
                    <div className='AppGetApp11'>{text2}</div>

                </div>

     




        </button>

    )
}

export default DounloadBtnApp