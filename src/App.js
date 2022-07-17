import "./App.css";
import HeadDiv from "./components/HeadDiv";
import MintComrade from "./components/MintComrade";
import HowTo from "./components/HowTo";
import The5500 from "./components/The5500";
import Benefits from "./components/Benefits";
import OtherDetails from "./components/OtherDetails";
import Team from "./components/Team";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

function App() {
  return (
    <section>
      <section className="section">
        <div className="logoDiv">
          <img
            src="/images/nfcomrades-logo.webp"
            alt="Non-Fungible Comrades Logo"
            width={350}
            height={150}
          />
        </div>
        <HeadDiv />
      </section>
      <hr></hr>
      <MintComrade />
      <HowTo />
      <The5500 />
      <Benefits />
      <OtherDetails />
      <Team />
      <Questions />
      <Footer />
    </section>
  );
}
export default App;
