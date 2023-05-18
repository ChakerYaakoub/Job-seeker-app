// ActionTypes
const UPDATE = 'addJob/UPDATE';
const RESET_STATE = 'addJob/RESET_STATE';

// Action Creators
export const update = (field, value) => ({
    type: UPDATE,
    field,
    value,
});

export const resetState = () => ({
    type: RESET_STATE,
});

// Reducer
const initialState = {
    jobTitle: '',
    jobDesc: '',
    jobCategory: [],
    joblLocation: '',
    jobMinSalary: '',
    jobMaxSalary: '',
    jobTag: '',
    jobSalaryType: '',
    jobType: [],
    isUrgent: false,
    isFeatured: false,
    isFilled: false,
};

export default function addJobReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                [action.field]: action.value,
            };

        case RESET_STATE:
            return initialState;

        default:
            return state;
    }
}
