import { useEffect, useState } from 'react'
import * as locationsApi from '../../utilities/locations-api'
import LocationListTable from "../../components/LocationListTable/LocationListTable";
import LocationCrudButtons from '../../components/LocationCrudButtons/LocationCrudButtons';

export default function Location() {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [locations, setLocations] = useState([]);
    const [selected, setSelected] = useState()

    function pressNewLocation() {
        setShowCreateForm(true);
    }

    useEffect(function() {
        async function getLocations() {
            const locations = await locationsApi.getAll();
            setLocations(locations);
            console.log(locations);
        }
        getLocations();
    }, []);

    function changeSelected(id) {
        if(id !== selected) {
            setSelected(id)
        } else {
            setSelected()
        }
    }

    return ( 
        <>
        <h1>Locations</h1>
        <LocationCrudButtons pressNewLocation={pressNewLocation} showCreateForm={showCreateForm}
            setShowCreateForm={setShowCreateForm} showDeleteForm={showDeleteForm} setShowDeleteForm={setShowDeleteForm}
            showUpdateForm={showUpdateForm} setShowUpdateForm={setShowUpdateForm}
            setLocations={setLocations} locations={locations} selected={selected} />
        <LocationListTable selected={selected} setSelected={changeSelected} locations={locations} />
        </>
    );
}
