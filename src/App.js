import "antd/dist/antd.css";
import "./App.css";
import LandingPage from "./components/landingpage/landingpage";
import MainNavbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <MainNavbar />
      <LandingPage />
    </div>
  );
}

export default App;
