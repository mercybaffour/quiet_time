import * as React from 'react';
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Music from '../images/music-note.jpg';
import Prayer from "../images/prayer-rodolfo-clix.jpg";
import Scripture from "../images/scripture-johnmark-smith.jpg";
import Journaling from "../images/journaling-jessica-lewis-creative.jpg";

export default function Overview() {
  return (
    <Container fixed>
        <Box sx={{ height: '100vh', mt: 8}} >
        <Grid container spacing={2}>
            <Grid xs={6}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="music and worship"
                        height="200"
                        image={Music}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Music
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Start your devotional with some praise & worship! Choose among your favorite Christian genres and a song will be selected for you.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={6}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="prayer and worship"
                        height="200"
                        image={Prayer}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Prayer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Consistently participate in quiet prayer time. Don't worry about the timer. Pray as long as you wish.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={6}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="scripture and worship"
                        height="200"
                        image={Scripture}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Scripture
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Let the Word be a lamp unto your feet and a light unto your path...A new scripture will be generated every time you start this devotional!
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={6}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="music and worship"
                        height="200"
                        image={Journaling}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Journaling
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Jot down some lessons learned and any thoughts you feel compelled to put on paper or to type as an entry. Entries typed will be saved for you to look back on!
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Button variant="contained" size="large" sx={[
            {
            background: '#db7290',
            '&:hover': {
                color: '#036264',
                backgroundColor: 'white',
            },
            },]}>
    <Link to="/music" style={{ textDecoration: "none", color: "inherit" }}>Start Now</Link></Button>
        </Box >
    </Container>
  );
}
