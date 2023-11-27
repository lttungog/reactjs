import React from "react";
import "../css/webHeader.css";

function WebHeader1() {
    return (
    <div class = "container">
        <div class = "flex-container-header">
                <div class = "header-wrap-logo">
                    <a href="https://degrey.vn">
                        <img src="https://file.hstatic.net/1000281824/file/tote-1_33445b051a404bb790b6d0df0275ac8d.png" alt="DEGREY VIETNAM" class = "img-responsive"/>
                    </a>
                </div>

            <div class = "header-wrap-main">
                <ul class = "menu-main-lv1">
                    <li>
                        <a href="/">Trang chủ</a>
                    </li>
                    <li>
                        <a href="/">Sản phẩm</a>
                    </li>
                    <li>
                        <a href="/">Stores</a>
                    </li>
                    <li>
                        <a href="/">Giới thiệu</a>
                    </li>
                </ul>
            </div>

            <div class = "container-small">
                <img src="https://file.hstatic.net/1000281824/file/cover_1_87a6ac90b1c94059a093003239175873.jpg" alt="banner"/>
            </div>
        </div>
    </div>
    )
}

export default WebHeader1;
