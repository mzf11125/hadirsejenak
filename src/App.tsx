import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import EventDetailPage from "./pages/EventDetailPage.tsx";
import VolunteerSignupPage from "./pages/VolunteerSignupPage.tsx";
import DonatePage from "./pages/DonatePage.tsx";
import ThankYouPage from "./pages/ThankYouPage.tsx";
import ReportsPage from "./pages/ReportsPage.tsx";
import ReportDetailPage from "./pages/ReportDetailPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
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
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:slug" element={<EventDetailPage />} />
          <Route path="/events/:slug/daftar" element={<VolunteerSignupPage />} />
          <Route path="/donasi" element={<DonatePage />} />
          <Route path="/donasi/terima-kasih" element={<ThankYouPage />} />
          <Route path="/laporan" element={<ReportsPage />} />
          <Route path="/laporan/:slug" element={<ReportDetailPage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/kebijakan-privasi" element={<PrivacyPolicyPage />} />
          <Route path="/perlindungan-anak" element={<ChildSafeguardingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}