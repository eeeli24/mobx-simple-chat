import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './styles.css';

@observer
class App extends Component {
  componentWillUnmount() {
    this.props.chat.disconnect();
  }

  handleConnect = () => this.props.chat.connect();

  handleDisconnect = () => this.props.chat.disconnect();

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSendMessage();
    }
  };

  handleSendMessage = () => {
    this.textArea.value && this.props.chat.sendMsg(this.textArea.value);
    this.clearTextArea();
  };

  clearTextArea = () => this.textArea.value = '';

  render() {
    const { chat } = this.props;

    if (!chat.isConnected) {
      return (
        <div className="chat">
          <div className="chat__button" onClick={this.handleConnect}>
            Connect
          </div>
        </div>
      );
    }

    const messages = chat.messages.map((msg, idx) => {
      return <div key={idx} className={`chat__msg-area__msg--${msg.type}`}>{msg.text}</div>
    });

    return (
      <div className="chat">
        <div className="chat__button" onClick={this.handleDisconnect}>
          Disconnect
        </div>
        <div className="chat__msg-area">
          {messages}
        </div>
        <textarea
          ref={(textArea) => this.textArea = textArea}
          className="chat__input"
          onKeyPress={this.handleKeyPress}
        />
        <div className="chat__button" onClick={this.handleSendMessage}>Send</div>
      </div>
    );
  }
};

export default App;
