import React from 'react'
import "./Footer.css"
import { currentYear } from "../../assets/DummyData"
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"

const Footer = () => {
  const { t } = useTranslation();

  return (

    <footer className='myFooter'>
      <div className='myFooterDiv' >
        <div className='rightReserved'>

          &copy; {currentYear} IDS . {t('rightReserved')}

        </div>
        <div className='socialMediaIds'>

          <Link to="/Job-seeker-app">       <i className="fa-brands fa-facebook-f"></i> </Link>
          <Link to="/Job-seeker-app">       <i className="fa-brands fa-twitter"></i> </Link>

          <Link to="/Job-seeker-app">         <i className="fa-brands fa-instagram"></i> </Link>

          <Link to="/Job-seeker-app">     <i className="fa-brands fa-linkedin-in"></i> </Link>








        </div>

      </div>
    </footer>

  )
}

export default Footer