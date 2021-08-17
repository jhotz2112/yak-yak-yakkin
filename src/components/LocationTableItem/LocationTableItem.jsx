import LocationItemCard from "../LocationItemCard/LocationItemCard";
import "./LocationTableItem.css";
export default function LocationTableItem({ idx, location, selected, setSelected }) {

    return (
        <div className='LocationItem'
            onClick={() => setSelected(location._id)}
            style={
                {
                    border: selected === location._id ? "4px solid black" : "3px solid gray",
                    gap: "2vmin",
                    background: `url("${location.photos.length && location.photos[0].url}") no-repeat left`,
                    backgroundColor: selected === location._id ? "#FBF1F6" : "#FBF9F6",
                    backgroundSize: "10vmin"
                }
            }
        >
            <LocationItemCard idx={idx} location={location} />
        </div>
    );
}