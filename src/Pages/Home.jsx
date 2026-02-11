import { Link } from "react-router-dom";
import data from "../Data/Data.json";

import Banner from "../Components/Banner";
import BannerImg from "../assets/BANNER.png";

export default function Home() {
    return(
        <div className="home">

            <Banner image={BannerImg} title="Chez vous, partout et ailleurs"/>

            <section className="home-grid">
                {data.map((logement) => (
                    <Link key={logement.id} to={`/logement/${logement.id}`} className="card">
                        <img src={logement.cover} alt={logement.title}/>
                        <h2 className="card-title"> {logement.title} </h2>
                    </Link>
                ))}
            </section>
        </div>
    );
}