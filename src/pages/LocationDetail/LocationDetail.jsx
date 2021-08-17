import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import LocationComments from "../../components/LocationComments/LocationComments";
import * as locationsApi from "../../utilities/locations-api"
import "./LocationDetail.css"

export default function LocationDetail({idx}) {
    let { id } = useParams();
    const [thisLocation, setThisLocation] = useState({})

    useEffect(function () {
        async function getLocal() {
            const location = await locationsApi.getOne(id);
            setThisLocation(location);
        }
        getLocal();
    }, [id]);

    return (
        <main>
            <div className="LocationContainer">
                <div>
                    <img src={thisLocation.photos && thisLocation.photos[0].url} className="DetailsPic" alt=""></img>
                </div>
                <div className="LocationDetail">
                    <div className="LocationDetailName">
                        <p>{thisLocation.locationName}</p>
                    </div>
                    <div className="LocationDetailDescription">
                        {thisLocation.description}
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>
                            <p><u>Difficulty:</u></p>
                            {thisLocation.difficulty}
                        </p>
                    </div>
                </div>
                <LocationComments setThisLocation={setThisLocation} thisLocation={thisLocation} key={idx} />
            </div>
            <GoogleMap className="google-map" address={thisLocation.address} key={idx} />
        </main>
    )
}