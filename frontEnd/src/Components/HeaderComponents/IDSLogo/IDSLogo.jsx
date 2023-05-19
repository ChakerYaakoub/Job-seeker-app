import React from 'react'
import "./IDSLogo.css"
import { Link } from "react-router-dom";

const IDSLogo = () => {
    return (
        <>
            <div>  <Link to={'/Job-seeker-app'}> <span className='cmpName'>IDS</span>  JOB-SEEKER </Link>  </div>
        </>



    )
}

export default IDSLogo