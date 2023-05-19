import React from 'react'
import "./PopupNewJob.css"
import { useStateContext } from '../../contexts/ContextProvider';
import { useTranslation } from 'react-i18next';
import { HeaderLogReg, InfoNewJob ,AllAlert } from "../../Components"



const PopupNewJob = () => {
    const { t } = useTranslation();


    const { handleClickExitNewJob } = useStateContext();
    return (
        <div>
            <div className='PopupNewJob' >
                <div className="PopupNewJobblocker" ></div>
                <div className='PopupNewJob-inner'>
                    
                     
                    <div className='PopupNewJobPage'>
                 


                        {/* i use the same heasder of login register ==>  the same display  */}
                        <HeaderLogReg title=  {t('PreviewNewJob')} handleClickLogReg={handleClickExitNewJob} />
                        
                        <div className='successfullyAddJob'>
                        {t('successfullyAddJob')}
                        
                        </div>
                       

                        <InfoNewJob t={t} />


                        <AllAlert message={t('NoteAddJobs') } timeout={100000} type="warning"/>

                       



                       







                    </div>




                </div>

            </div>

        </div>
    )
}

export default PopupNewJob