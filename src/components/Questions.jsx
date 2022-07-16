import "../styles/Questions.css";

export default function Questions() {
  return (
    <section className="questionSection">
      <div className="questionDiv">
        <h2>Questions?</h2>
        <p>
          Some of your questions might be the same as those on Panthart's
          Website. Visit the{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://panthart.com/faqs"
            style={{
              color: "#ED2B4B",
              textDecoration: "underline",
              fontWeight: "550",
            }}
          >
            <span>FAQS</span>
          </a>{" "}
          page. If your question is neither found nor answered, kindly send us a
          DM on any of our social media or send an email to{" "}
          <a
            href="mailto:panthartofficial@gmail.com"
            style={{
              color: "#ED2B4B",
              textDecoration: "underline",
              fontWeight: "550",
            }}
          >
            <span>Panthartofficial@gmail.com</span>
          </a>
        </p>
      </div>
    </section>
  );
}
