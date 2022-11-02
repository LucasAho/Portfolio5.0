import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import PortfolioPage from "./Pages/PortfolioPage";
import WorkInProgress from "./Pages/WorkInProgress";
import WikiArticlePage from "./Pages/WikiArticlePage";
import WikiHomePage from "./Pages/WikiHomePage";
import PNF from "./Pages/PNF";
import VoiceOfStone from "./Components/Tukren/VoiceOfStone";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<PortfolioPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/blog/:postId' element={<WorkInProgress />} />
          <Route path='/wiki/:articleId' element={<WikiArticlePage />} />
          <Route exact path='/wiki' element={<WikiHomePage />} />
          <Route path='*' element={<PNF />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
