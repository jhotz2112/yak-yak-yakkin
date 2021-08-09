import { useEffect, useState } from 'react'
import * as locationsApi from '../../utilities/locations-api'

export default function LocationListTable() {
    const [locations, setLocations] = useState([]);

    useEffect(function() {
        async function getLocations()
            const locations = await locationsApi.getAll();
            setLocations(locations);
    }
    getLocations();
}, []);