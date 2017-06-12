const WS_URI = "ws://echo.websocket.org/";

export default class WS {
  ws = null;

  open = (onOpen, onClose, onMessage) => {
    const ws = new WebSocket(WS_URI);

    ws.onopen = onOpen;
    ws.onmessage = (e) => onMessage(e.data);
    ws.onerror = (e) => console.log(e.data);
    ws.onclose = () => {
      onClose();
      this.ws = null;
    };

    this.ws = ws;
  }

  close = () => this.ws.close();

  send = (msg) => this.ws.send(msg);
}
