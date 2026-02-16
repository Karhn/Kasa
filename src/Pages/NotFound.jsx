import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="notfound">
            <h1 className="notfound-title"> 404 </h1>
            <p className="notfound-text"> Oups ! La page que <br className="only-mobile"/> vous demander n'existe pas. </p>
            <Link to="/" className="notfound-link">
                Retourner sur la page d'acceuil
            </Link>
        </div>
    )
}