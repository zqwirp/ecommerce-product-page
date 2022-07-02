// import { useState } from "react";
import { useData } from "../contexts/DataContext";

function Slider() {
  // const [imgNum, setImgNum] = useState(1);
  const { setIsLightboxOpen, productImgNum, setProductImgNum } = useData();

  return (
    <div className='slider'>
      <img
        onClick={() => {
          if (window.innerWidth > 768) {
            setIsLightboxOpen(true);
            document.body.style.overflow = "hidden";
          }
        }}
        className='slider__img'
        src={`src/images/image-product-${productImgNum}.jpg `}
        alt='img'
      />

      <button
        onClick={() => {
          if (productImgNum > 1) {
            setProductImgNum(state => (state -= 1));
          } else {
            setProductImgNum(4);
          }
        }}
        className='slider__btn-prev btn'
      >
        <img src='src/icons/icon-previous.svg' alt='img' />
      </button>

      <button
        onClick={() => {
          if (productImgNum < 4) {
            setProductImgNum(state => (state += 1));
          } else {
            setProductImgNum(1);
          }
        }}
        className='slider__btn-next btn'
      >
        <img src='src/icons/icon-next.svg' alt='img' />
      </button>
    </div>
  );
}

export default Slider;
