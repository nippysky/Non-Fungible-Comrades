import "../styles/HowTo.css";

export default function HowTo() {
  return (
    <section className="sectionHowTo">
      <div className="divHowTo">
        <h2>Let's Guide You.</h2>
        <p>
          Some people might find it difficult on how to go about becoming a
          comrade holder and community member. The whole process of purchasing
          Ethereum, Minting, and Viewing your minted NFT might be confusing to
          you. We are hear to guide you. Simply watch the videos below to learn.
        </p>
      </div>

      <section className="innerSection">
        <div className="innerRow">
          <div className="innerColumn">
            <a
              href="https://www.youtube.com/watch?v=1EduST3YaNQ"
              target="_blank"
              rel="noreferrer"
            >
              <p style={{ fontWeight: "550" }}>
                Get Started With MetaMask{" "}
                <span style={{ position: "relative", top: "7px", left: "7px" }}>
                  <img
                    src="/icons/VideoIcon.svg"
                    alt="Video Icon"
                    height={25}
                    width={25}
                  />
                </span>
              </p>
            </a>
          </div>

          <div className="innerColumn">
            <a
              href="https://www.youtube.com/watch?v=qFxGoTYQnUE"
              target="_blank"
              rel="noreferrer"
            >
              <p style={{ fontWeight: "550" }}>
                How To Buy Ethereum{" "}
                <span style={{ position: "relative", top: "7px", left: "7px" }}>
                  <img
                    src="/icons/VideoIcon.svg"
                    alt="Video Icon"
                    height={25}
                    width={25}
                  />
                </span>
              </p>
            </a>
          </div>
        </div>

        <div className="innerRow">
          <div className="innerColumn">
            <a
              href="https://www.youtube.com/watch?v=skr91ZbUaV4"
              target="_blank"
              rel="noreferrer"
            >
              <p style={{ fontWeight: "550" }}>
                How To Mint An NFT{" "}
                <span style={{ position: "relative", top: "7px", left: "7px" }}>
                  <img
                    src="/icons/VideoIcon.svg"
                    alt="Video Icon"
                    height={25}
                    width={25}
                  />
                </span>
              </p>
            </a>
          </div>

          <div className="innerColumn">
            <a
              href="https://www.youtube.com/watch?v=T9CD-RLrHWA"
              target="_blank"
              rel="noreferrer"
            >
              <p style={{ fontWeight: "550" }}>
                Buy & Sell Your NFT On Secondary Market{" "}
                <span style={{ position: "relative", top: "7px", left: "7px" }}>
                  <img
                    src="/icons/VideoIcon.svg"
                    alt="Video Icon"
                    height={25}
                    width={25}
                  />
                </span>
              </p>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
