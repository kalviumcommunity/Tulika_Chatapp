import Message from './Message';

function ChatBox({ messages, chatEndRef }) {
  return (
    <div className="chat-box">
      {messages.map((msg, i) => (
        <Message key={i} sender={msg.sender} text={msg.text} />
      ))}
      <div ref={chatEndRef}></div>
    </div>
  );
}

export default ChatBox;
