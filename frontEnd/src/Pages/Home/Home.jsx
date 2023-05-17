import React from 'react'
import "./Home.css"
import { HomeSections1, HomeSections2, HomeSections3, HomeSections4 } from "../../Sections/index";

const Home = () => {
  return (
    <div className='MyhomePage'>
      {/* welcome / search Section */}
      <HomeSections1 />

      {/* populare jobs  Section */}
      <HomeSections2 />

      {/* foatured jobs Section */}
      <HomeSections3 />


      {/* Download  jobs-seeker App  */}
      <HomeSections4 />

    </div>
  )
}

export default Home 