import './Home.css';
import Header from '../components/Header/Header';
import OurServices from '../components/Main/OurServices/OurServices';
import Paperz from '../components/Main/Paperz/Paperz'
import Features from '../components/Main/Features/Features';
import AboutCompany from '../components/Main/About-Company/AboutCompany';
import Why_Choose_Us from '../components/Main/Why_Choose_Us/Why_Choose_Us';
import Project_and_case from '../components/Main/Project_And_Case/Project_and_case';
import Meet_our_team from '../components/Main/Meet_Our_Team/Meet_our_team';
import Article_and_news from '../components/Main/Article_And_News/Article_and_news';
import Newsletter from '../components/Main/Newsletter/Newsletter';
import Footer_top from '../components/Footer/Footer_top';
import Footer_icons from '../components/Footer/Footer_icons/Footer_icons';

const Home = () => {
  return (
    <div className="wrapper">
    <Header />
    <main>
      <Paperz />
      <Features />
      <AboutCompany />
      <OurServices />
      <Why_Choose_Us />
      <Project_and_case />
      <Meet_our_team />
      <Article_and_news />
      <Newsletter />
      <Footer_top />
      <Footer_icons />
    </main >
  </div>
  )
}

export default Home