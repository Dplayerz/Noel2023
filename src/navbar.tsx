
import "./App.css"
import { Link } from "react-router-dom";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

function NavBar({ brandName, imageSrcPath }: NavBarProps) {

  
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="titre">{brandName}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse
         navbar-collapse"
        id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            
              <li className="nav-item">
              <Link to="./Upload" className="nav-link">Home</Link>
                
              </li>

              <li className="nav-item">
              <Link to="./UploadVrai" className="nav-link">Équipe</Link>
              </li>
              <li className="nav-item">
                <Link to="./UploadPage" className="nav-link">Upload</Link>
                
              </li>
              
              <li className="nav-item">
                <Link to="./Result" className="nav-link">Résultat</Link>
                
              </li>
            
          </ul>
          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;