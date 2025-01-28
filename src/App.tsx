import React from 'react';
import { UserProvider } from "./component/UserProvider";
import Home from "./component/Home";

const App = () => {
    return (
        <UserProvider>
            <Home />
        </UserProvider>
    );
};
export default App;

