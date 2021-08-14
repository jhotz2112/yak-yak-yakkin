import CreateLocation from '../CreateLocation/CreateLocation'
import DeleteLocation from '../DeleteLocation/DeleteLocation'
import UpdateLocation from '../UpdateLocation/UpdateLocation'

export default function LocationCrudButtons({ showCreateForm, setShowCreateForm, showUpdateForm, setShowUpdateForm, showDeleteForm, setShowDeleteForm, pressNewLocation, locations, setLocations, selected }) {
    if (showDeleteForm && selected) {
        return (
            <>
                <DeleteLocation setShowDeleteForm={setShowDeleteForm} id={selected} locations={locations} setLocations={setLocations} />

            </>
        );
    } else if (showUpdateForm && selected) {
        return (
            <>
                <UpdateLocation setShowUpdateForm={setShowUpdateForm} id={selected} locations={locations} setLocations={setLocations} />
                <button onClick={() => setShowUpdateForm(false)}>Cancel</button>
            </>
        );
    } else {
        return (
            showCreateForm ?
                <>
                    <CreateLocation setShowCreateForm={setShowCreateForm} setLocations={setLocations} locations={locations} />
                </>
                :
                <>
                    <button onClick={() => pressNewLocation()}>Create New Location</button>
                    <button onClick={() => setShowDeleteForm(true)}>Delete Selected Location</button>
                    <button onClick={() => setShowUpdateForm(true)}>Update Selected Location</button>
                </>
        );
    }

}