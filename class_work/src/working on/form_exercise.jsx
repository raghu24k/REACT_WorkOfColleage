import React, { Component } from "react";
import { TextField, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

class FormExercise extends Component {
    render() {
        return (
            <Box sx={{ padding: 2 }}>
                <HomeIcon sx={{ fontSize: 40, marginBottom: 2 }} />
                <TextField
                    helperText="Please enter your name"
                    id="demo-helper-text-misaligned"
                    label="Name"
                    sx={{ marginRight: 2 }}
                />
                <TextField
                    id="demo-helper-text-misaligned-no-helper"
                    label="Name"
                />
            </Box>
        )
    }
}

export default FormExercise;