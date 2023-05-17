import React from 'react'
import { useNavigate } from 'react-router-dom';

const IconTextButton = ({ iconName, text ,navigateTO,Myclass=''}) => {

    const navigate = useNavigate()
    return (
      <div className={`oneflexButtonProfile  `} onClick={()=>navigate(`/${navigateTO}`)}>
        <div className={`IconProfile`}>
          <i className={`fa-solid ${iconName} ${Myclass}`}></i>
        </div>
        <div className={`IconText ${Myclass}`}>
          {text}
        </div>
      </div>
    );
  };

export default IconTextButton