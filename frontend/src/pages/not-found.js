import { useEffect } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid } from '@mui/material'
import ButtonCustom from '../components/ButtonCustom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function NotFound() {

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Card style={{ width: '614px', marginTop: '20px' }} elevation={5}>
          <CardHeader
            title="Not Found!"
          />
          <CardContent>
            <Typography variant="h6" color="text.primary" align="center">
              You are probably lost. Click "Home" for back to home page.
            </Typography>
            <Typography align="center" variant="h1">
              <ButtonCustom link="/" name="Home" icon={<HomeOutlinedIcon />} />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}