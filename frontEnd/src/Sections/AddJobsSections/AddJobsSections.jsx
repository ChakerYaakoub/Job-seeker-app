import React, { useEffect, useRef, useState } from 'react'
import "./AddJobsSections.css"
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { update, resetState } from '../../redux/ducks/addJob'
import { FormValidator } from '@syncfusion/ej2-inputs';
import { saveRecentJob } from "./SaveJobLocaly.js"
import { useStateContext } from '../../contexts/ContextProvider';



import { Button, SellectInput, TextInputs ,AllAlert} from "../../Components"
import {
    jobCategories2,
    ArabicjobCategories2,
    jobTypesAddJobs,
    ArabicjobTypesAddJobs,
    optionsAddJobsArabic,
    optionsAddJobsEnglish,
    requiredFields
} from "../../assets/DummyData"


let formObject;
const AddJobsSections = () => {
  const { SetshowAddNewJob } = useStateContext();


    const ref = useRef(null);
    const myStat = useSelector((state) => state.addJob);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const [shouldValidate, setShouldValidate] = useState(false);
    const [disableBTN, setDisableBTN] = useState(true)

    const HandleUpdateJob = (field) => (event) => {

        dispatch(update(field, event.value));

    };





    const HandleSubmit = (e) => {
        e.preventDefault();

        const result = saveRecentJob(myStat) // save to local storange 
        setLoading(true)

        if (result) {



            dispatch(resetState());
            console.log(JSON.parse(localStorage.getItem('recentJob')))
            setShouldValidate(false)
            setDisableBTN(true)

            // we have to pup up the data 
            SetshowAddNewJob(true)




        } else {
            setError(true)

        }
        setLoading(false)
        // In the ApiS, it must be loading , and if  error in server ,But this is enough for now ..



    };

    // use effect for validation
    useEffect(() => {
        ref.current.focusIn();


        const options = t('lang') == "En" ? optionsAddJobsEnglish : optionsAddJobsArabic

        formObject = new FormValidator('#AddANewJob', options);



    }, []);

    // use effect for the change disable enable 
    useEffect(() => {

        const allRequiredFilled = requiredFields.every(field => myStat[field]);

        if (allRequiredFilled) {
            setShouldValidate(true);
        }
        if (shouldValidate) {
            if (formObject.validate()) {
                setDisableBTN(false);
            } else {
                setDisableBTN(true);
            }
        }
    }, [myStat, shouldValidate]);




    return (
        <div className='AddJobsSections'>
            <div className='AddJobsTtitlePage'>
                {t('AddANewJob')}

            </div>


            <div className="control_wrapper" id="control_wrapper">
                <div className="control_wrapper textbox-form">

                    <form id="AddANewJob">

                        <div className='AddJobsForm'>



                            <div className='AddJobsFormDiv1'>

                                <div>
                                    <TextInputs
                                        ref={ref}
                                        multiline={false}
                                        classStyle={"yourWidth100"}
                                        title={t('JobTitle')}
                                        placeholder={t('placeholderJobTitle')}
                                        inputType={"text"}
                                        name={"jobTitle"}

                                        HandleUpdateJob={HandleUpdateJob('jobTitle')}
                                        value={myStat.jobTitle}



                                    />
                                </div>
                                <div>
                                    <TextInputs
                                        ref={null}
                                        multiline={true}
                                        classStyle={"yourWidth100"}
                                        title={t('jobDesc')}
                                        placeholder={t('placeholderjobDesc')}
                                        inputType={"text"}
                                        name={"jobDesc"}


                                        HandleUpdateJob={HandleUpdateJob('jobDesc')}
                                        value={myStat.jobDesc}





                                    />
                                </div>

                            </div>

                            <div className='AddJobsFormDiv2'>


                                <div className='inputsOf2Range'>
                                    <SellectInput
                                        ref={null}
                                        classStyle={"yourWidth50"}
                                        title={t('category')}
                                        placeholder={t('placeholdercategory')}
                                        // data={jobCategories2}
                                        data={t('lang') == "En" ? jobCategories2 : ArabicjobCategories2}
                                        id={"slectCatJobinputs"}
                                        maxValues={2}
                                        name={"jobCategory"}

                                        HandleUpdateJob={HandleUpdateJob('jobCategory')}
                                        value={myStat.jobCategory}



                                    />

                                    <SellectInput
                                        ref={null}
                                        classStyle={"yourWidth50"}
                                        title={t('Type')}
                                        placeholder={t('placeholderType')}
                                        data={t('lang') == "En" ? jobTypesAddJobs : ArabicjobTypesAddJobs}
                                        id={"slectMyTypeinputs"}
                                        maxValues={2}
                                        name={"jobType"}

                                        HandleUpdateJob={HandleUpdateJob('jobType')}
                                        value={myStat.jobType}


                                    />
                                </div>

                                <div className='inputsOf2Range'>
                                    <TextInputs
                                        ref={null}

                                        multiline={false}
                                        classStyle={"yourWidth50"}
                                        title={t('Tag')}
                                        placeholder={t('placeholderTag')}
                                        inputType={"text"}
                                        name={"jobTag"}
                                        HandleUpdateJob={HandleUpdateJob('jobTag')}
                                        value={myStat.jobTag}




                                    />

                                    <TextInputs
                                        ref={null}

                                        multiline={false}
                                        classStyle={"yourWidth50"}
                                        title={t('Salary')}
                                        placeholder={t('placeholderSalary')}
                                        inputType={"number"}
                                        name={"jobMaxSalary"}

                                        HandleUpdateJob={HandleUpdateJob('jobMaxSalary')}
                                        value={myStat.jobMaxSalary}






                                    />




                                </div>

                                <div className='AddJobBtnSubmitDivs'>
                                    <div className='AddJobBtnSubmitDivsVoid'>


                                    </div>
                                    <div className='AddJobBtnSubmitDivs11'>
                                        <Button
                                            text={t('SaveBtnJob')}
                                            myClass={`AddJobBtnSubmit ${disableBTN ? "" : "enableBTNClass"}`}
                                            onClick={HandleSubmit}
                                            // style={{ backgroundColor: `${backgroundColor}`  }}
                                            disabled={disableBTN}
                                            loading={loading}

                                        />

                                    </div>


                                </div>






                            </div>

                        </div>



                    </form>





                </div>
            </div>

            {/* id error to save  */}

            {error &&<AllAlert message={t('FailedLocal')} type="danger"/>}








        </div>
    )
}

export default AddJobsSections
