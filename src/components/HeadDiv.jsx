import HeadSocialIcons from "./HeadSocialIcons";
import "../styles/HeadDiv.css";

export default function HeadDiv() {
  return (
    <div>
      <div className="headerRow">
        {/* The First Column with Igbo Comrade */}
        <div className="headerColumn comradeImage">
          <img
            className="imgAnimate"
            src="/images/ComradeIgbo.svg"
            alt="Comrade Igbo"
            width={350}
            height={500}
          />
        </div>

        {/* The Second Column with the header title and social icons */}
        <div
          className="headerColumn"
          style={{
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          <h1>
            The Offical Web 3 Community For{" "}
            <span>
              <a
                href="https://panthart.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#ED2B4B", textDecoration: "underline" }}
              >
                Panthart
              </a>
            </span>
          </h1>
          <HeadSocialIcons />
        </div>

        {/* The Third Column with Arab Comrade */}
        <div className="headerColumn comradeImage">
          <img
            className="imgAnimate"
            src="/images/ComradeArab.svg"
            alt="Comrade Arab"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}
