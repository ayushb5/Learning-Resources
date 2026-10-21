import { createContext } from "react";

export const UserContext = createContext();

const user = {
    name: "Kiran Sharma",
    age: 24,
    country: "India"
}

const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;