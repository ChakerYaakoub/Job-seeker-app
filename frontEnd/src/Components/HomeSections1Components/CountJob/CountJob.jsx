import React, { useState } from 'react'
import "./CountJob.css"
import { useTranslation, Trans } from 'react-i18next';

const CountJob = () => {
  const { t } = useTranslation();
  const [NB, setNB] = useState(93.123)
  return (
    <div className='CountJob'>
      <Trans i18nKey="PostingsNB">
        There Are <span className="PostingsNB">{{ NB }}</span> Postings Here For You!
      </Trans>


    </div>
  )
}

export default CountJob