import "../styles/The5500.css";

export default function The5500() {
  return (
    <section className="section">
      <div className="row">
        <div className="column">
          <h2>A Community Of 5, 500 Comrades.</h2>
          <p>
            We are a community of 5, 500 unique Comrades. 5, 000 Comrades will
            be released for public mint / adoption.
          </p>
          <p>
            The remaining 500 will be released immediately after the public mint
            and reserved for Angel Investors, Team members, Auctions, and
            Rewards.
          </p>
        </div>
        <div className="column">
          <a
            href="https://rarible.com/panthart"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">Become Our Angel Investor</button>
          </a>

          <p style={{ fontSize: "0.9rem", color: "#707070" }}>
            Buy one of the NFTs on our Rarible page for Angel Investors. Click
            the button above
          </p>
          <div className="imgDiv">
            <div className="img">
              <img
                src="/images/RotateComrade1.svg"
                alt="Comrade Arab"
                width={200}
                height={200}
              />
            </div>
            <div className="img">
              <img
                src="/images/RotateComrade2.svg"
                alt="Comrade Igbo"
                width={200}
                height={200}
              />
            </div>
            <div className="img">
              <img
                src="/images/RotateComrade3.svg"
                alt="Comrade Dreads"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
