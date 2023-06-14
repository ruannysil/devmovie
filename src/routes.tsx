import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import About from "./pages/About"
export default function RoutesApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}