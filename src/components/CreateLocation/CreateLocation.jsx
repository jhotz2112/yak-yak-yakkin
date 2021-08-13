import { useState, useRef, useEffect } from 'react';
import { addLocation } from '../../utilities/locations-api';
import PhotoCard from '../../components/PhotoCard/PhotoCard';

const initialFormData = {
  locationName: '',
  description: '',
  difficulty: 'Expert',
  content: ''
};

export default function CreateLocation({ setShowForm, locations, setLocations }) {
  const [formData, setFormData] = useState(initialFormData);

  // Use a ref prop on the <input> in the JSX to
  // create a reference to the <input>, i.e.,
  // inputRef.current will be the <input> DOM element
  const fileInputRef = useRef();

  /*--- Event Handlers ---*/

  async function handleSubmit(evt) {
    evt.preventDefault();
    // Use FormData object to send the inputs in the fetch request
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
    const formObj = new FormData();
    formObj.append('photo', fileInputRef.current.files[0]);
    formObj.append('locationName', formData.locationName);
    formObj.append('description', formData.description);
    formObj.append('difficulty', formData.difficulty);
    formObj.append('content', formData.content);
    const newLocation = await addLocation(formObj);
    setLocations([newLocation, ...locations]);
    // Clear the description and file inputs
    setFormData(initialFormData);
    fileInputRef.current.value = '';
  }

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  };

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
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
        <section className="flex-ctr-ctr">
          <input type="file" ref={fileInputRef} />
          <input name="content" value={formData.content} onChange={handleChange} placeholder="Photo Title" />
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}