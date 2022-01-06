import { Paper, Grid, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import ConnectButton from './components/ConnectButton';
import DisconnectButton from './components/DisconnectButton';
import ChatArea from './components/ChatArea';
import TextForm from './components/TextForm';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      height: '100%',
      padding: 10,
    }
  }),
);

const App: FC = () => {

  const classes = useStyles()

  return (
    <RecoilRoot>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={4}/>
          <Grid item xs={4}>
            <ConnectButton />
          </Grid>
          <Grid item xs={4}>
            <DisconnectButton />
          </Grid>
          <Grid item xs={4}/>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextForm />
            <Typography>Submit with Return key</Typography>
          </Grid>
          <Grid item xs={9}>
            <ChatArea />
          </Grid>
        </Grid>
      </Paper>
    </RecoilRoot>
  );
}

export default App;
