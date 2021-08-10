import { useState, useRef, useEffect } from 'react';
import { AddLocation } from '../../utilities/locations-api';
import * as photosAPI from '../../utilities/photos-api';
import PhotoCard from '../../components/PhotoCard/PhotoCard';

export default function CreateLocation({ setShowForm, locations, setLocations }) {
  const [formData, setFormData] = useState({
    locationName: '',
    location: '',
    difficulty: '',
    image: ''
  });

  const [title, setTitle] = useState('');
  const [photos, setPhotos] = useState([]);
  // Use a ref prop on the <input> in the JSX to
  // create a reference to the <input>, i.e.,
  // inputRef.current will be the <input> DOM element
  const fileInputRef = useRef();

  // Fetch existing uploaded photos after first render
  // Photos will be sorted in the controller with the most recent first
  useEffect(function() {
    photosAPI.getAll().then(photos => setPhotos(photos));
  }, []);

  /*--- Event Handlers ---*/

  async function handleUpload() {
    // Use FormData object to send the inputs in the fetch request
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
    const formData = new FormData();
    formData.append('title', title);
    formData.append('photo', fileInputRef.current.files[0]);
    const newPhoto = await photosAPI.upload(formData);
    setPhotos([newPhoto, ...photos]);
    // Clear the description and file inputs
    setTitle('');
    fileInputRef.current.value = '';
  }

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const formInfo = { ...formData };
      const newLocation = await AddLocation(formInfo);
      setShowForm(false);
      setLocations([...locations, newLocation])
    } catch {
      setFormData({ ...formData, error: 'Add Location Failed - Try Again' });
    }
  };

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Location Name</label>
        <input type="text" name="locationName" value={formData.locationName} onChange={handleChange} required />
        <label>Description</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        <label>Difficulty</label>
        <select name='difficulty' onChange={handleChange}>
          <option value='Beginner'>Beginner</option>
          <option value='Intermediate'>Intermediate</option>
          <option value='Expert' selected>Expert</option>
        </select>
        <section className="flex-ctr-ctr">
          <input type="file" ref={fileInputRef} />
          <input value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Photo Title" />
          <button onClick={handleUpload}>Upload Photo</button>
        </section>
        <section>
          {photos.map(p => <PhotoCard photo={p} key={p._id} />)}
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}