import React, { useEffect } from 'react';
import './App.css';
import { init } from 'telegram-web-apps-sdk';

function App() {
  useEffect(() => {
    // Инициализация Telegram WebApp
    const tg = init();
    tg.ready();

    // Обработка события нажатия кнопки
    const handleSendData = () => {
      tg.sendData("Hello from React Mini App");
    };

    // Возвращаем функцию очистки
    return () => {
      tg.off();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Telegram Mini App</h1>
        <button onClick={handleSendData}>Send Data to Bot</button>
      </header>
    </div>
  );
}

export default App;
