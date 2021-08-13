import { Link } from "react-router-dom";

export default function LocationItemCard({location}) {
    return (
        <>
            <Link to={`/details/${location._id}`}>
            <button>{location.locationName}</button>
            </Link>
        </>
    );
}