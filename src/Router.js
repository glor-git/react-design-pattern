import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PresentataionalAndContrainerComponentPattern from './1. PresentataionalAndContrainerComponentPattern';
import ConditionalRenderingPattern from './2. ConditionalRenderingPattern';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>react-design-pattern</div>} />
        <Route path="/1" element={<PresentataionalAndContrainerComponentPattern />} />
        <Route path="/2" element={<ConditionalRenderingPattern />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;