function Main() {
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
          maxWidth: "600px",
        }}
      >
        <button
          style={{
            position: "absolute",
            left: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
          }}
        >
          <img src='src/icons/icon-previous.svg' alt='prev' height='14' />
        </button>

        <img src='src/images/image-product-1.jpg' alt='1' />

        <button
          style={{
            position: "absolute",
            right: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
          }}
        >
          <img src='src/icons/icon-next.svg' alt='prev' height='14' />
        </button>
      </div>
    </>
  );
}

export default Main;
