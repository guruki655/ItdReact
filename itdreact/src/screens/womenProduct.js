import '../App.css';
import Navbar from '../components/Navbar';
import ProductsSearch from './productSearch';

function WomenProducts() {
  return (<>
            <div className="container-fluid bg-white">
              <Navbar></Navbar>
            </div>
            <div className="container bg-white">
              <div className="row mt-5 pt-5">
                <ProductsSearch/>
              </div>
            </div>
          </>);
  }

export default WomenProducts;