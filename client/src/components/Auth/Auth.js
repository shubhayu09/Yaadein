import React, { useState} from 'react';
import { Avatar,Button,Paper,Grid,Typography,Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import useStyles from './styles';
import Input from './Input';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import Icon from './icon';
import { useDispatch } from 'react-redux';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setSignup] =useState(false);
   // const isSignup = true;
    const dispatch = useDispatch();
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = () => {
    
    };

    const handleChange = () => {
        
    };

    const switchMode = () => {
        setSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
        } catch(error) {
            console.log(error);
        }
    };

    const googleError = () => {
        console.log("Google Sign In was unsuccessful.")
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />   
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" /> 
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}  />
                        {
                            isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>
                         }
                    </Grid>
                    
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {
                            isSignup ? 'Sign Up' : 'Sign In'
                        }
                    </Button>
                    <GoogleLogin
                        clientId="41712815414-gomrbv3sh26e1ad0gb9she5bqssk6dek.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onError={googleError}
                       // cookiePolicy="single_host_origin"
                        Cross-Origin-Opener-Policy="same-origin-allow-popups"
                    />
                    &nbsp;
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;