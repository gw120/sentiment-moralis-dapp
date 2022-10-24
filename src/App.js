import React, { useEffect, useState } from "react";
import "./App.css";

import { ConnectButton } from "web3uikit";
import logo from "./images/Moralis.png";
import Coin from "./components/Coin";

const App = () => {

    const [btc, setBtc] = useState(50);

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo" height={"50px"} />
                    Market Sentiment
                </div>
                <ConnectButton />
            </div>

            <div className="instructions">
                How are you feeling about these tokens? Up or it do go Down ?
            </div>

            <Coin
                perc={btc}
                setPerc={setBtc}
                token={"BTC"}
            />

        </>
    );
};
export default App;