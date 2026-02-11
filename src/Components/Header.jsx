import { NavLink } from "react-router-dom";
import LOGO from "../assets/LOGO.png";

export default function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-logo"> 
                    <img src={LOGO} alt="Kasa"/>
                </div>
                <nav className="header-nav">
                    <NavLink
                        to="/"
                        className={({ isActive }) => ( isActive ? "header-link is-active" : "header-link" )}
                    >
                        Acceuil
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => ( isActive ? "header-link is-active" : "header-link" )}
                    >
                        A Propos
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}