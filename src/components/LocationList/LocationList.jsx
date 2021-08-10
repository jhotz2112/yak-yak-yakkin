import LocationTableItem from "../LocationTableItem/LocationTableItem"

export default function LocationListTable({locations}) {
    const tableItem = locations.map((l, idx) => <LocationTableItem idx={idx + 1} location={l} key={idx} />)
    return(
    <>
        <h3>List Table</h3>
        <div>{tableItem}</div>
    </>
    )
}