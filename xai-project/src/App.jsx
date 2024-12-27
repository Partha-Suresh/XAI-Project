import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Loan from "./pages/Loan";
import Property from "./pages/Property";
import Stock from "./pages/Stock";
import ScrollToTop from "./ScrollToTop";
import "./index.css";

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loan" element={<Loan />} />
                <Route path="/property" element={<Property />} />
                <Route path="/stock" element={<Stock />} />
            </Routes>
        </BrowserRouter>
    );
}
