import React from "react";
import sanpham from "./Web1";
import Trinhbaysanpham from "./Web2";

const ListSanPham = ()=>{
    return (
        <div className="pricing-page">
            <div className="product-list">
                {sanpham.map((trinhbaysanpham,index)=>(
                    <Trinhbaysanpham key={index} {...trinhbaysanpham} />
                ))}
            </div>
        </div>
    )
}
export default ListSanPham;