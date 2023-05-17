import React, { useState, useEffect,useReducer } from 'react';
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
// import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import {update } from '../../../redux/ducks/searchJob'
import {cityCombiner,customFiltering} from "../../../assets/DummyData"
import { useNavigate } from 'react-router-dom';


import "./SearchJob.css";



const SearchForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const jobTitle = useSelector((state) => state.searchJob.jobTitle);
  const searchCity = useSelector((state) => state.searchJob.searchCity);
    
  const HandleUpdate = (field) => (event) => {
    dispatch(update(field, event.value));
    
  };



  const HandleSubmit =  (e) => {
    e.preventDefault();

    navigate(`/FindJobs`);
   
    
  };
 

  const { t } = useTranslation();

  const [isFocusInJobTitle, setisFocusInJobTitle] = useState(false)
  const [isFocusInSearchCitylabel, setisFocusInSearchCitylabel] = useState(false)
  const [showJobTitleLabel, setshowJobTitleLabel] = useState(true)
  const [showSearchCityLabel, setshowSearchCityLabel] = useState(true)


  useEffect(() => {
    if (!jobTitle && isFocusInJobTitle == false) {
      setshowJobTitleLabel(true)

    } else {
      setshowJobTitleLabel(false)

    }

    if (!searchCity   ) {
      setshowSearchCityLabel(true)

    } else {
      setshowSearchCityLabel(false)

    }


  }, [isFocusInSearchCitylabel, isFocusInJobTitle, jobTitle, searchCity, showJobTitleLabel])


  return (


    <div className="control_wrapper" id="control_wrapper">
      <div className="control_wrapper textbox-form">

        <form id="searchJobForm">
          <div className='SearchBoxForm'>

            <div className="form-group jobTitleDiv ">

              <div>

                <TextBoxComponent

                  name="jobTitle"
                  placeholder={t('Keywords')}
                  floatLabelType="Auto"
                
                  value={jobTitle}
                  change={HandleUpdate('jobTitle')}
                  onFocus={() => setisFocusInJobTitle(true)}
                  onBlur={() => setisFocusInJobTitle(false)}


                />
                {showJobTitleLabel && <>
                  <div className='labelIMG '>
                    <i className="fa-solid fa-magnifying-glass  "></i>
                  </div>
                </>}


              </div>




            </div>

            <div className="form-group searchCityDiv">
              <DropDownListComponent
                name="searchCity"
                value={searchCity}
                change={HandleUpdate('searchCity')}
                ignoreAccent={true}
                dataSource={cityCombiner()}
                fields={{ text: 'text', value: 'value' }}
                allowFiltering={true}
                // allowCustom={true}
           
        
                placeholder={t('PostCode')}
                floatLabelType="Auto"
                filterBarPlaceholder="e.g: Los Angeles | 90001"
                filterType="StartsWith"
                filtering={customFiltering}
                onFocus={() => setisFocusInSearchCitylabel(true)}
                onBlur={() => setisFocusInSearchCitylabel(false)}

              />

              {showSearchCityLabel && <>
                <div className='labelIMG '>
                <i className="fa-solid fa-location-dot"></i>
                </div>
              </>}
           

            </div>
            <div className='BTNsearchBtn'>

              <button className='searchButtn'onClick={HandleSubmit}>  {t('BtnFindJobs')}</button>

            </div>
            {/* e.preventDefault(); */}
          </div>

        </form>

      </div>
    </div>




  );
};

export default SearchForm;
