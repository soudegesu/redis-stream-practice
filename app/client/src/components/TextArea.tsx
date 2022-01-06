import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { recieveMessagesAtom } from '../states';

const TextArea: FC = () => {

  const { recieveMessages } = useTextArea();

  return <Box>
    {recieveMessages.map((msg) => {
      return <Box id={msg.id}>
        <Typography>ID: {msg.id}</Typography>
        <Typography>Message: {msg.body}</Typography>
      </Box>
    })}
  </Box>
}

const useTextArea = () => {

  const recieveMessages = useRecoilValue(recieveMessagesAtom);


  return {
    recieveMessages
  }
}

export default TextArea;