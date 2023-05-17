import React from 'react'
import "./HeaderSections.css"

const HeaderSections = ({ title,subTitle }) => {
    return (

        <div className='HeaderSections'>
            <p className='title-HeaderSections'> {title}</p>
            <p className='subTitle-HeaderSections'>{subTitle}</p>
          
        </div>
    )
}

export default HeaderSections