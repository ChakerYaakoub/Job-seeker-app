import React, { createContext, useContext, useEffect, useState } from 'react';



const StateContext = createContext();


export const ContextProvider = ({ children }) => { // for the index.js 



    const [isClickedLogReg, setIsClickedLogReg] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

   
  


    const handleClickLogReg = () => {
        if (!localStorage.getItem('userInfo')) {

            setIsClickedLogReg(!isClickedLogReg)

        }



    };

    const handleClickShowLogin = () => {
        setShowLogin(!showLogin)

    };

    //   if (localStorage.getItem('userInfo')) {
    //     setIsLogin(true)

    //     setstoredUser(JSON.parse(localStorage.getItem('userInfo')))

    // }


    // localStorage.removeItem('userInfo');'







    // const [currentColor, setcurrentColor] = useState('#03C9D7');




    // const setColor = (color) => {
    //     setcurrentColor(color);
    //     localStorage.setItem('colorMode', color);
    //  
    // }

    // if (localStorage.getItem('userInfo')) {
    //     const storedUser = JSON.parse(localStorage.getItem('userInfo'));
    //     console.log(storedUser)
    //     localStorage.removeItem('userInfo');
    // }









    return (

        <StateContext.Provider
            value={{

                isClickedLogReg,
                setIsClickedLogReg,
                handleClickLogReg,
                showLogin,
                handleClickShowLogin,
            
           
            

            }}
        >
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext); // for the app.js and another component 