import React, { useState } from 'react';

const ShoppingCart = ({ item, price, original, stock,image , Details,cartQuantity,setCartQuantity}) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setCartQuantity (cartQuantity= cartQuantity+1)
    setInCart(true);
  };

  const handleRemoveFromCart = () => {
    setCartQuantity (cartQuantity = cartQuantity-1)
    setInCart(false);
  };

  return (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-5">
      <div className="card h-100">
        {stock ? (
          <div className="badge bg-dark text-white position-absolute top-0 end-0">Sale</div>
        ) : null}
        <img className="card-img-top" src={image} alt={item} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{item}</h5>
            {/* <div>{ratings ? '⭐⭐⭐⭐⭐' : null}</div> */}
            <span className="text-muted text-decoration-line-through">{original}</span> {price}
            <h5 className="fw-bolder">{stock}</h5>
            <p>{Details}</p>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {inCart ? (
              <button className="removeCart btn btn-outline-dark mt-auto" onClick={handleRemoveFromCart}>
                Remove From Cart
              </button>
            ) : (
              <button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

