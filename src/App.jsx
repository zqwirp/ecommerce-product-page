import Navbar from "./components/Navbar";
import ProductImages from "./components/ProductImages";

function App() {
  return (
    <div className='app'>
      <Navbar />

      <div className='container'>
        <div className='product-group'>
          <ProductImages />

          <div>Product Desc</div>
        </div>
      </div>
    </div>
  );
}

export default App;
