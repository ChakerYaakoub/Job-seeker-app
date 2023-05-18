import React, { useState } from 'react'
import "./TextInputs.css"
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
const TextInputs = ({multiline,classStyle,title}) => {
  const [first, setfirst] = useState('')
  return (
    <div className={`TextInputsCss ${classStyle}`} >
      <p className='TextBoxTitle'> {title} <span className='RedSpanInput'> * </span></p>
      <TextBoxComponent
      multiline={multiline}
          // placeholder={"test"}
        // ref={ref}
        // name={props.name}
        placeholder={'Ex sdjsfsdfmdsf'}
        // floatLabelType={false}
        // type={"number"}
        value={first}
        // change={props.HandleUpdate}
        // data-msg-containerid={`errroFor${props.name}` }
      />
    </div>
  )
}

export default TextInputs