import './App.css';
import Header from './components/Header/Header';
import Paperz from './components/Paperz/Paperz'


function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Paperz />
      </main >
    </div>
  );
}

export default App;
