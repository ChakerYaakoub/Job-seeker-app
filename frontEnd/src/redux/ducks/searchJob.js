
const UPDATE = 'update' // action 

// fc action  
export const update = (field, value) => ({
    type: UPDATE,
    field,
    value,
  });

const initialState1 = {
    jobTitle: '',
    searchCity: ''
}





export default (state = initialState1, action) => {
    switch (action.type) {
        case UPDATE:
  
       
   
            return {
                ...state,
                [action.field]: action.value
            };


        default:
            return state;
    }
}




