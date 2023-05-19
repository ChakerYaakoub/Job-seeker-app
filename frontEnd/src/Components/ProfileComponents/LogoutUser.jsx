import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogoutUser = ({t}) => {
    const navigate = useNavigate();
    return (
      <div className='LogoutUser'>
        <button onClick={() => { localStorage.removeItem('userInfo'); navigate('/'); }}><i className="fa-solid fa-power-off"></i> {t('Logout')}</button>
      </div>
    );
}

export default LogoutUser