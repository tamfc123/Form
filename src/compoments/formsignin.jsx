import './formsignin.css'
import React, { useState } from "react";
import {SiFacebook} from "react-icons/si"
import {AiFillGoogleCircle} from "react-icons/ai"
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
const theme = createTheme({
    palette: {
      primary: {
        main: '#FFCC00', // Màu vàng #FFCC00
      },
    },
});
const buttonStyle = {
    width: '60%',
    borderRadius: '20px',
    fontWeight: 'bold',
}
const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Montserrat, sans-serif',
    minHeight: '100%',

};
const containerStyle = {
    position: 'relative',
    width: '30%',
    maxWidth: '100%',
    minHeight: '80%',
    background: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 14px 28px rgba(0,0,0,0.22)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};
const FormSignIn = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Đặt logic xác thực ở đây, ví dụ kiểm tra tài khoản và mật khẩu
    };
    return (
        <div style={formStyle}>
        <Container maxWidth="xs" style={containerStyle}>
            <Typography 
                variant="h4" 
                component="h2" 
                align="center" 
                sx={{
                    marginTop: '15%', 
                }}>
                SignIn
            </Typography>
            <form onSubmit={handleSubmit}>
                <div className="social-container">
                    <Link href="#"><SiFacebook/></Link>
                    <Link href="#"><AiFillGoogleCircle/></Link>
                    <Link href="#"><SiFacebook/></Link>
                </div>
                <p>or use your account</p>
                <TextField 
                    fullWidth 
                    size="small" 
                    id="margin-normal" 
                    margin="normal"
                    color="success" 
                    
                    label="Email" 
                    variant="outlined" />
                <FormControl fullWidth size="small" variant="outlined" color="success">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        } 
                        label="Password"/>
                </FormControl>
                <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: '#333',
                        fontSize: '14px',
                        textDecoration: 'none',
                        margin: '15px 0',
                    }}
                >
                    Forget your password?
                </Link>
                <ThemeProvider theme={theme}>
                    <Button style={buttonStyle} variant="contained" color="primary">Sign in</Button>
                </ThemeProvider>
            </form>    
        </Container>
      </div>
    )
}

export default FormSignIn;