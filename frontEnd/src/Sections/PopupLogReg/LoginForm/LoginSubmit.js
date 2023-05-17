
import { predefinedUsers } from "../../../assets/DummyData"


export const loginSubmit = (email, password ,stayLog) => {
    const matchedUser = predefinedUsers.find(
        (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
        try {
            const userInfo = {
                email: matchedUser.email,
                isEmployer: matchedUser.isEmployer,
                stayLog:stayLog ,
                fullName:matchedUser.fullName
            };

            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            return true;
        } catch (error) {
            console.error('Failed to store user information in local storage:', error);
            return null;
        }
    } else {
        return false;
    }
};

