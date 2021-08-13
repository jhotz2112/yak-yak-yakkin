import CommentCreate from "../../components/CommentCreate/CommentCreate";

export default function LocationComments({setThisLocation, thisLocation}) {
    return (
        <div>
            <CommentCreate setThisLocation={setThisLocation} thisLocation={thisLocation} />
            {
                thisLocation.comments && thisLocation.comments.map((c) => (
                    <li>{c.content}</li>
                ))
            }
        </div>
    )
}