// import React, { useState } from 'react';
// import './App.css';
// import foods from './foods.json';

// function App() {
//   const [category, setCategory] = useState('Fast Food'); // Default category to display

//   const handleCategoryChange = (newCategory) => {
//     setCategory(newCategory);
//   };

//   const renderFoodItems = (category) => {
//     // Get the food items for the selected category
//     const foodCategory = foods[category];

//     // If the category is nested (like Desserts), we need to handle it separately
//     if (category === "Desserts") {
//       return Object.keys(foodCategory).map((subCategory) => (
//         <div key={subCategory}>
//           <h3>{subCategory}</h3>
//           <div className="food-grid">
//             {foodCategory[subCategory].map((food) => (
//               <div className="food-item" key={food.id}>
//                 <img src={`/images/${food.image}`} alt={food.name} className="food-image" />
//                 <div className="food-info">
//                   <h3>{food.name}</h3>
//                   <p>₹ {food.price}</p>
//                   <button className="add-to-cart">Add to Cart</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ));
//     }

//     // For non-nested categories, render items directly
//     if (!foodCategory || !Array.isArray(foodCategory)) {
//       return <div>No items found for this category.</div>;
//     }

//     return (
//       <div className="food-grid">
//         {foodCategory.map((food) => (
//           <div className="food-item" key={food.id}>
//             <img src={`/images/${food.image}`} alt={food.name} className="food-image" />
//             <div className="food-info">
//               <h3>{food.name}</h3>
//               <p>₹ {food.price}</p>
//               <button className="add-to-cart">Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="App">
//       <div className="category-buttons">
//         <button onClick={() => handleCategoryChange('Fast Food')}>Fast Food</button>
//         <button onClick={() => handleCategoryChange('Chinese')}>Chinese</button>
//         <button onClick={() => handleCategoryChange('Desserts')}>Desserts</button>
//         <button onClick={() => handleCategoryChange('Juices')}>Juices</button>
//         <button onClick={() => handleCategoryChange('Grill')}>Grill</button>
//       </div>

//       <div className="food-container">
//         {renderFoodItems(category)}
//       </div>
//     </div>
//   );
// }

// export default App;








// import React, { useState } from 'react';
// import './App.css';
// import foods from './foods.json';

// function App() {
//   const [category, setCategory] = useState('Fast Food'); // Default category to display

//   const handleCategoryChange = (newCategory) => {
//     console.log('Category changed to:', newCategory);
//     setCategory(newCategory);
//   };

//   const renderFoodItems = (category) => {
//     console.log('Rendering items for category:', category); // Log the category
//     console.log('Full foods data:', foods); // Log the entire foods object

//     const foodCategory = foods[category]; // Get the food category based on the selected category
//     console.log('Food category items:', foodCategory); // Check if this returns the correct category

//     if (!foodCategory) {
//       console.error(`No data found for category: ${category}`);
//       return <div>Category not found: {category}</div>;
//     }

//     // If the category is an array (Fast Food, Chinese, Juices, etc.), render the items
//     if (Array.isArray(foodCategory)) {
//       return (
//         <div className="food-grid">
//           {foodCategory.map((food) => (
//             <div className="food-item" key={food.id}>
//               <img src={`/images/${food.image}`} alt={food.name} className="food-image" />
//               <div className="food-info">
//                 <h3>{food.name}</h3>
//                 <p>₹ {food.price}</p>
//                 <button className="add-to-cart">Add to Cart</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     }

//     // If the category is an object (like Desserts with nested subcategories), handle this
//     if (typeof foodCategory === 'object') {
//       return Object.keys(foodCategory).map((subCategory) => (
//         <div key={subCategory}>
//           <h3>{subCategory}</h3>
//           <div className="food-grid">
//             {foodCategory[subCategory].map((food) => (
//               <div className="food-item" key={food.id}>
//                 <img src={`/images/${food.image}`} alt={food.name} className="food-image" />
//                 <div className="food-info">
//                   <h3>{food.name}</h3>
//                   <p>₹ {food.price}</p>
//                   <button className="add-to-cart">Add to Cart</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ));
//     }

//     return <div>No items found for this category.</div>;
//   };

//   return (
//     <div className="App">
//       <div className="category-buttons">
//         <button onClick={() => handleCategoryChange('Fast Food')}>Fast Food</button>
//         <button onClick={() => handleCategoryChange('Chinese')}>Chinese</button>
//         <button onClick={() => handleCategoryChange('Desserts')}>Desserts</button>
//         <button onClick={() => handleCategoryChange('Juices')}>Juices</button>
//       </div>

//       <div className="food-container">
//         {renderFoodItems(category)}
//       </div>
//     </div>
//   );
// }

// export default App;





import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';

function App() {
  const [category, setCategory] = useState('Fast Food'); // Default category to display
  const [cart, setCart] = useState([]); // To store cart items

  // Function to handle category change
  const handleCategoryChange = (newCategory) => {
    console.log('Category changed to:', newCategory);
    setCategory(newCategory);
  };

  // Function to handle adding food to the cart
  const handleAddToCart = (food) => {
    setCart([...cart, food]);
  };

  // Function to calculate the total price in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, food) => total + food.price, 0);
  };

  // Function to render food items based on the selected category
  const renderFoodItems = (category) => {
    console.log('Rendering items for category:', category); // Log the category
    console.log('Full foods data:', foods); // Log the entire foods object

    const foodCategory = foods[category]; // Get the food category based on the selected category
    console.log('Food category items:', foodCategory); // Check if this returns the correct category

    if (!foodCategory) {
      console.error(`No data found for category: ${category}`);
      return <div>Category not found: {category}</div>;
    }

    // If the category is an array (Fast Food, Chinese, Juices, etc.), render the items
    if (Array.isArray(foodCategory)) {
      return (
        <div className="food-grid">
          {foodCategory.map((food) => (
            <div className="food-item" key={food.id}>
              <img src={`/images/${food.image}`} alt={food.name} className="food-image" />
              <div className="food-info">
                <h3>{food.name}</h3>
                <p>₹ {food.price}</p>
                <button 
                  className="add-to-cart" 
                  onClick={() => handleAddToCart(food)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }

    // If the category is an object (like Desserts with nested subcategories), handle this
    if (typeof foodCategory === 'object') {
      return Object.keys(foodCategory).map((subCategory) => (
        <div key={subCategory}>
          <h3>{subCategory}</h3>
          <div className="food-grid">
            {foodCategory[subCategory].map((food) => (
              <div className="food-item" key={food.id}>
                <img src={`/images/${food.image}`} alt={food.name} className="food-image" />
                <div className="food-info">
                  <h3>{food.name}</h3>
                  <p>₹ {food.price}</p>
                  <button 
                    className="add-to-cart" 
                    onClick={() => handleAddToCart(food)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ));
    }

    return <div>No items found for this category.</div>;
  };

  return (
    <div className="App">
      <div className="category-buttons">
        <button onClick={() => handleCategoryChange('Fast Food')}>Fast Food</button>
        <button onClick={() => handleCategoryChange('Chinese')}>Chinese</button>
        <button onClick={() => handleCategoryChange('Desserts')}>Desserts</button>
        <button onClick={() => handleCategoryChange('Juices')}>Juices</button>
      </div>

      <div className="food-container">
        {renderFoodItems(category)}
      </div>

      {/* Cart Summary */}
      <div className="cart-summary">
        <h3>Your Cart</h3>
        {cart.length > 0 ? (
          <div>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ₹ {item.price}
                </li>
              ))}
            </ul>
            <div className="total-price">
              <strong>Total: ₹ {calculateTotalPrice()}</strong>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default App;











