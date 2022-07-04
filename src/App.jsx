import { useData } from "./contexts/DataContext";
import Navbar from "./components/Navbar";
import ProductImages from "./components/ProductImages";
import Lightbox from "./components/Lightbox";
import Offcanvas from "./components/Offcanvas";

function App() {
  const { isLightboxOpen, isOffcanvasOpen } = useData();

  return (
    <div className='app'>
      <Navbar />

      <div className='container'>
        <div className='product-group'>
          <ProductImages />

          <div>Product Desc</div>
        </div>
      </div>

      {isLightboxOpen && <Lightbox />}
      {isOffcanvasOpen && <Offcanvas />}
    </div>
  );
}

export default App;
