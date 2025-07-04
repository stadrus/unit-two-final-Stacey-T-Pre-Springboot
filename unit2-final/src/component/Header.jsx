import { Link } from "react-router";

const Header = () => {
    return (
        <div className="header">
            <header>
                <h1>CalSync</h1>
                <nav className="nav-bar">
              <Link className="home-button" to='/Home'>Home</Link> | <Link className="about-button" to='/About'>About Us</Link>
            </nav>
            </header>
        </div>
    );
};

export default Header;