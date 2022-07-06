import { useData } from "./contexts/DataContext";
import Navbar from "./components/Navbar";
import ProductImages from "./components/ProductImages";
import ProductBody from "./components/ProductBody";
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

          <ProductBody />
        </div>

        <footer style={{ textAlign: "center", lineHeight: "50px" }}>
          Footer
        </footer>
      </div>

      {isLightboxOpen && <Lightbox />}
      {isOffcanvasOpen && <Offcanvas />}
    </div>
  );
}

export default App;
