import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp(navigate) {
 /* const [newItem, setNewItem] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');*/
  const [post, setPost]=useState({
    id:1,
    firstName:'',
    lastName:'',
    email:'',
    password:''



  });
  

    const handleinput=(e)=>{
      setPost({...post, [e.target.name]:(e.target.value)})
    }
    
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //axios.put("http://localhost:8000/users",{post})
     // Assuming you have the user ID in the state or another variable, replace 'userId' with the actual user ID
  

  axios.put(`http://localhost:8000/users`, post)
    .then(res=>console.log(res.data))
    .catch(error =>{ 
      if (axios.isAxiosError(error)) {
        // Axios error
        console.error('AxiosError:', error)}});
   

    //const data = new FormData(event.currentTarget);
    //console.log({
      //email: data.get('email'),
      //password: data.get('password'),

    }
   
  
    //const additem=async ()=>{

      //const apiEndpoint = 'http://localhost:8000/users';

   /* try {
      const response = await axios.post(apiEndpoint, { email,password });
      const apiEndpoint = 'http://localhost:8000/users';
      const addItemResponse = await axios.post(apiEndpoint, { name: newItem });
      console.log('Item added successfully:', addItemResponse.data);

     // if (response.status === 201) {
        console.log('Item added successfully:', response.data);
        fetchData(); // Refresh the data after adding an item
      } 
      
    catch (error) {
      console.error('Error during item addition:', error.message);
    }
    }






  //};*/
 

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleinput}
                /></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleinput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleinput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleinput}

                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}