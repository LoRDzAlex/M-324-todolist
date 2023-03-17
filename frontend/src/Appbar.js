import "./App.css"
import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {IconButton} from "@mui/material";
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import {Home} from "@mui/icons-material";

export default function Appbar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton href={"http://localhost:3000/"}>
                        <Home/>
                    </IconButton>
                    <IconButton href={"http://localhost:3000/task"}>
                        <AssignmentTurnedInIcon/>
                    </IconButton>
                    <IconButton href={"http://localhost:3000/car"}>
                        <TimeToLeaveIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}} align={"right"}>
                        M324
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}