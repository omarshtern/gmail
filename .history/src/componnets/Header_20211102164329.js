import { Menu } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img src="data:image/png;base64,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" />
      </div>
      <div className="header__middle"></div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
