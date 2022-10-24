import React, { useEffect, useState } from "react";
import "./Coin.css";

function Coin({ perc, setPerc, token }) {

    return (
        <>
            <div>
                <div className="token">
                    {token}
                </div>
                <div className="circle">
                    <div className="wave"

                    >
                    </div>
                    <div className="percentage">
                        {perc}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Coin;