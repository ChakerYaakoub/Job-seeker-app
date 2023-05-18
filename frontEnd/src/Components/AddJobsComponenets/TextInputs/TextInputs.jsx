import React, { forwardRef } from 'react';
import "./TextInputs.css";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";

const TextInputs = forwardRef(({ multiline, classStyle, title, placeholder, inputType, name, HandleUpdateJob, value }, ref) => {
  return (
    <div className={`TextInputsCss ${classStyle}`}>
      <p className='TextBoxTitle'> {title} <span className='RedSpanInput'> * </span></p>
      <TextBoxComponent
        ref={ref}
        name={name}
        change={HandleUpdateJob}
        data-msg-containerid={`errroFor${name}`}
        value={value}
        multiline={multiline}
        placeholder={placeholder}
        type={inputType}
      />

      <div id={`errroFor${name}`} />
    </div>
  );
});

export default TextInputs;
