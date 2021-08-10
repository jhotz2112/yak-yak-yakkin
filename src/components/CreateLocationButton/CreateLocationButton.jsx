import CreateLocation from '../CreateLocation/CreateLocation'

export default function CreateLocationButton({showForm, setShowForm, pressNewLocation}) {
    return (
        showForm ? 
        <>
        <CreateLocation setShowForm={setShowForm} />
        </>
        :
        <>
        <button onClick={() => pressNewLocation()}>Create New Location</button>
        </>
    )
}