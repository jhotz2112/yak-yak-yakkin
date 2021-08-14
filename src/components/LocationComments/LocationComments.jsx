import CommentCreate from "../CommentCreate/CommentCreate";
import CommentDelete from "../CommentDelete/CommentDelete";
import "./LocationComments.css"

export default function LocationComments({setThisLocation, thisLocation}) {
    return (
        <div>
            {
                thisLocation.comments && thisLocation.comments.map((c) => (
                    <div className="CommentBox">
                        <CommentDelete commentId={c._id} setThisLocation={setThisLocation} thisLocation={thisLocation} />
                        {c.content}
                    </div>
                ))
            }
            <CommentCreate setThisLocation={setThisLocation} thisLocation={thisLocation} />
        </div>
    )
}