import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import Header from "./common/UI/Header";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
