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


  function BlogCard() {
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
          <Link href='https://www.thebalance.com/best-personal-finance-books-4154809' target="_blank">
            <ButtonBase sx={{ width: 128, height: 128 }}>
            <   Img alt="complex" src="https://media.istockphoto.com/photos/the-woman-hand-is-putting-a-coin-in-a-glass-bottle-and-a-pile-of-on-picture-id1185358443?k=20&m=1185358443&s=612x612&w=0&h=3mfXaLte0QYoz9qO8vp20aIoqvruxbInReRjuWybNa0=" />
            </ButtonBase>
          </Link>
      </Grid>
      <Grid item xs={1} sm container>
        <Grid item xs container direction="column" spacing={2}>
            <Typography  variant="h4" component="h2">
                Reading Material
            </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);
}
export default BlogCard