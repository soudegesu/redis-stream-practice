import { Button } from '@mui/material';
import { FC, MouseEventHandler, useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { socketAtom } from '../states';
import { io } from 'socket.io-client';
import { API_ENDPOINT } from '../constants';

const StartButton: FC = () => {

  const { handleOnClick } = useStartButton();

  return (
    <Button variant='outlined' onClick={handleOnClick}>Start</Button>
  )
}

const useStartButton = () => {

  const [socket, setSocket] = useRecoilState(socketAtom);

  useEffect(() => {
    const newSocket = io(API_ENDPOINT, {
      autoConnect: false,
      reconnectionDelayMax: 10000,
      transports: ['websocket', 'polling'],
      closeOnBeforeunload: true,
    });

    newSocket.on('reconnect', (attempt) => {
      console.log('reconnect')
    });

    newSocket.on('reconnect_attempt', (attempt) => {
      console.log('reconnect_attempt')
    });

    newSocket.on('reconnect_error', (error) => {
      console.log('reconnect_error')
    });

    newSocket.on('reconnect_failed', () => {
      console.log('reconnect_failed')
    });

    newSocket.on('error', (error) => {
      console.log('error')
    });

    newSocket.on('ping', () => {
      console.log('ping')
    });

    newSocket?.on("connect", () => {
      console.log(`Socket id: ${newSocket?.id}`);
    });
    setSocket(newSocket);

    return () => {
      socket?.disconnect();
    }
  }, []);

  const handleOnClick: MouseEventHandler<Element> = useCallback((ev) => {
    try {
      socket?.on('chat message', (msg) => {
        console.log(msg);
      });

      socket?.connect();

    } catch (e) {
      console.error(e);
    }
  }, [socket]);

  return {
    handleOnClick
  }
}

export default StartButton;