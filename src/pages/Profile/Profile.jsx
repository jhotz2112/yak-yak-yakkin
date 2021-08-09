export default function Profile(props) {
    return (
        <>
            <br />
            <br />
            <span>Welcome, {props.user.name}</span>
            <br />
            <br />
            <br />
            <div class="avatar">Profile Pic Here</div>
            <br />
            <h2>Hopefully messaging capapbility here</h2>
            <br />
            <br />
            <br />
            <h2>Saved Locations</h2>
        </>
    )
}