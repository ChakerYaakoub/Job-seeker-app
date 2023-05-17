import React from 'react';
import "./SearchJob.css";
import SearchForm from './SearchForm';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {update } from '../../../redux/ducks/searchJob'
import {popularSearches} from "../../../assets/DummyData"

const SearchJob = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  

  
  const handlePopularSearch = (searchTerm) => {
    dispatch(update('jobTitle', searchTerm));
  };
  
  return (
    <>
      <div className='SearchJob'>
        <p>{t('FindJobs')}</p>
        <div className='SearchFormDiv'>

          <SearchForm />

        </div>
        <p>
          <span className='BoldSpan'>{t('Seraches')}</span> 
          {popularSearches.map((searchTerm, index) => (
            <span 
              key={index}
              className='SearchTermjobTitle'
              onClick={() => handlePopularSearch(searchTerm)}
            >
              {searchTerm}
            </span>
          ))}
        </p>
      </div>
    </>
  );
};

export default SearchJob;
