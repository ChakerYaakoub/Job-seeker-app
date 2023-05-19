import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogoutUser = ({ t }) => {
  const navigate = useNavigate();
  return (
    <div className='LogoutUser'>
      <button onClick={() => { localStorage.removeItem('userInfo'); navigate('/Job-seeker-app'); }}>
        <i className="fa-solid fa-power-off"></i>  <span className='logText'> {t('Logout')} </span> 
      </button>
    </div>
  );
}

export default LogoutUser