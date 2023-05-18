import React, { useState } from 'react'
import "./SellectInput.css"
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { handleFilteringAddWork } from "../../../assets/DummyData"

const SellectInput = ({ classStyle, title, placeholder, data, id, maxValues ,ref,name,HandleUpdateJob,value}) => {

  const handleFiltering = (e) => {
    handleFilteringAddWork(e, data);
  };
  return (
    <div className={`${classStyle}`}>
      <p className='TextBoxTitle'>{title}<span className='RedSpanInput'> * </span></p>

      <MultiSelectComponent

        ref={ref}
        name={name}

  
    
        change={HandleUpdateJob}
        data-msg-containerid={`errroFor${name}`}

        value={value}


        allowFiltering={true}
        popupHeight="250px"
        max={maxValues}
        mode="Box"
        maximumSelectionLength={2}
        showDropDownIcon={true}
        id={id}
        fields={{ text: 'text', value: 'value' }}
        // filterType='StartsWith'
        filtering={handleFiltering}
    

        // multiSelect={false}
        dataSource={data}
        placeholder={placeholder} />

      <div id={`errroFor${name}`} />


    </div>
  )
}

export default SellectInput