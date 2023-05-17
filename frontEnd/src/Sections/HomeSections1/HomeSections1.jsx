import React from 'react'
import "./HomeSections1.css"
import { CountJob, SearchJob, ImageBtnDiv } from "../../Components/index"



//welcome / search Section 


const HomeSections1 = () => {
  return (
    <div className='HomeSections1'>
      <div className='SearchBoxDiv'>
        <CountJob />

        <SearchJob />


      </div>


      <ImageBtnDiv />





    </div>
  )
}

export default HomeSections1