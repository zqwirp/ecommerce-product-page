import Slider from "./Slider";
import ProductThumbnail from "./ProductThumbnail";

function ProductImages() {
  return (
    <div className='product-image-group'>
      <Slider />

      <ProductThumbnail />
    </div>
  );
}

export default ProductImages;
