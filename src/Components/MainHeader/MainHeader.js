import React from "react";

import {
  Typography,
  IconButton,
} from "@material-ui/core";

import ListSharpIcon from "@material-ui/icons/ListSharp";


import "./MainHeader.css";
import "@fontsource/roboto";

const MainHeader = () => {
  return (
    <div className="container-fluid g-1 p-1 main-header">
        <div className="row">
          <div className="col">
            <IconButton aria-label="menu">
              <ListSharpIcon
                className="icon-button"
                style={{ color: "white" }}
              />
            </IconButton>
          </div>
          <div className="col-7 header-text mr-3 ">
            <Typography variant="h6">Lista de Afazeres</Typography>
          </div>
        </div>
      </div>
  );
}

export default MainHeader;
