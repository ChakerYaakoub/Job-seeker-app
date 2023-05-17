import React from 'react'
import "./Header.css"
import { IDSLogo, LogRegBtn, ChangeLangBtn } from "../../Components/index"





const Header = () => {

  return (
    <div className='myHeader'>

      <div className='IDSLogo'>
        <IDSLogo />
      </div>


      <div className='btnHeader'>
        <div>
          <LogRegBtn />


        </div>
        <div>
          <ChangeLangBtn />
        </div>




      </div>


    </div>
  )
}

export default Header