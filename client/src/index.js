import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Prayer from "./pages/Prayer";
import Scripture from "./pages/Scripture";
import Journaling from "./pages/Journaling";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoPage from "./pages/NoPage";
import Overview from "./pages/Overview";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="music" element={<Music />} />
          <Route path="prayer" element={<Prayer />} />
          <Route path="scripture" element={<Scripture />} />
          <Route path="journaling" element={<Journaling />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="overview" element={<Overview />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
