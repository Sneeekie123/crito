import './Home.css';
import Header from '../components/Header/Header';
import OurServices from '../components/Main/OurServices/OurServices';
import Paperz from '../components/Main/Paperz/Paperz'

const Home = () => {
  return (
    <div className="wrapper">
    <Header />
    <main>
      <Paperz />
      <OurServices />
    </main >
  </div>
  )
}

export default Home