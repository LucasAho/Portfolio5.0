import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import PortfolioPage from "./Pages/PortfolioPage";
import WorkInProgress from "./Pages/WorkInProgress";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<PortfolioPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/blog/:postId' element={<WorkInProgress />} />
          <Route path='/wiki/:articleId' element={<WorkInProgress />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
