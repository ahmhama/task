import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const FormUserDetails = ({ ...props }) => {
    return (
        <MuiThemeProvider>
            <AppBar title="Enter User Details" />
            <TextField
                label="Name"
                onChange={(e) => props.onChangeName(e.target.value)}
                defaultValue={props.name}
                margin="normal"
                fullWidth
            />
            <br />
            <TextField
                label="Email"
                type="email"
                onChange={(e) => props.onChangeEmail(e.target.value)}
                defaultValue={props.email}
                margin="normal"
                fullWidth
            />
            <br />
            <TextField
                label="mobile"
                type="tel"
                onChange={(e) => props.onChangeMobile(e.target.value)}
                defaultValue={props.mobile}
                margin="normal"
                fullWidth
            />
        </MuiThemeProvider>
    );

}

export default FormUserDetails;