import * as commentsApi from '../../utilities/comments-api';

export default function CommentDelete({setThisLocation, thisLocation, commentId}) {

  async function handleDelete(evt) {
    evt.preventDefault();
    const updatedLocation = await commentsApi.deleteOne(thisLocation._id, commentId);
    setThisLocation(updatedLocation); 
  }

    return(
      <form autoComplete="off" onSubmit={handleDelete}>
        <button type="submit">X</button>
        </form>
    )
}