import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// layout
import LayoutFooter from "layout/LayoutFooter";
import LayoutHeader from "layout/LayoutHeader";
import ErrorPage from "pages/ErrorPage";

// component
import MainPage from "pages/MainPage";
import MenuActivated from "pages/MenuActivated";
import ProfilePage from "pages/ProfilePage";
import PortfolioPage from "pages/portfolio/Portfolio";
import Blog from "pages/Blog";

function MainRoute(props) {
  return (
    <BrowserRouter>
      <Routes>
        {/* 404 페이지 */}
        <Route path="*" element={<ErrorPage />} />

        {/* 본문 페이지 */}
        <Route element={<LayoutHeader />}>
          <Route path="/" exact={true} element={<MainPage />} />
          <Route path="menu-activated/" element={<MenuActivated />} />
          <Route path="profile/" element={<ProfilePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="blog/" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;
