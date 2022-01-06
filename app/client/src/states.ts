import { atom } from 'recoil';
import { Socket } from 'socket.io-client';

export const socketAtom = atom<Socket | undefined>({
  key: 'socket',
  default: undefined,
  dangerouslyAllowMutability: true,
})
