import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const fetchMessages = async () => {
    const res = await fetch('http://femers.ddns.net:5000/api/messages');
    const data = await res.json();
    setMessages(data);
  };

  const sendMessage = async () => {
    await fetch('http://femers.ddns.net:5000/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: input })
    });
    setInput('');
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Mensajes</h1>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg.content}</li>
        ))}
      </ul>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
}

export default App;

// Renderizar el componente App en el DOM
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
