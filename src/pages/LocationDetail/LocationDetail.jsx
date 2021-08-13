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
                {thisLocation.locationName}
                <div className="DetailsPic" style={
                    {
                        "background": `url(${thisLocation.photos && thisLocation.photos[0].url}) no-repeat`, "backgroundSize": "contain"
                    }
                }
                >
                </div>
                <div className="LocationDetail">
                    <div className="LocationDetailName">
                    </div>
                    <br></br>
                    <br></br>
                    <div className="LocationDetailDescription">
                        {thisLocation.description}
                        <br></br>
                        <br></br>
                        {thisLocation.difficulty}
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <LocationComments setThisLocation={setThisLocation} thisLocation={thisLocation} />
            </div>
        </main>
    )
}