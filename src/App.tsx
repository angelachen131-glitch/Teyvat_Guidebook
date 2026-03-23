import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Artifacts from './pages/Artifacts';
import TeamBuilder from './pages/TeamBuilder';
import Guide from './pages/Guide';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/artifacts" element={<Artifacts />} />
          <Route path="/team-builder" element={<TeamBuilder />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Layout>
    </Router>
  );
}
