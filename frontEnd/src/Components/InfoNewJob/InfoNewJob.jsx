import React from 'react';
import "./InfoNewJob.css";
import DivInfoJob from "./DivInfoJob";
import {requiredFields} from "../../assets/DummyData"

const InfoNewJob = ({ t }) => {
  const recentJob = JSON.parse(localStorage.getItem('recentJob'));
 

  return (
    <div className='InfoNewJob'>
      {Object.entries(recentJob).map(([key, value]) => {
        // Check if the value is not null and either all fields or required fields are being mapped
        // this is a just test for the variable 
        if (value !== null && (requiredFields.includes(key) || !requiredFields.length)) {
          return <DivInfoJob key={key} variable={key} value={value} t={t} />;
        }
        return null;
      })}
    </div>
  );
};

export default InfoNewJob;
