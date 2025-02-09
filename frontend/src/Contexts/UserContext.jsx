import React, { createContext, useState, useContext } from "react";

// Create Context
const UserContext = createContext();

// Context Provider Component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Function to update user data
    const updateUser = (userData) => {
        setUser(userData);
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the context
export const useUser = () => {
    return useContext(UserContext);
};
