// UserContext.js
import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [mongoUser, setMongoUser] = useState(null);

  return (
    <UserContext.Provider value={{ mongoUser, setMongoUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useMongoUser() {
  return useContext(UserContext);
}