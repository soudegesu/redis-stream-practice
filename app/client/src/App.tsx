import { Paper, Grid } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import StartButton from './components/StartButton';
import StopButton from './components/StopButton';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      height: '100%'
    },
    control: {
      padding: 10
    }
  }),
);

const App: FC = () => {

  const classes = useStyles()

  return (
    <RecoilRoot>
      <Paper className={classes.paper}>
        <Grid container spacing={2} className={classes.control}>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <StartButton />
          </Grid>
          <Grid item xs={4}>
            <StopButton />
          </Grid>
          <Grid item xs={4}/>
        </Grid>
      </Paper>
    </RecoilRoot>
  );
}

export default App;
