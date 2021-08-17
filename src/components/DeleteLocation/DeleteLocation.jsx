import * as locationsApi from '../../utilities/locations-api';

export default function DeleteLocation({ id, setShowDeleteForm, setLocations, locations }) {

  async function handleDelete(evt) {
    evt.preventDefault();
    await locationsApi.deleteOne(id);
    setShowDeleteForm(false);
    let updatedLocations = locations.filter(l => l._id !== id);
    setLocations(updatedLocations);
  }

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleDelete}>
        <label>Are you sure you want to DELETE?</label>
        <button className="submit-button" type="submit">Delete</button>
        <button onClick={() => setShowDeleteForm(false)}>Cancel</button>
      </form>
    </div>
  );
}