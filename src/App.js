import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import PortfolioPage from "./Pages/PortfolioPage";
import BlogArticlePage from "./Pages/BlogArticlePage";
import WikiArticlePage from "./Pages/WikiArticlePage";
import WikiHomePage from "./Pages/WikiHomePage";
import PNF from "./Pages/PNF";
import { Box, ThemeProvider } from "@mui/material";
import Theme from "./Common/theme/Theme";

function App() {
  return (
    <Box className="App" maxWidth='xl' mx='auto'>
      <ThemeProvider theme={Theme}>
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
      </ThemeProvider>
    </Box>
  );
}

export default App;
