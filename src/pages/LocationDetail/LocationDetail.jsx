import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LocationComments from "../../components/LocationComments/LocationComments";
import * as locationsApi from "../../utilities/locations-api"
import "./LocationDetail.css"
import CommentDelete from "../../components/CommentDelete/CommentDelete";

export default function LocationDetail() {
    let { id } = useParams();
    const [thisLocation, setThisLocation] = useState({})

    useEffect(function () {
        async function getLocal() {
            const location = await locationsApi.getOne(id);
            setThisLocation(location);
        }
        getLocal();
    }, []);

    return (
        <main>
            <div className="LocationContainer">
                <div>
                    <img src={thisLocation.photos && thisLocation.photos[0].url} className="DetailsPic"></img>
                </div>
                <div className="LocationDetail">
                    <div className="LocationDetailName">
                        {thisLocation.locationName}
                    </div>
                    <div className="LocationDetailDescription">
                        {thisLocation.description}
                        {thisLocation.difficulty}
                    </div>
                </div>
                <LocationComments setThisLocation={setThisLocation} thisLocation={thisLocation} />
            </div>
        </main>
    )
}