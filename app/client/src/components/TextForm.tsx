import { TextField } from '@mui/material';
import { FC, useCallback } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { inputTextAtom, socketAtom } from '../states';
import { v4 as uuidv4 } from 'uuid';

const TextForm: FC = () => {

  const { text, onChangeText, onKeyDown } = useTextForm();

  return <TextField value={text} label='input text' onChange={onChangeText} onKeyDown={onKeyDown}/>
}

const useTextForm = () => {

  const [text, setText] = useRecoilState(inputTextAtom);
  const socket = useRecoilValue(socketAtom);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, [setText]);
  
  const onKeyDown = useCallback((e) => {
    if (e.keyCode === 13) {
      console.log('Return key pressed')
      if (text) {
        console.log(`sendMessage: ${text}`);
        socket?.emit('sendMessage', {
          id: uuidv4(),
          body: text,
        });
      }
    }
  }, [socket, text]);

  return {
    text,
    onChangeText,
    onKeyDown,
  }
}


export default TextForm;