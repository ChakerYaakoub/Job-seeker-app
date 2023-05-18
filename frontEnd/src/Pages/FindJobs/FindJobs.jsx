import React from 'react'
import "./FindJobs.css"
import { useSelector } from 'react-redux'

import { AllAlert, LoadingSpinner } from '../../Components'
import { useTranslation, Trans } from 'react-i18next';



const FindJobs = () => {
  const nbOfResult = 2087
  const { t } = useTranslation();

  const myStat = useSelector((state) => state.searchJob);

  return (
    <div className='FindJobs'>

      <h3>
        <Trans i18nKey="searchResultPage">
          Showing <span className='SerachNbNb'>{{ nbOfResult }}</span> results for :
        </Trans>
      </h3>



      <h2>   <span>  {myStat.jobTitle} </span> <span>   {myStat.searchCity} </span>   </h2>


      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam architecto perferendis labore ipsa similique quis eaque molestiae pariatur. Minus fugiat, animi tempore eveniet cupiditate aliquam molestias sapiente modi consectetur.</h5>


      <div className='MyAllertSearc'>


        <AllAlert message={t('NoteSearchPage')} timeout={100000} type={'warning'} />


        <AllAlert message={'success Alert'} timeout={100000} type={'success'} />
        <AllAlert message={'simple Alert'} timeout={100000} type={'simple'} />
        <AllAlert message={'danger Alert'} timeout={100000} type={'danger'} />

      </div>

      <div className='LoadingSpinnerSearch'>


        <LoadingSpinner />

      </div>






    </div>
  )
}

export default FindJobs