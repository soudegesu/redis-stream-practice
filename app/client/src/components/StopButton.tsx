import { Button } from '@mui/material';
import { FC, useCallback } from 'react'
import { useRecoilValue } from 'recoil';
import { socketAtom } from '../states';

const StopButton: FC = () => {

  const { handleOnClick } = useStopButton();

  return <Button variant='outlined' onClick={handleOnClick}>Stop</Button>
}

const useStopButton = () => {

  const socket = useRecoilValue(socketAtom);

  const handleOnClick = useCallback(() => {
    console.log('Disconnect');
    socket?.close();
  }, [socket])

  return {
    handleOnClick
  }
}


export default StopButton;