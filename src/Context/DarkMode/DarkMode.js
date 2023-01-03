import React, { createContext, useState } from 'react';
export const DarkContext = createContext();
const DarkMode = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const darkValue = { darkMode, setDarkMode };
    return (
        <DarkContext.Provider value={darkValue}>
            {children}
        </DarkContext.Provider>
    );
};

export default DarkMode;