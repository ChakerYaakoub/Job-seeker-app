import React from 'react';

const DivInfoJob = ({ variable, value , t }) => {
  return (
    <>
      <div className='DivInfoJob'> 
        
        <span className='VariableDescJob'>{t(variable)} : </span> 
    

        {/* array for the map  of the type and Type salary ( is an array )  */}
        {Array.isArray(value)
          ? value.map((item, index) => (
              <span key={index}>
                { t(item)}
                {index !== value.length - 1 && ', '}
              </span>
            ))
          : t(value)}
      </div>
    </>
  );
};

export default DivInfoJob;
