import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { recieveMessagesAtom } from '../states';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    chatArea: {
      padding: 10,
      backgroundColor: '#f1f1f1',
    },
  }),
);

const ChatArea: FC = () => {

  const { recieveMessages } = useChatArea();
  const classes = useStyles();

  return <Box className={classes.chatArea}>
    {recieveMessages.map((msg) => {
      return <Grid container id={msg.id} display='flex' spacing={2}>
        <Grid item>
          <Typography>ID: {msg.id}</Typography>
        </Grid>
        <Grid item>
          <Typography>{msg.body}</Typography>
        </Grid>
      </Grid>
    })}
  </Box>
}

const useChatArea = () => {

  const recieveMessages = useRecoilValue(recieveMessagesAtom);


  return {
    recieveMessages
  }
}

export default ChatArea;