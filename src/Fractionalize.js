
import { useState } from 'react';
import './App.css';
import './Fractionalize.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Navbar from './Navbar'
function valuetext(value) {
    return `${value}°C`;
}
function Fractionalize() {
    const [protocol20, setProtocol20] = useState(true)
    return (
        <>
            <div className="fractionalize">
                <Navbar/>
                <div className="banner">
                    <div className="fra-left">
                        <h1 className="left-title">
                            Select NFTs to Fractionalize
                    </h1>
                        <p className="left-details">
                            Choose the NFT(s) to send to a new vault, select your desired fraction type,
                            set your vault’s details, then continue to fractionalize. Once complete,
                            all fractions will appear in your wallet. Be aware, you cannot add to the
                            NFTs in a vault once created. Read our guides for more information.
                    </p>
                        <h3 className="connect-text">
                            Please click <span style={{ color: "#D4FF72", textDecoration: "underline" }}>here</span> and connect your wallet.
                    </h3>
                    </div>
                    <div className="fra-right">
                        {/* <div className="right-toggler">
                        <div className={protocol20 ? "toggle-btn current-btn" : "toggle-btn"} onClick={() => setProtocol20(true)}>
                            ERC - 20
                    </div>
                        <div className={protocol20 ? "toggle-btn " : "toggle-btn current-btn"} onClick={() => setProtocol20(false)}>
                            ERC - 1155
                    </div>
                    </div> */}
                        <div className="vault-details">
                            <p className="vaultdetail">Vault details</p>
                            <p className="input-lable">Name</p>
                            <input type="text" className="input-text" placeholder="Easy NFTs" />
                            <div className="supply-symbol">
                                <div className="supply-div">
                                    <p className="input-lable">SUPPLY</p>
                                    <input type="text" className="input-text1" placeholder="10000" />
                                </div>
                                <div className="symbol-div">
                                    <p className="input-lable">SYMBOL</p>
                                    <input type="text" className="input-text1" placeholder="CPF" />
                                </div>
                            </div>
                            <p className="input-lable">RESERVE PRICE</p>
                            <input type="text" className="input-text" placeholder="0.0" />
                            <p className="input-lable">ANNUAL MANAGEMENT FEE</p>
                            <Box sx={{ width: 380 }}>
                                {/* <Slider
                                aria-label="Temperature"
                                defaultValue={30}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={110}
                            /> */}
                                <Slider defaultValue={30} step={10} marks min={10} max={110} sx={{ color: "#F4FFDD" }} />
                            </Box>
                            <div className="perc-label">
                                <p>0%</p>
                                <p>10%</p>
                            </div>
                            <button className="continue-btn">Continue</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Fractionalize;
