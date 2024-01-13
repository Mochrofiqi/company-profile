import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar bg-neutral-500">
          <img src='/public/logo.jpg' className='logo'></img>
          <ul>
            <Link to="/">
              <li className="text-primary-200">
                Home</li>
            </Link>
            <Link to="/about">
              <li className="text-primary-200">
                About</li>
            </Link>
            <Link to="/">
              <li className="text-primary-200">
                Product</li>
            </Link>
            <Link to="/">
              <li className="text-primary-200">
                News</li>
            </Link>
            <Link to="/">
              <li className="text-primary-200">
                Contact Us</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;