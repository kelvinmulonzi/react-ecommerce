import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize the login state by checking localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedStatus = localStorage.getItem('isLoggedIn');
    return storedStatus === 'true'; // Return true if storedStatus is 'true'
  });

  const logIn = () => {
    setIsLoggedIn(true);
    // Store the login status in localStorage
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logOut = () => {
    setIsLoggedIn(false);
    // Remove login status from localStorage
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
