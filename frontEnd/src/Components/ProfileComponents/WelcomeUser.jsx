import React from 'react'

const WelcomeUser = ({t,userName}) => {
  return (
    <div className='WelcomUser'> 
      <h1>{t('Hello')}  {userName}!</h1>
    </div>
  )
}

export default WelcomeUser