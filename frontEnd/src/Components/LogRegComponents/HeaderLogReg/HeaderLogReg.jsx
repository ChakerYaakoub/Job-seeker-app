import React from 'react'
import "./HeaderLogReg.css"

const HeaderLogReg = ({ title, handleClickLogReg }) => {
  return (

    <div className='HeaderLogReg'>

      <div className='TitleHeaderLogReg'>

        <span> {title}</span>

      </div>
      <div className='PopupLogRegclose-btn '>
        <span onClick={handleClickLogReg}> <i className="fa-solid fa-xmark"></i></span>
      </div>
    </div>
  )
}

export default HeaderLogReg