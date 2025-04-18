import '../App.css';
import ProductsSection from '../components/productSection';
import Navbar from '../components/Navbar'

function KidsProducts() {
  return (<>
    <div className="container bg-white">
            <Navbar/>
      
    <div className="row mt-5 pt-5">
        <ProductsSection/>
      </div>
    </div>
    </>
  );
}

export default KidsProducts;
