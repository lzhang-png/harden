import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthenticatedLayout from './components/AuthenticatedLayout';
import Menu from './components/Menu';
import Proposal from './components/Proposal';
import WebDesign from './components/WebDesign';
import BrandGuidelines from './components/BrandGuidelines';
import Presentation from './components/Presentation';
import WebsiteImprovement from './components/WebsiteImprovement';
import AppDesign from './components/AppDesign';
import AppDesignProposal624 from './components/AppDesignProposal624';
import AppDesignProposal713 from './components/AppDesignProposal713';
import Invoice713 from './components/Invoice713';

export default function App() {
  const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <BrowserRouter basename={routerBasename || undefined}>
      <Routes>
        <Route element={<AuthenticatedLayout />}>
          <Route index element={<Menu />} />
          <Route path="proposal" element={<Proposal />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="brand-guidelines" element={<BrandGuidelines />} />
          <Route path="presentation" element={<Presentation />} />
          <Route path="website-improvement" element={<WebsiteImprovement />} />
          <Route path="app-design" element={<AppDesign />}>
            <Route index element={<AppDesignProposal624 />} />
            <Route path="proposal-7-13" element={<AppDesignProposal713 />} />
          </Route>
          <Route path="invoice/proposal-7-13" element={<Invoice713 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
