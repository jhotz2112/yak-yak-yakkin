import * as locationsApi from '../../utilities/locations-api';
import { useState, useRef, useEffect } from 'react';
import { updateLocation } from '../../utilities/locations-api';

const initialFormData = {
  locationName: '',
  description: '',
  difficulty: 'Expert'
};

export default function UpdateLocation({id, setShowUpdateForm, setLocations, locations}) {
  const [formData, setFormData] = useState(initialFormData);

  async function handleUpdate(evt) {
    evt.preventDefault();
    const updatedLocation = await updateLocation(formData, id);
    // console.log(updatedLocation);
    const newLocations = locations.map((l) => {
      return l._id === id ? updatedLocation : l
    })
    setLocations(newLocations);
    // Clear the description and file inputs
    setFormData(initialFormData);
  }

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  };

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleUpdate}>
        <label>Location Name</label>
        <input type="text" name="locationName" value={formData.locationName} onChange={handleChange} required />
        <label>Description</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        <label>Difficulty</label>
        <select name='difficulty' value={formData.difficulty} onChange={handleChange}>
          <option value='Beginner'>Beginner</option>
          <option value='Intermediate'>Intermediate</option>
          <option value='Expert'>Expert</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}