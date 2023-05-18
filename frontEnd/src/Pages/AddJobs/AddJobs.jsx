import React from 'react'
import "./AddJobs.css"
import {AddJobsSections,PopupNewJob} from "../../Sections"
import { useStateContext } from '../../contexts/ContextProvider';


const AddJobs = () => {
  const { showAddNewJob ,isLogin} = useStateContext();

  return (
    <div className='AddJobspage'>
      
    <AddJobsSections/>
    

    {(showAddNewJob && JSON.parse(localStorage.getItem('recentJob')) )&&  <PopupNewJob />}


   
 


    </div>
  )
}

export default AddJobs