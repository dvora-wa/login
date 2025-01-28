import { Avatar } from "@mui/material";
import { useContext } from "react";
import { deepPurple } from "@mui/material/colors";
import { UserContext } from "../models/userContext";
import UpdateUser from "./UpdateUser";

const ShowUser = () => {
    const { user } = useContext(UserContext);
    return (
        <>
            {user.name && (
                <>
                    <Avatar sx={{ bgcolor: deepPurple[400], width: 60, height: 60 }}>{user.name.charAt(0)}</Avatar>
                    <span>{user.name}</span>
                    <UpdateUser />
                </>
            )}
        </>
    );
};

export default ShowUser;
