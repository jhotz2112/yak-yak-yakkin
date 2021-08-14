import { useState } from 'react'
import LocationTableItem from "../LocationTableItem/LocationTableItem"
import "./LocationListTable.css"

export default function LocationListTable({ locations, selected, setSelected }) {
    const tableItem = locations.map((l, idx) => <LocationTableItem idx={idx + 1} location={l} key={idx} selected={selected} setSelected={setSelected} />)
    const [displayTable, setDisplayTable] = useState(true);

    return (
        <>
            {displayTable ?
                <>
                    <h3>All Locations</h3>
                    <div className="LocationListTable">{tableItem}</div>
                    <button onClick={() => setDisplayTable(false)}>Hide Locations</button>
                </>
                :
                <>
                    <h3>All Locations</h3>
                    <button onClick={() => setDisplayTable(true)}>View Locations</button>
                </>
            }
        </>
    )
}