import React, { forwardRef } from 'react';
import "./TextBoxInput.css";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";

const TextBoxInput = forwardRef((props, ref) => {
  return (
    <>
      <span className='TitleFormInput'>{props.placeholder}</span>

      <TextBoxComponent
        ref={ref}
        name={props.name}
        placeholder={props.placeholder}
        floatLabelType="Auto"
        type={props.type}
        value={props.value}
        change={props.HandleUpdate}
        data-msg-containerid={`errroFor${props.name}`}
      />

   
    </>
  );
});

export default TextBoxInput;
