import { Link, Outlet } from "react-router-dom";

const LinkLayout = () => {
  return (
    <div className="layout-container">
      <div className="page-list">
        <Link to={"/"} className="mainPage-layout">
          Main
        </Link>
        <Link to={"/about"} className="aboutPage-layout">
          About
        </Link>
      </div>

      <Outlet />
    </div>
  );
};
export default LinkLayout;
