import { useState, useEffect, useContext } from "react";
import "./App.css";
import "./Fractionalize.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import Navbar from "./Navbar";
import ABI from "../src/ABI/fraction.json";
import { Web3Context } from "./Context/Web3Context";
import { fractionalize, Ierc721 } from "./ABI/const";

function Fractionalize() {
  const [assetList, setAssetList] = useState();
  const [selectNFTDetails, setSelectedNFTDetails] = useState({
    name: undefined,
    supply: undefined,
    symbol: undefined,
    reserve_price: undefined,
    address: undefined,
    token_id: undefined,
  });
  const web3 = useContext(Web3Context);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(
        "https://rinkeby-api.opensea.io/api/v1/assets?owner=" + web3?.address
      );
      const data = await response.json();
      setAssetList(data);
    }
    if (typeof web3?.address !== "undefined") {
      fetchMyAPI();
    }
  }, [web3]);

  const activeMenu = (index, item) => {
    console.log(item); //this is the selected asset that needs to be fractionalize
    debugger;
    setSelectedNFTDetails((prevState) => ({
      ...prevState,
      address: item.asset_contract.address,
      token_id: item.token_id,
    }));

    let cardcontainer = document.getElementById("cardcontainer");
    let len = cardcontainer.childNodes.length;
    let assetcards = cardcontainer.childNodes;

    for (let i = 0; i < len; i++) {
      assetcards[i].classList.remove("active");
    }
    assetcards[index].classList.add("active");
  };

  const ListSelectedNft = () => {
    debugger;
    const contract = new web3.provider.eth.Contract(ABI.abi, fractionalize);
    contract.methods
      .listNFT(
        selectNFTDetails.address,
        selectNFTDetails.token_id,
        web3.provider.utils.toWei( selectNFTDetails.supply, "ether"),
        web3.provider.utils.toWei(selectNFTDetails.reserve_price, "ether"),
        selectNFTDetails.name,
        selectNFTDetails.symbol
      )
      .send({ from: web3.address })
      .on("transactionHash", (hash) => {
        console.log(hash);
      }).on("receipt",(res)=>{
          console.log(res.events.NFTListed.returnValues.ListingAddress);
          //TODO :: Next step for listed NFT
      });
  };

  const approveNft = () => {
    const contract = new web3.provider.eth.Contract(
      Ierc721,
      selectNFTDetails.address
    );
    contract.methods
      .approve(fractionalize, selectNFTDetails.token_id)
      .send({ from: web3.address })
      .on("receipt", (tx) => {
        console.log(tx);
        ListSelectedNft();
      });
  };

  return (
    <>
      <div className="fractionalize">
        <Navbar />
        <div className="banner">
          <div className="fra-left">
            <div className="card-container" id="cardcontainer">
              {assetList &&
                assetList?.assets?.map((item, id) => {
                  return (
                    <div
                      key={id}
                      className="asset-card"
                      id="assetcards"
                      onClick={() => activeMenu(id, item)}
                    >
                      <img
                        src={item.image_url}
                        alt="asset"
                        className="card-img"
                      />
                      <p className="card-name">{item.name}</p>
                      <p className="card-desc">{item.description}</p>
                      <div className="selected-asset" id="selected-asset">
                        <CheckBoxIcon
                          className="selected-checkbox"
                          fontSize="large"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="fra-right">
            <div className="vault-details">
              <p className="vaultdetail">Vault details</p>
              <p className="input-lable">Name</p>
              <input
                type="text"
                className="input-text"
                placeholder="Easy NFTs"
                onChange={(e) => {
                  console.log(e.target.value);
                  setSelectedNFTDetails((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }));
                }}
              />
              <div className="supply-symbol">
                <div className="supply-div">
                  <p className="input-lable">SUPPLY</p>
                  <input
                    type="text"
                    className="input-text1"
                    placeholder="10000"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setSelectedNFTDetails((prevState) => ({
                        ...prevState,
                        supply: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="symbol-div">
                  <p className="input-lable">SYMBOL</p>
                  <input
                    type="text"
                    className="input-text1"
                    placeholder="CPF"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setSelectedNFTDetails((prevState) => ({
                        ...prevState,
                        symbol: e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
              <p className="input-lable">RESERVE PRICE</p>
              <input
                type="text"
                className="input-text"
                placeholder="0.0"
                onChange={(e) => {
                  console.log(e.target.value);
                  setSelectedNFTDetails((prevState) => ({
                    ...prevState,
                    reserve_price: e.target.value,
                  }));
                }}
              />
              {/* <p className="input-lable">ANNUAL MANAGEMENT FEE</p>
                            <Box sx={{ width: 380 }}>
                                <Slider defaultValue={30} step={10} marks min={10} max={110} sx={{ color: "#F4FFDD" }} />
                            </Box>
                            <div className="perc-label">
                                <p>0%</p>
                                <p>10%</p>
                            </div> */}
              <button className="continue-btn" onClick={approveNft}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fractionalize;
