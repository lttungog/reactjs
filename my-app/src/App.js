import './App.css';
import React from 'react';
import {FaStar} from 'react-icons/fa';
// import PricingPage from "./component/PricingPage";
// import ItemsList from "./component/ItemList";
import Product from './component/Product';

// export default function Stars() {
//   const stars = Array.from({length: 5}, (_, index) => (
//       <FaStar key={index} color={index < 3 ? 'orange' : 'grey'}/>
//   ));

//   return (
//       <div>
//           <h1>Welcome to my App Tung</h1>
//           {stars}
//       </div>
//   );
// }

// export default function MyApp() {
//   return (
//     <div className='App'>
//       <h1>Welcome to my App from Tung</h1>
//       <FaStar color='red'/>
//       <FaStar color='red'/>
//       <FaStar color='red'/>
//       <FaStar color='green'/>
//       <FaStar color='yellow'/>
//     </div>
//   );
// }

export default function MyApp() {
  return (
    <div className="App">
      <Product/>
    </div>
  );
}