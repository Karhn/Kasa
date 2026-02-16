import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts/MainLayouts";

import Home from "../Pages/Home";
import About from "../Pages/About";
import House from "../Pages/House";
import NotFound from "../Pages/NotFound";

export default function AppRouter() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/logement/:id" element={<House/>} />
                <Route path="*" element={<NotFound/>} />
            </Route>
        </Routes>
    );
}