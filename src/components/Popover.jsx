import { useState } from "react";
import productData from "../data.json";
import { useData } from "../contexts/DataContext";

function Popover() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [checkOutItem, setCheckOutItem] = useState([]);

  const { quantity, cartItems } = useData();

  const togglePopover = () => {
    setIsPopoverOpen(state => !state);
  };

  return (
    <>
      <button
        className={`icon navbar__icon-cart${isPopoverOpen && " active"}`}
        onClick={togglePopover}
      >
        <img src='src/icons/icon-cart.svg' alt='cart' />
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
                      src='src/images/image-product-1-thumbnail.jpg'
                    />
                    <div className='content__name'>{item.name}</div>
                    <div className='content__price'>
                      {item.price} &times; {item.quantity}{" "}
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        {item.price * item.quantity}
                      </span>
                    </div>
                    <div className='icon content__btn'>
                      <img src='src/icons/icon-delete.svg' />
                    </div>
                  </div>
                ))}
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
