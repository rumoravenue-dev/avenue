import React, { useState } from "react";
import HeaderSidebar from "./headerSidebar";
import "./styles/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";

const Header = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toShowSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <>
      <div className={props.contact ? "headerBlack" : "header"}>
        <div className="row justify-content-around headerImage">
          <div className='col col-auto'>
            <a href="/">
              <img
                src="/assets/img/header/Vector(1).svg"
                alt="logo header"
              />
            </a>
          </div>
          <div
            className="col col-md-auto"
            style={{ color: props.contact ? "#000" : "#fff" }}
          >
            <div className='row containerLinks'>
              <div className='col col-md-auto headerLinks'>
                <a href="/">HOME</a>
              </div>
              <div className='col col-md-auto headerLinks'>
                <a href="/services">SERVICES</a>
              </div>
              <div className='col col-md-auto headerLinks'>
                <a href="/portfolio">PORTFOLIO</a>
              </div>
              <div className='col col-md-auto headerLinks'>
                <a href="/about">ABOUT</a>
              </div>
              <div className='col col-md-auto headerLinks'>
                <button>
                  <a href="/newproject">START YOUR PROJECT</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`wrap ${openSidebar ? "onSidebar" : "outSidebar"}`}
        onClick={toShowSidebar}
      >
        <MenuIcon
          fontSize="large"
          sx={{ color: props.contact ? "primary" : grey[50] }}
        />
      </div>

      <div className={openSidebar ? "showSidebar" : "hiddenSidebar"}>
        <HeaderSidebar />
      </div>
    </>
  );
};

export default Header;

