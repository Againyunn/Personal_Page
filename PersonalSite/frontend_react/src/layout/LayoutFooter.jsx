import React from "react";
import { Outlet } from "react-router-dom";

import Header from "layout/header/Header";
import Footer from "layout/footer/Footer";

function LayoutFooter(props) {
  return (
    <React.Fragment>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default LayoutFooter;
