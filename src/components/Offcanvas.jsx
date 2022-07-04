function Offcanvas() {
  return (
    <div className='offcanvas-bg'>
      <div className='offcanvas'>
        <button>
          <img src='src/icons/icon-close.svg' />
        </button>

        <nav className='offcanvas__nav'>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
        </nav>
      </div>
    </div>
  );
}

export default Offcanvas;
