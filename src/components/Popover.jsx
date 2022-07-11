import { useState } from "react";
import productData from "../data.json";
import { useData } from "../contexts/DataContext";
import { formatCurrency } from "../formatCurrency";

function Popover() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { quantity, cartItems, setCartItems } = useData();

  const togglePopover = () => {
    setIsPopoverOpen(state => !state);
  };

  return (
    <>
      <button
        className={`icon navbar__icon-cart ${isPopoverOpen && "active"}`}
        onClick={togglePopover}
      >
        <img src='/icons/icon-cart.svg' alt='cart' />
        {cartItems.length !== 0 && (
          <div
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              // height: "20px",
              width: "20px",
              color: "white",
              fontSize: "10px",
              borderRadius: "8px",
              backgroundColor: "orange",
            }}
          >
            {cartItems[0].quantity}
          </div>
        )}
      </button>

      {isPopoverOpen && (
        <div className='popover'>
          <div className='popover__header'>Cart</div>

          <div className='popover__body'>
            {cartItems.length !== 0 ? (
              <div className='popover__item'>
                {cartItems.map((item, index) => (
                  <div className='content' key={index}>
                    <img
                      className='content__img'
                      src='/images/image-product-1-thumbnail.jpg'
                    />
                    <div className='content__name'>{item.name}</div>
                    <div className='content__price'>
                      {formatCurrency(item.price)} &times; {item.quantity}{" "}
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        localStorage.removeItem(
                          "ECOMMERCE_PRODUCT_PAGE_FRONTENDMENTOR"
                        );
                        setCartItems([]);
                      }}
                      className='btn content__btn'
                    >
                      <img src='/icons/icon-delete.svg' />
                    </button>
                  </div>
                ))}

                <button className='btn-checkout'>Checkout</button>
              </div>
            ) : (
              <div
                style={{
                  height: "120px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "grey",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                Empty
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Popover;
