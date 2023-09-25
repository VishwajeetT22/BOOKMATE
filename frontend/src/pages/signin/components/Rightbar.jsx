import styled from '@emotion/styled';
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';



const Rightbar = ()=>{


    return(
        <Box  flex={4} p={2}>

            <Typography variant='h6' sx={{color:'#646E8A',fontWeight:'600', marginTop:'50px'}}>
                LOGIN
            </Typography>
            <Typography variant='h4' sx={{color:'#333748',fontWeight:'700', mt:'15px'}}>
               Welcome to BookMate
            </Typography>

            <Typography  sx={{color:'#333748',marginTop:'20px',}}>
              Enter your email
            </Typography>

            {/* <TextField id="email" label="Email" variant="outlined" sx={{marginTop:'20px'}} /> */}

            <TextField
              sx={{width:'500px'}}
              label="Email" // Label for email input
              type='email'
              variant="outlined"
              margin="normal"
              required
            />

            <Typography  sx={{color:'#333748', marginTop:'20px'}}>
              Enter your password
            </Typography>
            <TextField
              sx={{width:'500px'}}
              label="Password" // Label for email input
              type='password'
              variant="outlined"
              margin="normal"
              required
            />

            <Typography sx={{marginTop:'15px',marginLeft:'15px',color:'#333748'}}>
                Don't have an account yet? <Link href='#' style={{color:'#009357', textDecoration:'none'}}>Sign up here</Link>
            </Typography>

            <Button variant="contained" sx={{borderRadius:0, marginY:'15px', marginLeft:'400px',paddingX:'20px'}}>    
                Login
            </Button>

            <Link href='#' style={{color:'#009357', textDecoration:'none',marginLeft:'350px'}}>
             Forgot your password?
            </Link>

        </Box>
    )
}

export default Rightbar;