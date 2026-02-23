import { useParams, Navigate } from "react-router-dom";

import Slideshow from "../Components/Slideshow";
import Collapse from "../Components/Collapse";
import Rating from "../Components/Rating";
import data from "../Data/Data.json";

export default function House() {
    const {id} = useParams();

    const logement = data.find((item) => item.id === id)

    if (!logement) {
        return <Navigate to="/404" replace/>
    }

    return (
        <div className="house">
            <Slideshow pictures={logement.pictures} title={logement.title}/>

            <div className="house-top">
                <div className="house-info">
                    <h1 className="house-title"> {logement.title} </h1>
                    <p className="house-location"> {logement.location} </p>

                    <div className="house-tags">
                        {logement.tags.map((tag) =>(
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="house-host">
                    <div className="host">
                        <p className="host-name"> {logement.host.name.split(" ")[0]} <br/> {logement.host.name.split(" ").slice(1).join(" ")}</p>
                            <img className="host-picture" src={logement.host.picture}/>
                    </div>
                    <Rating rating={logement.rating} />
                </div>
            </div>

            <div className="house-collapses">
                <Collapse title="Description">
                    <p> {logement.description} </p>
                </Collapse>

                <Collapse title="Equipements">
                    <ul className="equipements">
                        {logement.equipments.map((equipments) => (
                            <li key={equipments}> {equipments} </li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
    )
}