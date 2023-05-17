import React from 'react'
import "./ImageBtnDiv.css"
import { slider1, work,agency } from "../../../assets/DummyData";

const ImageBtnDiv = () => {
    const handleLinks = (link) => {
        console.log(`Link To ${link} `)
      
      };
    return (
        <div className='ImageBtnDiv'>
            <div className='imgZindex-1'>
                <img src={slider1} alt="Person" />
            </div>


            <button className='BTNWork'>
                <img src={work} alt="work "  onClick={()=>handleLinks("work")} />

            </button>

            <button className='BTNagency' onClick={()=>handleLinks("agency")}>
                <img src={agency} alt="agency " />

            </button>








        </div>
    )
}

export default ImageBtnDiv