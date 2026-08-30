import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ActivitiesPage from "./pages/ActivitiesPage.tsx";
import DonatePage from "./pages/DonatePage.tsx";
import CollaborationPage from "./pages/CollaborationPage.tsx";
import JourneyPage from "./pages/JourneyPage.tsx";
import JoinPage from "./pages/JoinPage.tsx";
import FaqPage from "./pages/FaqPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.tsx";
import ChildSafeguardingPage from "./pages/ChildSafeguardingPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/kegiatan" element={<ActivitiesPage />} />
          <Route path="/donasi" element={<DonatePage />} />
          <Route path="/kolaborasi" element={<CollaborationPage />} />
          <Route path="/perjalanan" element={<JourneyPage />} />
          <Route path="/bergabung" element={<JoinPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/kebijakan-privasi" element={<PrivacyPolicyPage />} />
          <Route path="/perlindungan-anak" element={<ChildSafeguardingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
