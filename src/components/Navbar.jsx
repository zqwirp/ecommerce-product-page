function Navbar() {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar__left'>
          <img className='navbar__icon-menu' src='src/icons/icon-menu.svg' alt='menu' />
          <img src='src/icons/logo.svg' alt='logo' />
          <nav className='navbar__nav'>
            <a href='#'>Collections</a>
            <a href='#'>Men</a>
            <a href='#'>Women</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
          </nav>
        </div>

        <div className='navbar__right'>
          <img src='src/icons/icon-cart.svg' alt='cart' />
          <img
            className='navbar__avatar'
            src='src/images/image-avatar.png'
            alt='logo'
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
