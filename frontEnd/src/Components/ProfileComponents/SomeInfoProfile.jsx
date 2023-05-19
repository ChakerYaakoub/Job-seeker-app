import React from 'react'

const SomeInfoProfile = ({t,email,user}) => {
    const isEmployer = user.isEmployer
    const userType = isEmployer ? (t('lang') === "En" ? "Employer" : "صاحب العمل") : (t('lang') === "En" ? "Candidate" : "المرشح");


    // للمرشح

    return (
        <div className='SomeInfoProfile'>
            <p className='Welcome2Profile'>{t('welcome')}</p>
            <p className='SOmeinfo'>{t('SOmeinfo')} 
            <span> <span className='IDSSSS'>IDS  </span> JOB-SEEKER </span>{userType} {t('SomeInfo3')} </p>
            <p className='TheMail'> <span>{t('profileEmailEmployer')} {userType} : </span>  {email}</p>
        </div>
    )
}

export default SomeInfoProfile