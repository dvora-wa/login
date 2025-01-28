import { ReactNode, useReducer } from "react";
import userReducer from "../models/userReducer";
import { UserContext } from "../models/userContext";
import { userType } from "../models/Type";

const initialState: userType = { name: '', email: '', lastName: '', phone: '', password: '', address: '' };
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, initialState);
    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};
