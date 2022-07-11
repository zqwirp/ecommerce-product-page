import { useData } from "../contexts/DataContext";
import Popover from "./Popover";

function Navbar() {
  const { setIsOffcanvasOpen } = useData();

  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar__left-side'>
          <button
            className='icon navbar__icon-menu'
            onClick={() => {
              setIsOffcanvasOpen(true);
              document.body.style.overflow = "hidden";
            }}
          >
            <img src='/icons/icon-menu.svg' alt='menu' />
          </button>

          <a href='#'>
            <img src='/icons/logo.svg' alt='logo' />
          </a>

          <nav className='navbar__nav'>
            <a href='#'>Collections</a>
            <a href='#'>Men</a>
            <a href='#'>Women</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
          </nav>
        </div>

        <div className='navbar__right-side'>
          <Popover />

          <button className='navbar__avatar'>
            <img src='/images/image-avatar.png' alt='logo' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
