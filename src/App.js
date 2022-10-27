import React, { useEffect, useState } from "react";
import "./App.css";
import { ConnectButton, Modal } from "web3uikit";
import logo from "./images/Moralis.png";
import Coin from "./components/Coin";

const App = () => {

    const [btc, setBtc] = useState(20);
    const [eth, setEth] = useState(68);
    const [ewt, setEwt] = useState(49);

    const [modalToken, setModalToken] = useState();
    const [visible, setVisible] = useState(false);

    const [btc, setBtc] = useState(20);

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
            <div className="list">
                <Coin perc={btc} setPerc={setBtc} token={"BTC"}
                    setModalToken={setModalToken}
                    setVisible={setVisible} />
                <Coin perc={eth} setPerc={setEth} token={"ETH"}
                    setModalToken={setModalToken}
                    setVisible={setVisible} />
                <Coin perc={ewt} setPerc={setEwt} token={"EWT"}
                    setModalToken={setModalToken}
                    setVisible={setVisible} />
            </div>

            <Modal
                isVisible={visible}
                onCloseButtonPressed={() => setVisible(false)}
                hasFooter={false}
                title={modalToken}
            >
                <div>
                    <span style={{ color: "white" }}>{`Price: `}</span>
                    {11}$
                </div>


                <div>
                    <span style={{ color: "white" }}>{`About`}</span>
                </div>
                <div>
                    {/* {modalToken &&
            abouts[abouts.findIndex((x) => x.token === modalToken)].about} */}
                </div>

            </Modal>

        </>
    );
};
export default App;