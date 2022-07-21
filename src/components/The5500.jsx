import "../styles/The5500.css";

export default function The5500() {
  return (
    <section className="section">
      <div className="row">
        <div className="column1">
          <h2>A Community Of 5, 500 Comrades.</h2>
          <p>
            We are a community of 5, 500 unique Comrades. 5000 of 5500 Comrades
            will be released for public mint.
          </p>
          <p>
            The remaining 500 of 5500 will be released after 50% of selling out
            the 5000 of 500. The 500 of 5500 is for Angel Investors and Team
            Members. 30 Comrades will be reserved for the Panthart Team while
            the rest will be auctioned out as Angel Investment to Panthart,
            starting with a price of 0.385ETH per Senior Comrade.
          </p>
        </div>
        <div className="column2">
          <a
            href="https://panthart.com/angelinvestors"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">About Our Angel Investor</button>
          </a>

          <p style={{ fontSize: "0.9rem", color: "#707070" }}>
            Click the button above to know more about our Angel Investors and
            the benefits.
          </p>
          <div className="imgDiv">
            <div className="img">
              <img
                src="/images/RotateComrade1.svg"
                alt="Comrade Arab"
                width={150}
                height={150}
              />
            </div>
            <div className="img">
              <img
                src="/images/RotateComrade2.svg"
                alt="Comrade Igbo"
                width={150}
                height={150}
              />
            </div>
            <div className="img">
              <img
                src="/images/RotateComrade3.svg"
                alt="Comrade Dreads"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
