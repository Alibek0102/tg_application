import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import Header from "./common/UI/Header";
import Categories from "./Categories/Categories";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close()
  }

  return (
    <div>
      <Header/>
      <Categories/>
    </div>
  );
}

export default App;
