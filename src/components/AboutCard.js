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

function AboutCard() {
  return (
    <Paper
    sx={{
      p: 2,
      margin: 'auto',
      marginTop:"5%",
      position:'relative',
      display:'grid',
      maxWidth: 500,
      flexGrow: 1,
      backgroundImage: 'linear-gradient(#712B75, #C74B50, #D49B54)',
    }}
  >
    <Grid>
      <Grid item>
          <Link href='https://www.goldmanpfm.com/get-personal/start-a-conversation?utm_campaign=71700000084525786&utm_medium=GOOGLE&utm_source=search&utm_content=58700007511213266&utm_term=local+financial+advisor&ds_rl=1299756&ds_rl=1299756&gclid=CjwKCAjwxZqSBhAHEiwASr9n9DCseVBsQgDHrakUQPFKDbp3YkmIPO9HLt89vBn54AQcsdXFBSTSRxoC2q4QAvD_BwE&gclsrc=aw.ds' target="_blank">
            <ButtonBase sx={{ width: 128, height: 128 }}>
            <   Img alt="complex" src="https://www.retirementliving.com/wp-content/uploads/2018/05/financial-advisor.jpg" />
            </ButtonBase>
          </Link>
      </Grid>
      <Grid item xs={1} sm container>
        <Grid item xs container direction="column" spacing={2}>
            <Typography  variant="h4" component="h2">
              Finacial Guidance
            </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);
}

export default AboutCard

