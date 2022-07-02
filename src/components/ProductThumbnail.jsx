import { useData } from "../contexts/DataContext";

function ProductThumbnail() {
  const { productImgNum, setProductImgNum } = useData();

  return (
    <>
      <div className='product-thumbnail'>
        {[1, 2, 3, 4].map((n, i) => (
          <div
            key={i}
            className={`product-thumbnail__img ${
              i === productImgNum - 1 && "active"
            }`}
            onClick={() => setProductImgNum(n)}
          >
            <img src={`src/images/image-product-${n}.jpg`} alt={n} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductThumbnail;
