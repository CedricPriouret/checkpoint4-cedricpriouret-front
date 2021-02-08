/* eslint-disable jsx-a11y/anchor-is-valid */

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item logo">
          <a
            href="https://cedricpriouret.fr/"
            className="navbar-link"
            title="Accueil"
          >
            <span className="navbar-title">cedricpriouret.</span>
            <i className="fas fa-code navbar-icon"></i>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link" title="Histoire">
            <i className="fas fa-book navbar-icon"></i>
            <span className="navbar-title">Histoire</span>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link" title="Compétences">
            <i className="fas fa-tools navbar-icon"></i>
            <span className="navbar-title">Compétences</span>
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link" title="Projets">
            <i className="fas fa-folder navbar-icon"></i>
            <span className="navbar-title">Projets</span>
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="mailto:cedric.priouret@gmail.com"
            className="navbar-link"
            title="Contact"
          >
            <i className="fas fa-paper-plane navbar-icon"></i>
            <span className="navbar-title">Contact</span>
          </a>
        </li>
        <li className="navbar-item-darkmode">
          <i className="fas fa-moon navbar-icon-darkmode changeTheme"></i>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
