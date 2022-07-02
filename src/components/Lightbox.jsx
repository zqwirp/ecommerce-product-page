function Lightbox() {
  return (
    <div className='lightbox'>
      <div className='lightbox__body'>
        <button className='lightbox__btn-close'>
          <img src='src/icons/icon-close.svg' alt='icon' />
        </button>

        <div className='lightbox__img-group'>
          <div className='lightbox__main'>
            <img
              className='lightbox__main-img'
              src='src/images/image-product-1.jpg'
              alt='image'
            />
          </div>
          <div className='lightbox__thumbnail'>
            {[1, 2, 3, 4].map((n, i) => (
              <img
                key={i}
                src={"src/images/image-product-" + n + ".jpg"}
                alt={n}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
