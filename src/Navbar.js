
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi"
import React, { useState } from "react";
const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <nav className="main-div">
                <div className="logo">
                    <h2>Easy Nft</h2>
                </div>
                <div className={
                    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                }>
                    <ul>
                        <li>
                            <a href="/">Explore</a>
                        </li>
                        <li>
                            <a href="/">Vaults</a>
                        </li>
                        <li className="connectbtn">
                            <a href="/" className="connectbtntxt">Connect Wallet</a>
                        </li>
                    </ul>
                </div>
                <div className="social-media">
                    <div className="hamburger-menu">
                        <span onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu color="#fff" className="hamicon"/>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;