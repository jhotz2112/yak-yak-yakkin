import { useEffect, useState } from 'react'
import * as locationsApi from '../../utilities/locations-api'
import CreateLocationButton from '../../components/CreateLocationButton/CreateLocationButton'
import LocationListTable from "../../components/LocationListTable/LocationListTable";

export default function Location() {
    const [showForm, setShowForm] = useState(false);
    const [locations, setLocations] = useState([]);
    const [selected, setSelected] = useState(0)

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

    function changeSelected(idx) {
        if(idx !== selected) {
            setSelected(idx)
        } else {
            setSelected(-1)
        }
    }

    return ( 
        <>
        <h1>
            Locations</h1>
        <CreateLocationButton pressNewLocation={pressNewLocation} showForm={showForm} setShowForm={setShowForm} setLocations={setLocations} locations={locations} />
        <LocationListTable selected={selected} setSelected={changeSelected} locations={locations} />
        </>
    );
}
