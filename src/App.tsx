import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/AboutPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { PricesPage } from './pages/PricesPage';
import { TrainingsPage } from './pages/TrainingsPage';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="kes-me-oleme" element={<AboutPage />} />
        <Route path="hinnad" element={<PricesPage />} />
        <Route path="kontakt" element={<ContactPage />} />
        <Route path="broneeri" element={<BookingPage />} />
        <Route path="koolitused" element={<TrainingsPage />} />
        <Route path="materjalid" element={<PlaceholderPage title="Materjalid" />} />
        <Route path="huvitavat-lugemist" element={<PlaceholderPage title="Huvitavat lugemist" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
