import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className='app'>
      <Navbar />

      <div className="container">
        <div className='product-wrapper'>
          <Slider />
        
          <div>Product Desc</div>
        </div>
      </div>
    </div>
  );
}

export default App;
