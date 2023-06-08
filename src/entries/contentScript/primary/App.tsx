import logo from "~/assets/logo.svg";
import "./App.css";
import { Redirector } from "~/entries/contentScript";

function App() {
  const logoImageUrl = new URL(logo, import.meta.url).href;

  return (
    <div className="logo">
      <img src={logoImageUrl} height="50" alt="" />
      <Redirector />
    </div>
  );
}

export default App;
