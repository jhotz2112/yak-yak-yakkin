import CommentCreate from "../CommentCreate/CommentCreate";
import CommentDelete from "../CommentDelete/CommentDelete";
import "./LocationComments.css"

export default function LocationComments({ setThisLocation, thisLocation, idx }) {
    return (
        <div className="Comment">
            {
                thisLocation.comments && thisLocation.comments.map((c) => (
                    <div className="CommentBox">
                        <p>{c.content}</p>
                        <CommentDelete commentId={c._id} setThisLocation={setThisLocation} thisLocation={thisLocation} key={idx} />
                    </div>
                ))
            }
            <CommentCreate setThisLocation={setThisLocation} thisLocation={thisLocation} key={idx} />
        </div>
    )
}