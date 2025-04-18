import '../App.css';
import Navbar from '../components/Navbar';
import ProductsSection from '../components/productSection';
import Carousel from '../components/Slider';

function Home() {
  return (<>
            <div className="container-fluid bg-white mt-5 pt-3">
              <Navbar></Navbar>
                <div className="row">
                <Carousel/>
                </div>
            </div>
            <div className="container bg-white">
              <div className="row">
                <ProductsSection/>
              </div>
            </div>
          </>);
  }

export default Home;