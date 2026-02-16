import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function MainLayout() {
    return(
        <div className="layout">
            <Header />
            <main className="layout-main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}