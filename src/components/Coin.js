import React, { useEffect, useState } from "react";
import "./Coin.css";
import { Button } from "web3uikit";

import LOGO_BTC from "../images/btc.png"
import LOGO_ETH from "../images/eth.png"
import LOGO_EWT from "../images/ewt.png"

function Coin({ perc, setPerc, token, setModalToken, setVisible }) {
    const [color, setColor] = useState();
    const [logoSymbol, setLogoSymbol] = useState()

    useEffect(() => {
        if (perc < 50) {
            setColor("#c43d08");
        } else {
            setColor("green");
        }
    }, [perc]);

    useEffect(() => {
        if (token === "BTC") {
            setLogoSymbol(LOGO_BTC);
        }
        if (token === "ETH") {
            setLogoSymbol(LOGO_ETH);
        }
        if (token === "EWT") {
            setLogoSymbol(LOGO_EWT);
        }
    }, []);

    return (
        <>
            <div>
                <div className="token">
                    {token}
                </div>
                <div className="circle" style={{ boxShadow: `0 0 20px ${color}` }}>
                    <div className="symbol">
                        <img src={logoSymbol} alt="symbol_logo" />
                    </div>
                    <div className="wave"
                        style={{
                            marginTop: `${100 - perc}%`,
                            boxShadow: `0 0 20px ${color}`,
                            backgroundColor: color,
                        }}
                    >
                    </div>
                    <div className="percentage">
                        {perc}%
                    </div>
                </div>

                <div className="votes">
                    <Button
                        onClick={() => {
                         setPerc(perc + 1)
                        }}
                        text="Up"
                        theme="primary"
                        type="button"
                    />

                    <Button
                        color="red"
                        onClick={() => {
                        setPerc(perc + 1)
                        }}
                        text="Down"
                        theme="colored"
                        type="button"
                    />
                </div>

                <div className="votes">
                    <Button
                        onClick={() => {
                            setModalToken(token)
                            setVisible(true);
                        }}
                        text="INFO"
                        theme="translucent"
                        type="button"
                    />
                </div>
            </div>
        </>
    );
}
export default Coin;