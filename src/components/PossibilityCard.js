import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Link from '@mui/material/Link';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });


function PossibilityCard() {


  return (
    <Paper
    sx={{
      p: 2,
      margin: 'auto',
      marginTop:"2%",
      position:'relative',
      display:'grid',
      maxWidth: 500,
      flexGrow: 1,
      backgroundImage: 'linear-gradient(#712B75, #C74B50, #D49B54)',
    }}
  >
    <Grid>
      <Grid item>
          <Link href='https://www.investopedia.com/' target="_blank">
            <ButtonBase sx={{ width: 128, height: 128 }}>
            <   Img alt="complex" src="https://www.business2community.com/wp-content/uploads/2016/04/Finance_blog_22809_11119.jpg-600x420.jpg" />
            </ButtonBase>
          </Link>
      </Grid>
      <Grid item xs={1} sm container>
        <Grid item xs container direction="column" spacing={2}>
            <Typography  variant="h4" component="h2">
             
            </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);
}

export default PossibilityCard