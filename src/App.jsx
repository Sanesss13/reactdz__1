import './App.css';
import { Message } from "./message";

function App(props) {
  const text = "Служба поддержки"
  return (
    <div className="App">
      <header className="App-header">
        <Message text={text} />
      </header>
      <main className="App-main">
      </main>
      <footer className="App-footer">
        <p></p>
      </footer>

    </div>
  );
}



export default App;