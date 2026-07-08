import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Welcome from "./pages/Welcome";
import MathLife from "./pages/MathLife";
import Software from "./pages/Software";
import Teaching from "./pages/Teaching";
import Activities from "./pages/Activities";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/math" element={<MathLife />} />
            <Route path="/software" element={<Software />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}