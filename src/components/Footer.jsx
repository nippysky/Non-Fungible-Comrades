import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footSection">
      <div className="footColumn1">
        <p style={{ fontSize: "0.97rem", fontWeight: "350", margin: "0" }}>
          NFComrades @ Panthart | {year}
        </p>
      </div>
      <div className="footColumn">
        <a
          style={{
            color: "white",
            textDecoration: "none",
          }}
          href="https://panthart.com/privacypolicy"
        >
          <p style={{ fontSize: "0.97rem", fontWeight: "550", margin: "0" }}>
            Privacy Policy
          </p>
        </a>
      </div>
      <div className="footColumn">
        <a
          style={{
            color: "white",
            textDecoration: "none",
          }}
          href="https://panthart.com/termsandconditions"
        >
          <p style={{ fontSize: "0.97rem", fontWeight: "550", margin: "0" }}>
            Terms & Conditions
          </p>
        </a>
      </div>
      <div className="footColumn">
        {" "}
        <a
          style={{
            color: "white",
            textDecoration: "none",
          }}
          href="https://panthart.com/files/Panthart-Project-Paper.pdf"
        >
          <p style={{ fontSize: "0.97rem", fontWeight: "550", margin: "0" }}>
            Project Paper
          </p>
        </a>
      </div>
      <div className="footColumn">
        <a href="/">
          <span style={{ padding: "0 1.2rem 0 0" }}>
            <img
              src="/icons/FootDiscord.svg"
              alt="Discord Footer"
              height={20}
              width={20}
            />
          </span>
        </a>
        <a href="https://twitter.com/nfcomrades">
          <span style={{ padding: "0 1.2rem 0 0" }}>
            <img
              src="/icons/FootTwitter.svg"
              alt="Discord Footer"
              height={20}
              width={20}
            />
          </span>
        </a>
        <a href="https://www.youtube.com/channel/UCF7-gSEIPIFrGEON4MMyatQ">
          <span style={{ padding: "0 1.2rem 0 0" }}>
            <img
              src="/icons/FootYoutube.svg"
              alt="Discord Footer"
              height={20}
              width={20}
            />
          </span>
        </a>
        <a href="/">
          <span style={{ padding: "0 1.2rem 0 0" }}>
            <img
              src="/icons/FootTiktok.svg"
              alt="Discord Footer"
              height={20}
              width={20}
            />
          </span>
        </a>
        <a href="https://www.instagram.com/panthart_official">
          <span>
            <img
              src="/icons/FootInstagram.svg"
              alt="Discord Footer"
              height={20}
              width={20}
            />
          </span>
        </a>
      </div>
    </footer>
  );
}
