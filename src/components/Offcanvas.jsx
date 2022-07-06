import { useData } from "../contexts/DataContext";

function Offcanvas() {
  const { isOffcanvasOpen, setIsOffcanvasOpen } = useData();

  return (
    <div className='offcanvas-bg'>
      <div className={`offcanvas ${isOffcanvasOpen && "active"}`}>
        <button
          className='btn offcanvas__close-btn'
          onClick={() => {
            setIsOffcanvasOpen(false);
            document.body.style.overflow = "revert";
          }}
        >
          <img src='src/icons/icon-close.svg' />
        </button>

        <nav className='offcanvas__nav'>
          <a href='#'>Collections</a>
          <a href='#'>Men</a>
          <a href='#'>Women</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Offcanvas;
