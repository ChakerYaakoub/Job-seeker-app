import React from 'react'
import "./HomeSections4.css"
import { app } from "../../assets/DummyData"
import { useTranslation } from 'react-i18next';
import { DounloadBtnApp } from "../../Components"


const HomeSections4 = () => {
    const { t } = useTranslation();
    return (
        <div className='HomeSections4'>
            <div className="downloadImageApp">
                <img src={app} alt="downloadImageApp" />


            </div>
            <div className="downloadBtnTextApp">
                
                <p className='downloadText'>{t('downloadText')} </p>

                <p className='SearchText'>{t('SearchText')} </p>

                <p className='millionSearch'>{t('millionSearch')}</p>

                <div className="DounloadBtn">




                    <div className='MyDounloadBtnAppLeftRight'>
                        <DounloadBtnApp 
                        text1={t('DownloadAppStore')} 
                        text2={t('AppleStore')} 
                        icon={"fa-apple"}
                        />
                    </div>

                    <div className='MyDounloadBtnAppLeftRight'>
                        <DounloadBtnApp
                         text1={t('GetInGoog')} 
                         text2={t('GooglePlay')}
                         icon={"fa-google-play"}
                          />
                    </div>










                </div>


            </div>

        </div>
    )
}

export default HomeSections4