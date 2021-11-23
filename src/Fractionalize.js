import { useState, useEffect, useContext } from 'react';
import './App.css';
import './Fractionalize.css';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Navbar from './Navbar'
import ABI from "../src/ABI/fraction.json"
import { Web3Context } from './Context/Web3Context';
function valuetext(value) {
    return `${value}°C`;
}
function Fractionalize() {
    const [protocol20, setProtocol20] = useState(true)
    const [address, setAddress] = useState(null);
    const [assetList, setAssetList] = useState();
    const web3 = useContext(Web3Context);
    
    async function fetchMyAPI() {
        const response = await fetch("https://rinkeby-api.opensea.io/api/v1/assets?owner="+web3?.address);
        const data = await response.json();
        setAssetList(data)
    }
    useEffect(()=>{
        fetchMyAPI()
        console.log(web3);
    },[web3])
    useEffect(()=>{
         if(assetList){
             console.log(assetList.assets[0])
         }
     },[assetList])
    return (
        <>
            <div className="fractionalize">
                <Navbar />
                <div className="banner">
                    <div className="fra-left">
                        {
                            (address != null) ?
                               <p>hello</p>
                            :
                            <div className="card-container">
                               {assetList && assetList.assets.map((item) => {
                                  return (
                                    <div className="asset-card">
                                      <img src={item.image_url} alt="asset" className="card-img" />
                                      <p className="card-name">{item.name}</p>
                                      <p className="card-desc">{item.description}</p>
                                    </div> 
                                );
                               })}
                            </div>
                        }
                    </div>
                    <div className="fra-right">
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
