import React from 'react'
import "./CandidateProfile.css"
import { WelcomeUser, SomeInfoProfile, LogoutUser, IconTextButton, AllAlert } from "../../Components"

// all the css in this components is here ./Profile.css page
const CandidateProfile = ({ user, t }) => {
    return (
        <div className='ProfileForAll'>
            <div className='ProfileForAllfirst'>
                {/* {t('Title404')} */}
                <WelcomeUser t={t} userName={user.fullName} />
                <LogoutUser t={t} />
            </div>
            <SomeInfoProfile t={t} email={user.email} />
            <div className='flexButtonsProfile'>
                <IconTextButton iconName='fa-laptop-file' text={t('MyAppliedJobs')} navigateTO="MyAppliedJobs" />
                <IconTextButton iconName='fa-bookmark' text={t('savedJobs')} navigateTO="savedJobs" />
                <IconTextButton iconName='fa-person-dots-from-line' text={t('PersInformation')} navigateTO="PersonalInformation" />
            </div>

            <br /><br />

            <AllAlert
                message={t('message')}
                timeout ={30000}
                type="warning"


            />


        </div>
    )
}

export default CandidateProfile