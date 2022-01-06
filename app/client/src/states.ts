import { atom } from 'recoil';
import { Socket } from 'socket.io-client';

export const socketAtom = atom<Socket | undefined>({
  key: 'socket',
  default: undefined,
  dangerouslyAllowMutability: true,
})

export const inputTextAtom = atom<string>({
  key: 'inputText',
  default: '',
});

type MessageId = string;
type ChatMessageBody = string | null | undefined;

export type ChatMessage = {
  id: MessageId,
  body: ChatMessageBody,
}

export const recieveMessagesAtom = atom<ChatMessage[]>({
  key: 'recieveMessages',
  default: [],
})