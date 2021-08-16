import * as commentsApi from '../../utilities/comments-api';
import "./CommentDelete.css"
export default function CommentDelete({ setThisLocation, commentId }) {

  async function handleDelete(evt) {
    evt.preventDefault();
    const updatedLocation = await commentsApi.deleteOne(commentId);
    setThisLocation(updatedLocation);
  }

  return (

      <button className="Delete" type="submit" autoComplete="off" onClick={handleDelete}>X</button>

  )
}