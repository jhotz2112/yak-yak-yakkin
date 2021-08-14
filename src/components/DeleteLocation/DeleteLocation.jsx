import * as locationsApi from '../../utilities/locations-api';

export default function DeleteLocation({ id, setShowDeleteForm, setLocations, locations }) {

  async function handleDelete(evt) {
    evt.preventDefault();
    const deleteLocation = await locationsApi.deleteOne(id);
    setShowDeleteForm(false);
    let updatedLocations = locations.filter(l => l._id !== id);
    setLocations(updatedLocations);
  }

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleDelete}>
        <label>Are you sure you want to DELETE?</label>
        <button type="submit">Delete</button>
        <button onClick={() => setShowDeleteForm(false)}>cancel</button>
      </form>
    </div>
  );
}