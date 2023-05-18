import React, { useState } from 'react'
import "./SellectInput.css"
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';

const SellectInput = ({ classStyle,title }) => {
  const jobTypes = ["Full time", "Part time", "Internship"];
  const [first, setfirst] = useState('Full time')
  return (
    <div className={`${classStyle}`}>
      <p className='TextBoxTitle'>{title}<span className='RedSpanInput'> * </span></p>

      <MultiSelectComponent id="mtselement"
        allowFiltering={true}
        popupHeight="250px"
        max={1}
        mode="Box"
        maximumSelectionLength={2}
        showDropDownIcon={true}

        // allowFiltering={true}
        // filtering={onFiltering}
        //  sortOrder={sortOrder}
        //   query={query}
        // value={first}

        // multiSelect={false}
        dataSource={jobTypes}
        //     fields={fields}
        placeholder="Select a customer" />


    </div>
  )
}

export default SellectInput