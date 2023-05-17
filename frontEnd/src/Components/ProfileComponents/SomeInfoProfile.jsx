import React from 'react'

const SomeInfoProfile = ({t,email}) => {
    return (
        <div className='SomeInfoProfile'>
            <p className='Welcome2Profile'>{t('welcome')}</p>
            <p className='SOmeinfo'>{t('SOmeinfo')} <span> <span className='IDSSSS'>IDS  </span> JOB-SEEKER </span> {t('SomeInfo3')} </p>
            <p className='TheMail'> <span>{t('profileEmailEmployer')} </span> : {email}</p>
        </div>
    )
}

export default SomeInfoProfile