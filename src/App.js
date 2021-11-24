import "./App.css";
import Fractionalize from "./Fractionalize";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopVaults from "./TopVaults";
import { Web3Context } from "./Context/Web3Context";
import getWeb3 from "./GetWeb3";
import { useEffect, useState } from "react";


function App() {
  const [web3, setWeb3] = useState(null);
  

  useEffect(() => {
    const getWeb3Instance = async () => {
      const provider = await getWeb3(0);
      
      const ethereum = window.ethereum;
      if (ethereum) {
        
        setWeb3({provider : provider,address:window.ethereum.selectedAddress});
        ethereum.on("accountsChanged", function (accounts) {
          setWeb3({provider : provider,address:accounts[0]});
        });
      }
    };
    
    getWeb3Instance();
  }, []);

  return (
    <>
      <Web3Context.Provider value={web3}>
        <Router>
          <Switch>
            <Route path="/fractionalize">
              <TopVaults />
            </Route>
            <Route path="/">
              <Fractionalize />
            </Route>
          </Switch>
        </Router>
      </Web3Context.Provider>
    </>
  );
}

export default App;
