import { useReducer, useState } from "react";
import React, { useContext } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { UserContext } from "../models/userContext";
import axios from 'axios'; 

const Login = () => {
    const { dispatch } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState(''); // הוסף שדה עבור השם
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/user/login', { email, password });
            dispatch({ type: 'CREATE', name: name ,email: response.data.user.email, password: response.data.user.password }); // הוסף את השם
            setOpen(false);
        } catch (err) {
            setError("משתמש אינו קיים במערכת");
        }
    };
    
    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/user/register', { email, password });
            dispatch({ type: 'CREATE', name: name , email: email, password: password }); 
            console.log(response.data.user);
            setOpen(false);
        } catch (err) {
            setError("משתמש כבר קיים");
        }
    };

    return (
        <>
            <Button onClick={() => setOpen(true)}>Login</Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleLogin}>
                        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth /> {/* שדה עבור השם */}
                        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
                        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <DialogActions>
                            <Button type="submit">Login</Button>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                            <Button onClick={handleRegister}>Register</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Login;


