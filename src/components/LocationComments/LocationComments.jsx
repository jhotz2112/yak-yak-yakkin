import CommentCreate from "../CommentCreate/CommentCreate";
import CommentDelete from "../CommentDelete/CommentDelete";

export default function LocationComments({setThisLocation, thisLocation}) {
    return (
        <div>
            <CommentCreate setThisLocation={setThisLocation} thisLocation={thisLocation} />
            {
                thisLocation.comments && thisLocation.comments.map((c) => (
                    <li>
                        {c.content}
                        <CommentDelete commentId={c._id} setThisLocation={setThisLocation} thisLocation={thisLocation} />
                    </li>
                ))
            }
        </div>
    )
}