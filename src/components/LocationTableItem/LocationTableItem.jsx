import LocationItemCard from "../LocationItemCard/LocationItemCard";

export default function LocationTableItem({idx, location, selected, setSelected}) {
    if (selected === idx) {
        return (
            <>
            <div className='LocationItem'
            style={{border:" 3px solid gray"}}
            onClick={() => setSelected(idx)}
            >
                <LocationItemCard idx={idx} location={location} />
            </div>
            </>
        );
    } else {
        return (
            <>
            <div className='LocationItem'
            onClick={() => setSelected(idx)}
            >
                <LocationItemCard idx={idx} location={location} />
            </div>
            </>
        );
    }
}