export default function HomePage(props) {
    return (
        <>
            <h1>HomePage</h1>
            &nbsp;&nbsp;<span>Welcome, {props.user.name}</span>
        </>
    )
}