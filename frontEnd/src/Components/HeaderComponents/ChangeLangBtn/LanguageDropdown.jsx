import React from 'react';

// css in the parent component 
const LanguageDropdown = ({ languages, selectedLang, onChangeLanguage }) => {
  return (
    <div className="mydropdown-content">
      {Object.keys(languages).map((lang) => (
        <span
          key={lang}
          className={selectedLang === lang ? 'selectedLang' : ''}
          onClick={() => onChangeLanguage(lang)}
        >
          {languages[lang]}
        </span>
      ))}
    </div>
  );
};

export default LanguageDropdown;
