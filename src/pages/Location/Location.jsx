import { useState } from "react";
import CreateLocation from '../../components/AddLocation/AddLocation'

export default function Location() {
    const [showForm, setShowForm] = useState(false);

    function pressNewLocation() {
        setShowForm(true);
    }

    return ( showForm ? 
        <>
        <h1>New Location</h1>
        <CreateLocation setShowForm={setShowForm} />
        </>
        :
        <>
            <button onClick={() => pressNewLocation()}>Create New Location</button>
            <h3>Google maps here</h3>
            <h3>Comments</h3>
        </>
    );
}
