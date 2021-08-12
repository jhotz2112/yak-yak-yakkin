import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as locationsApi from "../../utilities/locations-api"
import "./LocationDetail.css"

export default function LocationDetail() {
    let { id } = useParams();
    const [thisLocation, setThisLocation] = useState({})
   
    useEffect(function() {
        async function getLocal() {
            const location = await locationsApi.getOne(id);
            console.log(location)
            setThisLocation(location);
        }
        getLocal();
    }, []);

    return (
        <div className="LocationContainer"
        style={
            {border:" 3px solid black",
            backgroundColor: "#FBF9F6",
            background: `url(${thisLocation.photos && thisLocation.photos[0].url}) no-repeat center`,
            backgroundSize: "50vmin 50vmin"}
        }
        >
            <div className="LocationDetail">
               <div className="LocationDetailName">
                    {thisLocation.locationName}
                </div>
                <br></br>
                <br></br>
                <div className="LocationDetailDescription">
                    {thisLocation.description}
                    {thisLocation.detail}
                </div>
            </div>
        </div>
    )
}