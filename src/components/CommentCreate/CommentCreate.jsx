import * as commentsApi from "../../utilities/comments-api"
import { useState } from "react";
import "./CommentCreate.css"

export default function CommentCreate({ setThisLocation, thisLocation }) {
    const [formData, setFormData] = useState("");

    async function handleSubmit(evt) {
        evt.preventDefault();
        const updatedLocation = await commentsApi.addComment({ content: formData }, thisLocation._id);
        setThisLocation(updatedLocation);
        console.log(updatedLocation);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(evt) => setFormData(evt.target.value)} type="text" name="content" placeholder="Comment Here!" value={formData} />
            <input className="Submit" type="submit" value="Submit" />
        </form>
    )
}