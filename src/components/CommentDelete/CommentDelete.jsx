import * as commentsApi from '../../utilities/comments-api';
import "./CommentDelete.css"
export default function CommentDelete({setThisLocation, commentId}) {

  async function handleDelete(evt) {
    evt.preventDefault();
    const updatedLocation = await commentsApi.deleteOne(commentId);
    setThisLocation(updatedLocation); 
  }

    return(
      <form className="DeleteButton" autoComplete="off" onSubmit={handleDelete}>
        <button className="button" onSubmit={handleDelete} type="submit">X</button>
        </form>
    )
}