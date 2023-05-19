import React from 'react'
import "./NotFound404.css"
import { useTranslation } from 'react-i18next';

import { Link, useNavigate } from "react-router-dom";

const NotFound404 = () => {
    const { t } = useTranslation();
    return (
        <div>

            <div id="notfoundMy">
                <div className="notfoundMy">
                    <div className="notfound-404My">
                        <h1>{t('Title404')}</h1>
                        <h2>{t('Text404')}</h2>
                    </div>

                    <Link to={"/Job-seeker-app"}>  {t('BTN404')}</Link>
                   
                </div>
            </div>
        </div>
    )
}

export default NotFound404