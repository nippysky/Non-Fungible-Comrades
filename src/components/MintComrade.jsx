import "../styles/MintComrade.css";

export default function MintComrade() {
  return (
    <section className="mintSection">
      <div className="mintRow">
        <div className="mintColunm">
          <h2>Mint Your Comrade(s).</h2>
          <p>
            There will be two claim phases during the mint period. The first
            claim phase will run from the start of the mint date till September
            1st, which happens to be Panthart's Anniversary. From september 1st,
            2022, if the Comrades haven't been sold out, the price updates from
            0.04ETH to 0.06 ETH per comrade.
          </p>
          <p>
            It is a maximum mint of 3 comrades per wallet. The start price is
            0.04 ETH + transaction fees so make sure you have enough ETH to
            cover for gas fees. We would be updating you with gas fees prices
            daily during the mint period.
          </p>
        </div>
        <div className="iframeColumn">
          <h2>Put Iframe here</h2>
        </div>
      </div>
    </section>
  );
}