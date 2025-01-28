import { FormEvent, useContext, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { UserContext } from "../models/userContext";

const UpdateUser = () => {
    const userDetail = useContext(UserContext);
    const [isUpdate, setIsUpdate] = useState(false);
    const [name, setName] = useState(userDetail.user.name);
    const [lastName, setLastName] = useState(userDetail.user.lastName);
    const [email, setEmail] = useState(userDetail.user.email);
    const [address, setAddress] = useState(userDetail.user.address);
    const [phone, setPhone] = useState(userDetail.user.phone);
    const [password, setPassword] = useState('');

    const handleUpdate = () => setIsUpdate(true);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        userDetail.dispatch({
            type: 'UPDATE', data: {
                name, lastName, email, address, phone, password
            }
        });
        // TODO: Connect to server to update user data
        setIsUpdate(false);
    };

    return (
        <>
            <Button onClick={handleUpdate} color="primary">Update</Button>
            <Dialog open={isUpdate} onClose={() => setIsUpdate(false)}>
                <DialogTitle>עדכון פרטי משתמש</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField label="שם" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
                        <TextField label="שם משפחה" value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth margin="normal" />
                        <TextField label="מייל" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
                        <TextField label="כתובת" value={address} onChange={(e) => setAddress(e.target.value)} fullWidth margin="normal" />
                        <TextField label="טלפון" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth margin="normal" />
                        <TextField label="סיסמא" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth margin="normal" />
                        <DialogActions>
                            <Button type="submit" variant="contained" color="primary">שמירה</Button>
                            <Button onClick={() => setIsUpdate(false)} color="secondary">ביטול</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default UpdateUser;


