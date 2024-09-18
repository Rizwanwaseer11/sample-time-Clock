import AppName from "./components/AppName";
import CountryName from "./components/CountryName";
import Time from "./components/Time";

function App() {
  return (
    <>
      <center className="container">
        <AppName></AppName>
        <CountryName></CountryName>
        <Time></Time>
      </center>
    </>
  );
}

export default App;
