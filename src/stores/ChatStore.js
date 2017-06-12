import { action, observable } from 'mobx';
import WS from '../utils/ws';

export default class ChatStore {
  chat = new WS();

  @observable messages = [];
  @observable isConnected = false;

  onOpen = () => {
    this.isConnected = true;
  };

  onClose = () => {
    this.isConnected = false;
  };

  onMessage = (msg) => {
    this.messages.unshift({ text: msg, type: 'received' });
  };

  connect = () => {
    this.chat.open(this.onOpen, this.onClose, this.onMessage)
  };

  disconnect = () => {
    this.chat.close();
  };

  sendMsg = (msg) => {
    this.chat.send(msg);
    this.messages.unshift({ text: msg, type: 'sent' });
  };

}
