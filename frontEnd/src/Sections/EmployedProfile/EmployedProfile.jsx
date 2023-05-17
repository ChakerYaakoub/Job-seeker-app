import React from 'react'
import "./EmployedProfile.css"
import { WelcomeUser, SomeInfoProfile, LogoutUser, IconTextButton, AllAlert } from "../../Components"


const EmployedProfile = ({ user, t }) => {
  return (
    <div className='ProfileForAll'>
      <div className='ProfileForAllfirst'>
        {/* {t('Title404')} */}
        <WelcomeUser t={t} userName={user.fullName} />
        <LogoutUser t={t} />
      </div>
      <SomeInfoProfile t={t} email={user.email} />
 

  
      <div className='flexButtonsProfile'>

        <IconTextButton Myclass={'FoxInTHIS'} iconName='fa-square-plus' text={t('AddJobs')} navigateTO="AddJobs" />
        <IconTextButton iconName='fa-newspaper' text={t('MyJobs')} navigateTO="MyJobs" />
        <IconTextButton iconName='fa-users' text={t('MyCandidate')} navigateTO="MyCandidate" />
        <IconTextButton iconName='fa-circle-info' text={t('EmployerInformation')} navigateTO="EmployerInformation" />

      </div>

      <br /><br />

      <AllAlert
        message={t('messageEmployer')}
        timeout={30000}
        type="warning"


      />


    </div>
  )
}

export default EmployedProfile