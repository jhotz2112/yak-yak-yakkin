import LocationItemCard from "../LocationItemCard/LocationItemCard";
import "./LocationTableItem.css";
export default function LocationTableItem({idx, location, selected, setSelected}) {

    if (selected === location._id) {
        return (
            <div className='LocationItem'
            onClick={() => setSelected(location._id)}
            style={
                {border:" 3px solid black",
                backgroundColor: "#FBF1F6",
                background: `url(${location.photos.length && location.photos[0].url}) no-repeat left`,
                backgroundSize: "10vmin"}
            }
            >
                <LocationItemCard idx={idx} location={location} />
            </div>
        );
    } else {
        return (
            <div className='LocationItem'
            onClick={() => setSelected(location._id)}
            style={
                {background: `url(${location.photos.length && location.photos[0].url}) no-repeat left`,
                backgroundColor: "#FBF9F6",
                backgroundSize: "10vmin"}
            }
            >
                <LocationItemCard idx={idx} location={location} />
            </div>
        );
    }
}