import React, { useState, useEffect } from 'react';
import './HomeSections3.css';
import { HeaderSections, FeaturedJobsDiv ,Button} from '../../Components';
import { useTranslation } from 'react-i18next';

import { featuredJobs } from '../../assets/DummyData';

const HomeSections3 = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [visibleJobs, setVisibleJobs] = useState(isMobile ? 4 : 6);


  const handleShowAll = () => {
    setVisibleJobs(featuredJobs.length);
  };

  const handleShowLess = () => {
    setVisibleJobs(isMobile ? 4 : 6);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
  }, []); 

  const visibleFeaturedJobs = featuredJobs.slice(0, visibleJobs);

  return (
    <div className='HomeSections3'>
      <HeaderSections title={t('featuredJobs')} subTitle={t('featuredText')} />

      <div className='FeaturedJobsDivsParents'>
        {visibleFeaturedJobs.map((job) => (
          <div className='FeaturedJobsDivOne' key={job._id}>
            <FeaturedJobsDiv key={job._id} job={job} />
          </div>
        ))}
      </div>

      <div className='ShowButtonsFeaturedJobs'>
        {visibleJobs < featuredJobs.length ? (
         

            <Button text={t('showAll')} onClick={handleShowAll} myClass={"ShowAllButton"}/>
       
        ) : (
        
        
            <Button text={t('showLess')} onClick={handleShowLess} myClass={"ShowLessButton"}/>
          
        )}
      </div>
    </div>
  );
};

export default HomeSections3;
