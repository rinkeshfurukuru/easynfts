import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi"
import React, { useContext } from "react";
import { useState, useEffect } from 'react';
import CopyToClipboard from "react-copy-to-clipboard";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { Web3Context } from './Context/Web3Context';

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [copied, setCopied] = React.useState(false);
    const web3 = useContext(Web3Context);
  
    
    const copyAddress = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };
    const truncate = (str, n) => {
        return (
            str.substr(0, n + 1) + "..."
        );
      };
   
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
                            <a href="/" className="connectbtntxt">
                            <h4 className="connectaddr">
                                {web3?.address ? truncate(web3?.address, 5) : "Connect Wallet"}
                                {web3?.address ?
                                <>
                                    <CopyToClipboard
                                    text={web3?.address ? web3?.address : ""}
                                    onCopy={copyAddress}
                                    >
                                    <FileCopyOutlinedIcon
                                        style={{ cursor: "pointer"}}
                                    />
                                    </CopyToClipboard>
                                    {copied ? " Copied!" : ""}
                                </> : ""
                                }
                            </h4>
                            </a>
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