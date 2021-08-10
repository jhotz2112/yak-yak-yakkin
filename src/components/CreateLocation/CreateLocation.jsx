import { useState } from 'react';
import { AddLocation } from '../../utilities/locations-api';

export default function CreateLocation({setShowForm}) {
  const [formData, setFormData] = useState({
    locationName: '',
    location: '',
    difficulty: '',
    image: ''
  });

  function handleChange(evt) {
    setFormData({
        ...formData,
      [evt.target.name]: evt.target.value
    });
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const formInfo = {...formData};
      const addLocation = await AddLocation(formInfo);
      console.log(addLocation);
      setShowForm(false);
    } catch {
      setFormData({...formData, error:'Add Location Failed - Try Again'});
    }
  };

    return (
        <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Location Name</label>
            <input type="text" name="locationName" value={formData.locationName} onChange={handleChange} required />
            <label>Difficulty</label>
            <select name='difficulty' onChange={handleChange}>
                <option value='Beginner'>Beginner</option>
                <option value='Intermediate'>Intermediate</option>
                <option value='Expert' selected>Expert</option>
            </select>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}