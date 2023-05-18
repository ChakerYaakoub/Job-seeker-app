import React from 'react'
import "./AddJobsSections.css"
import { useTranslation } from 'react-i18next';

import { Button, SellectInput, TextAreaInput, TextInputs } from "../../Components"

const AddJobsSections = () => {
    const { t } = useTranslation();
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
                                        multiline={false}
                                        classStyle={"yourWidth100"}
                                        title={t('JobTitle')} 


                                    />
                                </div>
                                <div>
                                    <TextInputs
                                        multiline={true}
                                        classStyle={"yourWidth100"}
                                        title={t('jobDesc')} 


                                    />
                                </div>

                            </div>

                            <div className='AddJobsFormDiv2'>


                                <div className='inputsOf2Range'>
                                    <SellectInput
                                        classStyle={"yourWidth50"}
                                        title={t('category')} 

                                    />

                                    <SellectInput
                                        classStyle={"yourWidth50"}
                                        title={t('Type')} 

                                    />
                                </div>

                                <div className='inputsOf2Range'>
                                    <TextInputs
                                        multiline={false}
                                        classStyle={"yourWidth50"}
                                        title={t('Tag')} 


                                    />

                                    <TextInputs
                                        multiline={false}
                                        classStyle={"yourWidth50"}
                                        title={t('Salary')} 



                                    />




                                </div>

                                <div className='AddJobBtnSubmitDivs'>
                                    <div className='AddJobBtnSubmitDivsVoid'>
                           

                                    </div>
                                    <div className='AddJobBtnSubmitDivs11'>
                                    <Button  text={t('SaveBtnJob')} myClass={'AddJobBtnSubmit'} />

                                    </div>
                                   
                                 
                                </div>






                            </div>

                        </div>



                    </form>


                </div>
            </div>





        </div>
    )
}

export default AddJobsSections

// "title": "Junior Graphic Designer (Web)", <br />
// "desc": "dfghfdgdfgdf", <br />

// "category": "Design",
// "category2": "Development",<br /><br />
// "location": "NewYork",<br />

// "minSalary": "150",
// "maxSalary": "180",
// "salaryType": "week",

// <br />
// "type": "Full time",
// "isUrgent": "yes"

// <br />
// "isFeatured": "yes",  // no
// "isFilled": "yes",// no