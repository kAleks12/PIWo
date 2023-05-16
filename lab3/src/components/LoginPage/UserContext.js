import React, {createContext, useState} from 'react';
import mockedUsers from './mock/MockedUsers';

const UserContext = createContext({
    user: null,
    loginFunc: () => {},
    logoutFunc: () => {}
});

const UserHandler = ({children}) => {
    let loggedUser = null;

    try {
        loggedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    } catch (error) {
        console.error('Error getting user from local storage', error);
    }

    const [user, setUser] = useState(loggedUser);

    const loginFunc = (email, password) => {
        const validatedUser = mockedUsers.find(
            (user) => user.email === email && user.password === password
        );

        if (validatedUser) {
            localStorage.setItem('user', JSON.stringify(validatedUser));
            setUser(validatedUser);

            return true;
        }

        return false;
    };

    const logoutFunc = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <UserContext.Provider value={{user: user, loginFunc: loginFunc, logoutFunc: logoutFunc}}>
            {children}
        </UserContext.Provider>
    );
};

export {UserContext, UserHandler};