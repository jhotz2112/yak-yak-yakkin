import { useEffect, useState } from 'react'
import * as locationsApi from '../../utilities/locations-api'
import CreateLocationButton from '../../components/CreateLocationButton/CreateLocationButton'
import LocationListTable from "../../components/LocationList/LocationList";

export default function Location() {
    const [showForm, setShowForm] = useState(false);
    const [locations, setLocations] = useState([]);

    function pressNewLocation() {
        setShowForm(true);
    }

    useEffect(function() {
        async function getLocations() {
            const locations = await locationsApi.getAll();
            setLocations(locations);
            console.log(locations);
        }
        getLocations();
    }, []);

    return ( 
        <>
        <h1>locations</h1>
        <CreateLocationButton pressNewLocation={pressNewLocation} showForm={showForm} setShowForm={setShowForm} />
        <LocationListTable locations={locations} />
        </>
    );
}
