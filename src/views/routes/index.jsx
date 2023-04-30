import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Browse from "../pages/browse/Browse";
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
        </Routes>
    )

}
