import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components//Nav';
import WordleGame from './pages/WordGame';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<WordleGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
