/* eslint-disable jsx-a11y/iframe-has-title */
import "../styles/MintComrade.css";
import React, { useState, useRef, useEffect } from "react";

export default function MintComrade() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("September 1, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <section className="mintSection">
      <section className="mintRow">
        <div className="mintColumn">
          <h2>Mint Your Comrade(s).</h2>
          <p>
            Mint Day is on the day of our Anniversary. 1st September, 2022.
            Comrades, there is only one claim phase in a lifetime. The mint
            price per Comrade is 0.05ETH. make sure you have enough ETH to cover
            for gas fees. We would be updating you with gas fees prices daily
            during the mint period.
          </p>
        </div>

        <div className="mintColumn">
          <h2>Countdown To Mint Day.</h2>
          <div className="countDownTimerRow">
            <div className="countDownTimerColumn">
              <h2>{timerDays}</h2>
              <span
                style={{
                  fontsize: "1rem",
                  fontWeight: "500",
                  color: "#ED2B4B",
                }}
              >
                Days
              </span>
            </div>
            <div className="countDownTimerColumn">
              <h2>{timerHours}</h2>
              <span
                style={{
                  fontsize: "1rem",
                  fontWeight: "500",
                  color: "#ED2B4B",
                }}
              >
                Hours
              </span>
            </div>
            <div className="countDownTimerColumn">
              <h2>{timerMinutes}</h2>
              <span
                style={{
                  fontsize: "1rem",
                  fontWeight: "500",
                  color: "#ED2B4B",
                }}
              >
                Minutes
              </span>
            </div>
            <div className="countDownTimerColumn">
              <h2>{timerSeconds}</h2>
              <span
                style={{
                  fontsize: "1rem",
                  fontWeight: "500",
                  color: "#ED2B4B",
                }}
              >
                Seconds
              </span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ margin: "5rem 0 0 0" }}>
        <iframe
          src="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/nft-drop.html?contract=0x5fD120E8F0121ed1BA5824B813340245164fDdd0&chainId=1&theme=dark&primaryColor=green&secondaryColor=red"
          width="600px"
          height="600px"
          style={{ width: "100%" }}
          frameBorder="0"
        ></iframe>
      </section>
    </section>
  );
}
