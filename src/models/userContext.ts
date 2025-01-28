import { createContext, Dispatch } from "react";
import { Action, userType } from "./Type";


const initialState: userType = { name: '', email: '', lastName: '', phone: '', password: '', address: '' };
export const UserContext = createContext<{ user: userType; dispatch: Dispatch<Action> }>({ user: initialState, dispatch: () => null });


