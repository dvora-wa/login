import { Action, userType } from "./Type";

export default (state: userType, action: Action): userType => {
    switch (action.type) {
        case 'UPDATE':
            return { ...state, ...action.data };
        case 'DELETE':
            return state;
        case 'CREATE':
            return { ...state, name: action.name, email: action.email, password: action.password };    
        default: 
            return state;
    }
};
