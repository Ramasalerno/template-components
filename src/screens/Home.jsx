
import 'bootstrap/dist/css/bootstrap.min.css';
import Barnav2 from '../components/Navbar/Navbar2';
import Slider from '../components/Slider/Slider';
import CardsGrid from '../components/CardsGrid/CardsGrid';
import Footer from '../components/Footer/Footer';
import AccordionComponent from '../components/Accordion/Accordion';
import PlaceholderComponent from '../components/Placeholder/Placeholder';

function Home() {
  return (
    <div className='Home'>
      <Barnav2 />
      {/* <Barnav /> */}
      <Slider />
      <CardsGrid />
      {/* <Follow /> */}
      <AccordionComponent />
      <PlaceholderComponent/>
      <Footer />
    </div>
  );
}

export default Home;
