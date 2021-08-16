import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

// Not destructuring props this time
export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      {/* <Link to="/profile">Profile</Link> */}
      <Link to="/aboutpage">About</Link>
      &nbsp; | &nbsp;
      <Link to="/location">Locations</Link>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  );
}