import React, { useEffect, useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CandidateProfile, EmployedProfile } from "../../Sections"


// all the css in this components is here ./Profile.css 
const Profile = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userInfo')));
  console.log(user)


  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, []);

  if (!user) {
    return null;
  }

  return (
    <>
      {user.isEmployer ? (
        <EmployedProfile user={user} t={t} />
      ) : (
        <CandidateProfile user={user} t={t} />
      )}





    </>
  );
};

export default Profile;
