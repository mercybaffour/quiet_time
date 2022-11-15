import * as React from 'react';
import { Link } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{
              mt: 2,
              // bgcolor: '#cfe8fc',
              height: '100vh',
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#036264',
            }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} sx={{ mx: 4, my: 12}}>
              <Typography variant="h2" >
               Quiet Time
              </Typography>
              <Typography variant="h3" sx={{ color: '#023020', fontStyle: 'italic',  my: 8,  textShadow: '2px 2px white'}}>
               A customized devotional at your fingertips
              </Typography>
              <Button variant="contained" size="large" sx={[
                {
                mr: 2,
                background: '#db7290',
                '&:hover': {
                    color: 'white',
                    backgroundColor: 'black',
                },
                },]}>
              <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>Sign Up</Link>
              </Button>
              <Button variant="contained" size="large" sx={[
                {
                background:  'white',
                color: '#036264',
                '&:hover': {
                    color: 'white',
                    backgroundColor: 'black',
                },
                },]}>
              <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>Login</Link>
              </Button>
            </Grid>
        </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Home
