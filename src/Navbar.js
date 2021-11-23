import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi"
import React from "react";
import { useState, useEffect } from 'react';
import CopyToClipboard from "react-copy-to-clipboard";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import getWeb3 from "./GetWeb3";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [copied, setCopied] = React.useState(false);
    const [web3, setWeb3] = useState(null);
    const [address, setAddress] = useState();
    
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
    useEffect(() => {
        const getWeb3Instance = async () => {
            const provider = await getWeb3(0);
            setWeb3(provider);
            const ethereum = window.ethereum
            if (ethereum) {
                setAddress(window.ethereum.selectedAddress)
                // sendDataToParent(props.address);
                ethereum.on('accountsChanged', function (accounts) {
                    setAddress(accounts[0])
                })
            }   
        }
        const ethereum = window.ethereum
        if (ethereum) {
            setAddress(window.ethereum.selectedAddress)
            // sendDataToParent(props.address);
            ethereum.on('accountsChanged', function (accounts) {
                setAddress(accounts[0])
            })
        }    
        getWeb3Instance();
    }, []);
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
                                {address ? truncate(address, 5) : "Connect Wallet"}
                                {address ?
                                <>
                                    <CopyToClipboard
                                    text={address ? address : ""}
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