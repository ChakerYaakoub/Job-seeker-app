import React, { useState } from 'react';
import { HeaderSections } from "../../Components"
import { useTranslation } from 'react-i18next';
import "./HomeSections2.css"

import { currentYear, jobsAddedTody, jobCatImage, jobCat } from "../../assets/DummyData"
import { JobsCategoryDiv } from "../../Components"




///jobsCategory 
const HomeSections2 = () => {
  const { t } = useTranslation();


  return (
    <div className="HomeSections2">
      <HeaderSections
        title={t('jobsCategoryTitle')}
        subTitle={`${currentYear} ${t('jobsCategorySubTitle1')} ${jobsAddedTody} ${t('jobsCategorySubTitle2')}`}
      />


      {/* i have 2 array  , 1 array for the image icone(jobCatImage)
       .. 1 array like a data from the back end (jobCat) */}
      <div className='HomeSections2Divs'>

        {jobCat.map((item, index) => {
          const { title, openPosition } = item;
          const img = jobCatImage.find((imageItem) => imageItem.title === title)?.img;
          return (
            <div className='HomeSections2Divs1div' key={index}>
              <JobsCategoryDiv key={index} title={title} img={img} openPosition={openPosition} />
            </div>


          );
        })}
      </div>


     



    </div>
  );
};

export default HomeSections2;
