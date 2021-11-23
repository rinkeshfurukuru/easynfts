import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const getWeb3 = (provider_nos) =>
  new Promise(async (resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    var provider;

    //  Enable session (triggers QR Code modal)
    if (provider_nos === 1) {
      try {
        provider = new WalletConnectProvider({
          rpc: {
            3:"https://rinkeby.infura.io/v3/7c7fbb7115674ecda0f80e5fde2b2f97"
          },
          infuraId:"7c7fbb7115674ecda0f80e5fde2b2f97",
          networkId: 97,
          chainId: 97,
        });
        
        await provider.enable();
       
      } catch (e) {
      
      }
    } else if (provider_nos === 0) {
      debugger
      provider = window.ethereum;
    }

    // Modern dapp browsers...
    if (provider) {
      const web3j = new Web3(provider);
      try {
        // Request account access if needed
        if (provider_nos === 0) {
          await window.ethereum.enable();
        }

        // Acccounts now exposed
        resolve(web3j);
      } catch (error) {
        reject(error);
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // Use Mist/MetaMask's provider.
      const web3j = window.web3;
      
      resolve(web3j);
    }
    // Fallback to localhost; use dev console port by default...
    /*else {
      const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
      const web3j = new Web3(provider);
      
      resolve(web3j);
    }*/
  });

export default getWeb3;
