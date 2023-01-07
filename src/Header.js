import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '4px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ boxShadow:5,background:'linear-gradient(45deg, #8A2BE2 30%, #7FFFD4 90%)',marginTop:2 }}>
      <CardContent>
        <Typography align='center' variant="h4" component="div">
          Spotify API
        </Typography>
      </CardContent>
    </Card>
  );
}