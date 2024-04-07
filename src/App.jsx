import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import ShoppingCart from "./Components/Shoppingcart";
import Footer from "./Components/Footer";

const App = () => {
  const [cartQuantity, setCartQuantity] = useState(0);

  const products = [
     {
      title: "HP Laptop",
      price: "$1400.00 - $1800.00",
      inStock: false,
      id: 1,
      options: false,
      ratings: false,
      image: "https://www.istockphoto.com/photo/laptop-computer-mockup-home-work-desk-with-coffee-mug-beside-plant-in-background-gm1226078989-361124820" // Add image URL
    },
    {
      id: 2,
      title: "Samsung Galaxy Buds 2",
      price: " $180.00",
      original_usd: "$200.00 ",
      inStock: true,
      options: true,
      ratings: true,
      image: "/https://www.istockphoto.com/photo/samsung-galaxy-buds-2-gm1356020750-430314706?phrase=samsung+phone" // Add image URL
    },
    {
      id: 3,
      title: "Blender",
      price: " $250.00",
      original_usd: "$500.00",
      inStock: true,
      options: true,
      ratings: false,
      image: "https://www.istockphoto.com/photo/young-female-pressing-start-button-of-blender-while-cooking-gm1351621979-427304198?phrase=blender"
    },
    {
      id: 4,
      title: "Lipstick",
      ratings: true,
      price: "$ 10.00",
      inStock: false,
      options: true,
      image:"https://www.istockphoto.com/photo/air-kiss-for-you-close-up-cropped-shot-of-femenine-gorgeous-charming-adorable-lady-gm925960984-254088656?phrase=lipstick"
    },
    {
      id: 5,
      title: "Watch",
      price: " $50.00",
      original_usd: "$50.00",
      inStock: true,
      options: true,
      ratings: false,
      image:"https://www.istockphoto.com/photo/young-fashionable-business-woman-looking-at-watch-waiting-for-someone-with-a-mobile-gm1042936642-279196403?phrase=girls+wristwatch"
    },
    {
      id: 6,
      title: "Hand bag",
      price: "$120.00 - $280.00",
      inStock: false,
      options: false,
      ratings: false,
      image:"https://www.istockphoto.com/photo/handbag-stock-photo-gm841723052-137319313?phrase=Branded%2Bhandbags"
    },
    // Add more products as needed
  ];
 const[product,setproduct]= useState(products)

  return (
    <div>
      <Navbar cartQuantity={cartQuantity} />
      <Header />
      <div className="container">
        <div className="row">
          {product.map((product) => (
            // <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-5" key={product.id}>
            //   <div className="card h-100">
            //     <img className="card-img-top" src={product.image} alt={product.name} />
            //     <div className="card-body p-4">
            //       <div className="text-center">
            //         <h5 className="fw-bolder">{product.name}</h5>
            //         <p>{product.description}</p>
            //         <span>{product.price}</span>
            //       </div>
            //     </div>
            //     <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            //       <div className="text-center">
            //         <button className="btn btn-outline-dark mt-auto" onClick={addToCart}>
            //           Add To Cart
            //         </button>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            <ShoppingCart item={product.title}
              price={product.price}
              inStock={product.inStock}
              options={product.options}
              image={product.image}
              cartQuantity={cartQuantity}
              setCartQuantity={setCartQuantity} />
          ))}
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default App;
