
const UPDATEREG = 'updateReg' // action 

// fc action  
export const updateReg = (field, value) => ({
    type: UPDATEREG,
    field,
    value,
  });

const initialStateRegisterForm= {
    emailReg: '',
    passwordReg: '',
    isEmployer : false,
}





export default (stateReg = initialStateRegisterForm, action) => {
    switch (action.type) {
        case UPDATEREG:
  
       
   
            return {
                ...stateReg,
                [action.field]: action.value
            };


        default:
            return stateReg;
    }
}




