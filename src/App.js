import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import PortfolioPage from "./Pages/PortfolioPage";
import BlogArticlePage from "./Pages/BlogArticlePage";
import WikiArticlePage from "./Pages/WikiArticlePage";
import WikiHomePage from "./Pages/WikiHomePage";
import PNF from "./Pages/PNF";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<PortfolioPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/blog/:postId' element={<BlogArticlePage />} />
          <Route path='/wiki/:articleId' element={<WikiArticlePage />} />
          <Route exact path='/wiki' element={<WikiHomePage />} />
          <Route path='*' element={<PNF />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
