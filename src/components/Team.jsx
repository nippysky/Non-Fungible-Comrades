import "../styles/Team.css";

export default function Team() {
  return (
    <section className="teamSection">
      <div className="teamRow">
        <h2>Team Members.</h2>
        <p>
          The team for Non-Fungible Comrades, is the same team for Panthart.
          There were areas where there was outsourcing of certain specific
          tasks. To see Panthart's Core team members, Visit this{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://panthart.com/aboutus"
            style={{
              color: "#ED2B4B",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            <span>Who We Are</span>
          </a>
        </p>
      </div>
    </section>
  );
}
