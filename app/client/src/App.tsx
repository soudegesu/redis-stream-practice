import { Paper, Grid } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import StartButton from './components/StartButton';
import StopButton from './components/StopButton';
import TextArea from './components/TextArea';
import TextForm from './components/TextForm';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      height: '100%',
      padding: 10,
    },
    control: {
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
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextForm />
          </Grid>
          <Grid item xs={9}>
            <TextArea />
          </Grid>
        </Grid>
      </Paper>
    </RecoilRoot>
  );
}

export default App;
