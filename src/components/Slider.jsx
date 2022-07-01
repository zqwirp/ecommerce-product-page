function Slider() {
  return (
    <div className='slider'>
      <img
        className='slider__img'
        src='src/images/image-product-1.jpg'
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
