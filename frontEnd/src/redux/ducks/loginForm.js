
const UPDATE = 'update' // action 

const RESET_STATE = 'RESET_STATE';

export const resetState = () => ({
    type: RESET_STATE,
});

// fc action  
export const update = (field, value) => ({
    type: UPDATE,
    field,
    value,
});

const initialStateLoginForm = {
    email: '',
    password: '',
    stayLog: false
}





export default (state = initialStateLoginForm, action) => {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                [action.field]: action.value
            };

        case RESET_STATE:
            return initialStateLoginForm;


        default:
            return state;
    }
}




