
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer, PopupLogReg,ScrollToTopButton } from "./Sections/index";
import { Home, NotFound404, FindJobs, Profile, AddJobs } from "./Pages/index";
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();



  return (
    <div className={`App ${t('style')}`} id={`${t('style')}`} >
      <Router>

        <Header />


        <PopupLogReg />
        <ScrollToTopButton />

        <Routes>

          {/* Home Page Routes  */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />


          {/* profile / employer and candidate    Page   */}
          <Route path="/profile" element={<Profile />} />

          {/* AddJobs / employer Page   */}
          <Route path="/AddJobs" element={<AddJobs />} />

          {/* FindJobs/ search   Page   */}
          <Route path="/FindJobs" element={<FindJobs />} />

          {/* 404  Page   */}
          <Route path="*" element={<NotFound404 />} />











        </Routes>

        <Footer />

      </Router>


    </div>
  );
}

export default App;

{/* <header className="App-header">

<p>My App</p>

</header> */}
