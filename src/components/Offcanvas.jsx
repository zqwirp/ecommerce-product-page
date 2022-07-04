function Offcanvas() {
  return (
    <div className='offcanvas-bg'>
      <div className='offcanvas'>
        <button className='btn offcanvas__close-btn'>
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
