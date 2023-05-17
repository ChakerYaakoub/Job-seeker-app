import React, { useEffect, useState } from 'react';
import "./FeaturedJobsDiv.css";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';




const FeaturedJobsDiv = ({ job }) => {


  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleJobsCat = (id) => () => {
    navigate(`/Job/${id}`);
  };

  const applyToJob = (id) => () => {
    navigate(`/applyToJob/${id}`);
  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userInfo')));




  return (
    <div className={`FeaturedJobsDiv`}>
      <span className='AddFavFixBtn' id='AddFavFixBtn'>
        <i className="fa-regular fa-bookmark"></i>
      </span>

      <div className='FeaturedJobsIMG'>
        <img src={job.img} alt="company" onClick={handleJobsCat(job._id)} />
      </div>

      <div className='FeaturedJobsText'>
        <div className='FeaturedJobstitleJob'>
          <div className='MyTitleJob' onClick={handleJobsCat(job._id)}>
            {t(job.title)}
            {job.isFeatured === 'yes' && <span className='IsFeatured HideFeatured'>{t('Featured')}</span>}
            {job.isFilled === 'yes' && <span className='Filled HideFeatured'>{t('Filled')}</span>}
          </div>
          <div className='chowFeatured'>
            {job.isFeatured === 'yes' && <span className=' IsFeatured '>{t('Featured')}</span>}
            {job.isFilled === 'yes' && <span className=' Filled '>{t('Filled')}</span>}
          </div>
        </div>

        <div className='InfoFeaturedJobs'>
          <div>
            <i className="fa-solid fa-briefcase"></i>
            <span> {t(job.category)}  {job.category2 && <> ,  {t(job.category2)} </>} </span>
          </div>
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <span> {t(job.location)} </span>
          </div>
          <div>
            <i className="fa-solid fa-money-bill-wave"></i>
            <span>${job.minSalary} - {job.maxSalary} / {t(job.salaryType)}</span>
          </div>
        </div>

        <div className='isUrgentOrtype'>
          <div className='typeJobTime'>
            {t(job.type)}
          </div>
          {job.isUrgent === 'yes' && <div className='isUrgentDiv'>{t('Urgent')}</div>}
        </div>

        {/* require to be login to access this btn  */}


        {user && <>
          <Button text={t('Apply')} myClass={"ApplyToJobBTn"} onClick={applyToJob(job._id)} />


        </>}





      </div>




    </div>
  );
};

export default FeaturedJobsDiv;
