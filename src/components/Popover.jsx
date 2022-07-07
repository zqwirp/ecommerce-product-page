import { useState } from "react";

function Popover() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(state => !state);
  };

  return (
    <>
      <button className='icon navbar__icon-cart' onClick={togglePopover}>
        <img src='src/icons/icon-cart.svg' alt='cart' />
      </button>

      {isPopoverOpen && (
        <div className='popover'>
          <div className='popover__header'>Cart</div>
          <div className='popover__body'>
            <div className='popover__item'>
              <div>Your cart is empty</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popover;
