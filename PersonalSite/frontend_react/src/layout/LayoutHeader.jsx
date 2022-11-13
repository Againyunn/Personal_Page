import React from "react";

import Header from "layout/header/Header";
import { Outlet } from "react-router-dom";

function LayoutHeader(props) {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
}

export default LayoutHeader;
