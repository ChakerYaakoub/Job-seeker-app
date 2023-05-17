import React, { useState } from 'react'
import "./ChangeLangBtn.css"
import { useTranslation } from 'react-i18next';

import LanguageDropdown from "./LanguageDropdown"
import { languages } from "../../../assets/DummyData"

// The css style of the buttun class btnLanguag components in the Haeder parent component

const ChangeLangBtn = () => {
  const { t, i18n } = useTranslation();

  const storedLanguage = localStorage.getItem('language');


  const handleChangeLanguage = (lng) => {
    if (lng != storedLanguage) {
      i18n.changeLanguage(lng);
      setIsOpen(false);
      setSelectedLang(lng);
      console.log("lang changed ")
    } else {
      console.log("the same lang ")
    }

  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en'); // Default language is 'en'

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>

      <button className='btnLanguag' onClick={toggleDropdown}>

        <div >
          <i className="fa-solid fa-globe"></i>
          <span className='Lang HideMobile'> {t('language')} </span>
        </div>

        <div className='HideMobile'>
          <i className="fa-solid fa-angle-down"></i>
        </div>

      </button>
      {isOpen && ( 
        <LanguageDropdown
          languages={languages}
          selectedLang={selectedLang}
          onChangeLanguage={handleChangeLanguage}
        />
      )}

    </>
  )
}

export default ChangeLangBtn