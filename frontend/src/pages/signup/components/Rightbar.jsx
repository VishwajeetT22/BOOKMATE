import styled from '@emotion/styled';
import { Box, Button, TextField, Typography,Stack } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';


const Rightbar = ()=>{


    return(
        <Box  flex={4} p={2}>

                <Typography variant='h6' sx={{color:'#646E8A',fontWeight:'600', marginTop:'15px'}}>
                    SIGN UP
                </Typography>
                <Typography variant='h4' sx={{color:'#333748',fontWeight:'700', mt:'15px'}}>
                Create an account
                </Typography>

                <Typography sx={{color:'#98A1A7', fontWeight:'100' ,marginY:'10px',fontSize:'0.8rem'}}>
                    Fill out the form to get started
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5}>

                    <Typography  sx={{color:'#333748',marginBottom:'10px'}}>
                        Enter your first name
                        </Typography>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        type='text'
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                        
                       
                    />
                    </Grid>

                    <Grid item xs={12} sm={5}>
                    <Typography  sx={{color:'#333748',marginBottom:'10px'}}>
                        Enter your last name
                        </Typography>
                    <TextField
                        required
                        id="lastName"
                        type='text'
                        name="lastName"
                        label="Last name"
                         fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                      
                      
                    />
                    </Grid>
        
            
                    <Grid item xs={12} sm={5}>
                    <Typography  sx={{color:'#333748',marginBottom:'10px'}}>
                        Enter your email
                        </Typography>

                    <TextField
                        required
                        id="email"
                        name="email"
                        type ='email'
                        label="Email"
                        fullWidth
                        autoComplete="email"
                        variant="outlined"
                      
                      
                    />
                    </Grid>
                    <Grid item xs={12} sm={5}>

                    <Typography  sx={{color:'#333748',marginBottom:'10px'}}>
                        Enter your mobile
                    </Typography>
                    <TextField
                        id="mobile"
                        name="mobile"
                        type ='tel'
                        label="Mobile"
                        fullWidth
                        autoComplete="mobile"
                        variant="outlined"
                        required
                        
                        
                    />
                    </Grid>
            
                    <Grid item xs={10}>

                    <Typography  sx={{color:'#333748', marginBottom:'10px'}}>
                        Enter your password
                    </Typography>
                    <TextField
                        required
                        id="password"
                        type='password'
                        name="password"
                        label="Password"
                        fullWidth
                        variant="outlined"
                        
                        
                    />
                    </Grid>
        
        
                </Grid>

            <Typography sx={{marginTop:'20px',marginLeft:'15px',color:'#333748'}}>
                Already have an account? <Link href='#' style={{color:'#009357', textDecoration:'none'}}>Login</Link>
            </Typography>

            <Button variant="contained" sx={{borderRadius:0, marginY:'20px',paddingX:'20px'}}>    
                Sign up
            </Button>

            {/* <Link href='#' style={{color:'#009357', textDecoration:'none',marginLeft:'350px'}}>
            Forgot your password?
            </Link> */}
      
        </Box>
    )
}

export default Rightbar;