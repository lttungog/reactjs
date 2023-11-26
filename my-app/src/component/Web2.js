import React from "react";
import {FaStar} from 'react-icons/fa'

const Trinhbaysanpham = ({itemname, price, discount, pic, rating, sale})=>{

    const stars = Array.from({length:5}, (_,index)=>(
        <FaStar key={index} color={rating > index? '#ffc107' : '#e4e5e9'}/>
    ));
const discountedPrice = price - (price* discount)/100;
return (
    <div className="product">
        {sale && <div className="sale-lable">Sale</div>}
        <img src={pic} />
        <h6>{itemname}</h6>
        <div className="price-container">
            <p className="discounted-price">${discountedPrice.toFixed(2)}</p>
            {discount >0 && (<p className="original-price">${price.toFixed(2)}</p>)}
        </div>
        <div className="rating">{stars}</div>
    </div>
)
}
export default Trinhbaysanpham;