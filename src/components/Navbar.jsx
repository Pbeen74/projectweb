import '../App.css';

function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li className="Hamberger-row-1">
                    <img className="Hamberger" src="/burger-menu.svg" alt="menu-bar"/>
                    <div className="dropdown-menu">
                        <a href="/receipt">🧾 Receipt (History)</a>
                        <a href="/edit_profile">👤 Edit Profile</a>
                    </div>
                </li>
                <li className="col-2">หลังมอ cafe</li>
                <li className="col-3">
                    <img className="profile" src="/profile.svg" alt="profile" />
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
