import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div>
        <Link to="/">Home | </Link>
        <Link to="/articles/all">All Articles | </Link>
      </div>
    </>
  );
};

export default Nav;
