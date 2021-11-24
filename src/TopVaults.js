

import './App.css';
import './TopVaults.css';
function TopVaults() {
    return (
        <>
            <div className="topvaults">
                <div className="container">
                    <h2 className="vault-title">Top NFT vaults on fractional</h2>
                    <p className="vaults-desc">This information is intended to increase transparency regarding chain activity,
                    volume, and token availability of certain vault collector communities and is
                    not intended as financial advice. To learn more about a particular vault,
                    please visit the Collections page.
                    </p>
                    <div className="volume-div">
                        <div className="volume-child">
                            <p className="vol-key">Volume 24h:</p>
                            <p className="vol-value">52.3 M</p>
                        </div>
                        <div className="volume-child">
                            <p className="vol-key">Vaults market caps:</p>
                            <p className="vol-value">2.1 B</p>
                        </div>
                        <div className="volume-child">
                            <p className="vol-key">Unique fraction owners:</p>
                            <p className="vol-value">36657</p>
                        </div>
                    </div>
                    <div className="list-title">
                        <div className="top-btn top-active">
                            Top Vaults
                        </div>
                        <div className="top-btn">
                            Recently added
                        </div>
                    </div>
                    <div className="top-header">
                        <div className="top-title c1">
                            #
                        </div>
                        <div className="top-title c2">
                            VAULT
                        </div>
                        <div className="top-title c3">
                            VOLUME (24H)
                        </div>
                        <div className="top-title c4">
                            TRANSACTIONS
                        </div>
                        <div className="top-title c5">
                            IMP. VALUATION
                        </div>
                        <div className="top-title c6">
                            TVL (24H)
                        </div>
                    </div>
                    <div className="topvaults-list">
                        <div className="top-row">
                            <div className="row-val c1">
                                #1
                        </div>
                            <div className="row-val c2">
                                <p>The Doge NFT</p>
                                <p className="addrs">pleasrdao.eth</p>
                        </div>
                            <div className="row-val c3">
                                $50,689,593 <span className="val-up">↑10.92%</span>
                        </div>
                            <div className="row-val c4">
                                19338
                        </div>
                            <div className="row-val c5">
                                $605,169,645
                        </div>
                            <div className="row-val c6">
                                $43,208,521 <span className="val-up">↑42.25%</span>
                        </div>
                        </div>
                        <div className="top-row">
                            <div className="row-val c1">
                                #2
                        </div>
                            <div className="row-val c2">
                                <p>Honorary Bored Ape #1</p>
                                <p className="addrs">0xf459...F051</p>
                        </div>
                            <div className="row-val c3">
                                $50,689,593 <span className="val-down">↓10.92%</span>
                        </div>
                            <div className="row-val c4">
                                19338
                        </div>
                            <div className="row-val c5">
                                $605,169,645
                        </div>
                            <div className="row-val c6">
                                $43,208,521 <span className="val-down">↓42.25%</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopVaults;
