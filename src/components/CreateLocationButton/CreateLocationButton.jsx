import CreateLocation from '../CreateLocation/CreateLocation'

export default function CreateLocationButton({showForm, setShowForm, pressNewLocation, locations, setLocations}) {
    return (
        showForm ? 
        <>
        <CreateLocation setShowForm={setShowForm} setLocations={setLocations} locations={locations} />
        </>
        :
        <>
        <button onClick={() => pressNewLocation()}>Create New Location</button>
        </>
    )
}