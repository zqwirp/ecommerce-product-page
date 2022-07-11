import { useData } from "../contexts/DataContext";
import productData from "../data.json";

function ProductBody() {
  const { quantity, setQuantity, setCartItems } = useData();

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
          <button
            onClick={() =>
              setQuantity(state => {
                if (state < 1) return 0;
                return state - 1;
              })
            }
          >
            <img src='src/icons/icon-minus.svg' />
          </button>
          <div className='quantity'>{quantity}</div>
          <button
            onClick={() =>
              setQuantity(state => {
                if (state >= 9) return state;
                return state + 1;
              })
            }
          >
            <img src='src/icons/icon-plus.svg' />
          </button>
        </div>

        <button
          onClick={() => {
            if (quantity > 0) {
              const item = {
                name: productData.name,
                price: productData.price,
                quantity,
              };
              setCartItems([item]);
              setQuantity(0);
              const itemStringified = JSON.stringify(item);
              localStorage.setItem(
                "ECOMMERCE_PRODUCT_PAGE_FRONTENDMENTOR",
                itemStringified
              );
            }
          }}
          className='product__btn-add'
        >
          <img
            src='src/icons/icon-cart.svg'
            style={{ display: "inline-block" }}
          />
          <div>Add to Cart</div>
        </button>
      </div>
    </div>
  );
}

export default ProductBody;
