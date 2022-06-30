import { useState } from "react";

function OffCanvas() {
  const [isShow, setIsShow] = useState(false);

  function handleClick(boolean) {
    if (boolean) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    setIsShow(boolean);
  }

  return (
    <>
      <div className={`offcanvas ${isShow && "show"}`}>
        <button onClick={() => handleClick(false)}>Off Canvas</button>
      </div>
      <button onClick={() => handleClick(true)}>Off Canvas</button>
    </>
  );
}

export default OffCanvas;
