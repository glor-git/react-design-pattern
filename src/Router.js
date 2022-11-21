import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PresentataionalAndContrainerComponentPattern from './1. PresentataionalAndContrainerComponentPattern';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>react-design-pattern</div>} />
        <Route path="/1" element={<PresentataionalAndContrainerComponentPattern />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;