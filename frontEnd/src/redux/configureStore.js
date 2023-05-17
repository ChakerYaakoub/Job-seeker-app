import { combineReducers  } from "redux";
// import { combineReducers , createStore } from "redux"; // createStore deprecated 
import { legacy_createStore as createStore} from 'redux'  // replace  createStore

// regulare the name is the name of the duck + Reducer  
import searchJobReducer from './ducks/searchJob'
import loginFormReducer from './ducks/loginForm'
import registerFormReducer from './ducks/registerForm'




const reducer =combineReducers({
    searchJob: searchJobReducer ,
    loginForm:loginFormReducer,
    registerForm:registerFormReducer
    
}) ;



const store =createStore(reducer);

export default  store ;
