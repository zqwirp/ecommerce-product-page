import { useData } from "../contexts/DataContext";

function Lightbox() {
  const { setIsLightboxOpen, productImgNum, setProductImgNum } = useData();

  return (
    <div className='lightbox'>
      <div className='lightbox__body'>
        <button
          onClick={() => {
            setIsLightboxOpen(false);
            document.body.style.overflow = "revert";
          }}
          className='lightbox__btn-close'
        >
          <img src='src/icons/icon-close.svg' alt='icon' />
        </button>

        <div className='lightbox__img-group'>
          <div className='lightbox__main'>
            <img
              className='lightbox__main-img'
              src={`src/images/image-product-${productImgNum}.jpg`}
              alt='image'
            />
          </div>

          <div className='lightbox__thumbnail'>
            {[1, 2, 3, 4].map((n, i) => (
              <div
                key={i}
                className={`lightbox__thumbnail-img ${
                  i === productImgNum - 1 && "active"
                }`}
                onClick={() => setProductImgNum(n)}
              >
                <img src={`src/images/image-product-${n}.jpg`} alt={n} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
