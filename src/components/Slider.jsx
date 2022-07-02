// import { useState } from "react";
import { useData } from "../contexts/DataContext";

function Slider() {
  // const [imgNum, setImgNum] = useState(1);
  const { setIsLightboxOpen, productImgNum } = useData();

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

      <button className='slider__btn-prev btn'>
        <img src='src/icons/icon-previous.svg' alt='img' />
      </button>
      <button className='slider__btn-next btn'>
        <img src='src/icons/icon-next.svg' alt='img' />
      </button>
    </div>
  );
}

export default Slider;
