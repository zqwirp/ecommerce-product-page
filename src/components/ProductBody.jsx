function ProductBody() {
  return (
    <div className='product__body'>
      <div className='product__sub-title'>SNEAKER COMPANY</div>
      <div className='product__title'>Fall Limited Edition Sneakers</div>

      <p className='product__desc'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className='product-price-group'>
        <div className='product-price-discount-group'>
          <div className='product-price'>$125.00</div>
          <div className='discount'>50%</div>
        </div>
        <div className='price-w-discount'>$250.00</div>
      </div>

      <div className='product__btn-group'>
        <div className='product__btn-quantity-group'>
          <button>button</button>
          <div className='quantity'>5</div>
          <button>button</button>
        </div>
        <button>button</button>
      </div>
    </div>
  );
}

export default ProductBody;
