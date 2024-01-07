
function NavBar() {
  return (
    <>
    <header>
      <nav className="navbar bg-neutral-500">
        <img src='/public/logo.jpg' className='logo'></img>
        <ul>
          <li className="text-primary-200">Home</li>
          <li className="text-primary-200">Product</li>
          <li className="text-primary-200">About</li>
          <li className="text-primary-200">News</li>
          <li className="text-primary-200">Contact Us</li>
        </ul>
      </nav>
      </header>
    </>
  );
}

export default NavBar;