import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LocationComments from "../LocationComments/LocationComments";
import * as locationsApi from "../../utilities/locations-api"
import "./LocationDetail.css"

export default function LocationDetail() {
    let { id } = useParams();
    const [thisLocation, setThisLocation] = useState({})

    useEffect(function () {
        async function getLocal() {
            const location = await locationsApi.getOne(id);
            console.log(location)
            setThisLocation(location);
        }
        getLocal();
    }, []);

    return (
        <div className="LocationContainer">
            {thisLocation.locationName}
            <div className="DetailsPic" style={
                {
                    background: `url(${thisLocation.photos && thisLocation.photos[0].url}) no-repeat center`,
                    backgroundSize: "40vmin 60vmin"
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
                    {thisLocation.detail}
                </div>
                <LocationComments setThisLocation={setThisLocation} thisLocation={thisLocation} />
            </div>
        </div>
    )
}