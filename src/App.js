import './App.css';
import Header from './components/Header/Header';
import OurServices from './components/Main/Paperz/OurServices/OurServices';
import Paperz from './components/Main/Paperz/Paperz'


function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Paperz />
        <OurServices />
      </main >
    </div>
  );
}

export default App;
