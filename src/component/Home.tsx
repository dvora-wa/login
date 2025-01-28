import React, { useContext } from 'react';
import Login from "./Login";
import ShowUser from "./ShowUser";
import { UserContext } from "../models/userContext";

const Home = () => {
    const { user } = useContext(UserContext);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Home</h1>
            <div style={{ position: 'absolute', top: 20, left: 20 }}>
                {!user.name ? <Login /> : <ShowUser />}
            </div>
        </div>
    );
};

export default Home;
