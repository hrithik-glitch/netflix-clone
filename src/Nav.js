import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import { slide as Menu } from "react-burger-menu";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const user = useSelector(selectUser);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <>
      <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
          <div className="menu__bar">
            <Menu styles={"border-decoration: none"} width={"350px"}>
              <h3>
                Welcome,
                <br />
                {user.email}
                <hr className="hr__bar" />
              </h3>
              <a className="menu-item" href="#!">
                Home
              </a>
              <a className="menu-item" href="#!">
                Available for Downloads
              </a>
              <a className="menu-item" href="#!">
                TV Programmes
              </a>
              <a className="menu-item" href="#!">
                Action & Adventure
              </a>
              <a className="menu-item" href="#!">
                Award-winning Movies
              </a>
              <a className="menu-item" href="#!">
                Comedies
              </a>
              <a className="menu-item" href="#!">
                Documentaries
              </a>
              <a className="menu-item" href="#!">
                Dramas
              </a>
              <a className="menu-item" href="#!">
                Horror Movies
              </a>
              <a className="menu-item" href="#!">
                Independent Films
              </a>
              <a className="menu-item" href="#!">
                Indian Films
              </a>
              <a className="menu-item" href="#!">
                International Movies
              </a>
              <a className="menu-item" href="#!">
                Korean Drama
              </a>
              <a className="menu-item" href="#!">
                Anime Series
              </a>
              <a className="menu-item" href="#!">
                Biography
              </a>
              <a className="menu-item" href="#!">
                Anime Movies
              </a>
            </Menu>
          </div>

          <img
            onClick={() => history.push("/")}
            className="nav__logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
          <img
            onClick={() => history.push("/profile")}
            className="nav__avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
            alt=""
          />
        </div>
        <SearchOutlinedIcon className="search__icon" />
      </div>
    </>
  );
}

export default Nav;
