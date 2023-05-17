import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import "./JobsCategoryDiv.css"



const JobsCategoryDiv = ({ title, img, openPosition }) => {
    const { t } = useTranslation();

    const navigate = useNavigate()

    const handleJobsCat =(title)=>()=>{
        navigate(`/OpenPosition/${title}`)
        
    }
  
    return (
      <div className={`JobsCategoryDiv ${title.toLowerCase()}Div`} onClick={handleJobsCat(title)}>
        <div className='JobsCategoryDivIMG'>
          <i className={`fa-solid ${img}`}></i>
        </div>
        <div className='JobsCategoryDivText'>
          <span className='titleJob'>{t(title)}</span> <br />
          <span className='OpenPosition'>({t('openPositions')} {openPosition})</span>
     
        </div>
      </div>
    );
  };
export default JobsCategoryDiv


// {jobCat.map((item, index) => (
//     <div key={index}>
//       <h3>{t(item.title)}</h3>
//       <img src={item.img} alt={item.title} />
//       <p>Open Positions: {item.openPosition}</p>
//     </div>
//   ))}