import { Button } from '@mui/material';
import { FC, useCallback } from 'react'
import { useRecoilValue } from 'recoil';
import { socketAtom } from '../states';

const DisconnectButton: FC = () => {

  const { handleOnClick } = useDisconnectButton();

  return <Button variant='outlined' onClick={handleOnClick}>Disconnect</Button>
}

const useDisconnectButton = () => {

  const socket = useRecoilValue(socketAtom);

  const handleOnClick = useCallback(() => {
    console.log('Disconnect');
    socket?.close();
  }, [socket])

  return {
    handleOnClick
  }
}


export default DisconnectButton;