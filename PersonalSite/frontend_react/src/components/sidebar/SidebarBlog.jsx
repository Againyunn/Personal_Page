import React, { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// data
import { sidebar } from "components/sidebar/sidebarData.js";

// key 자동 생성
import { v4 as uuidv4 } from "uuid";

// css
import "static/style/css/ContentPage.css";
import "static/style/css/Sidebar.css";
import { Offcanvas } from "react-bootstrap";

function SidebarBlog(props) {
  const sidebarRef = useRef([]);

  // query-string 접근
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   if (!props.isActive) {
  //     sidebarRef.current[0].classList.add("in-active");
  //   } else {
  //     sidebarRef.current[0].classList.remove("in-active");
  //   }
  // }, [props.isActive]);

  const navigate = useNavigate();

  const handleClose = () => {
    props.setIsActive(!props.isActive);
  };

  const moveToLink = (linkTarget, paramId) => {
    let queryStringLink = linkTarget + "?filter-id=" + paramId;
    setSearchParams({ "filter-id": paramId });
    navigate(queryStringLink);
  };

  return (
    <Offcanvas
      show={props.isActive}
      onHide={handleClose}
      responsive={"sm" | "md" | "lg" | "xl" | "xxl"}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>기록.공부</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {sidebar.map((el, idx) => {
          return (
            <div className="sidebar-container" key={() => uuidv4()}>
              <span
                className="blue bold"
                onClick={() => moveToLink(el.contentLink, el.contentKey)}
              >
                {el.name}
              </span>
            </div>
          );
        })}
      </Offcanvas.Body>
    </Offcanvas>
  );

  // return (
  //   <div className="sidebar-wrap" ref={(e) => (sidebarRef.current[0] = e)}>
  //     {sidebar.map((el, idx) => {
  //       return (
  //         <div className="sidebar-container" key={() => uuidv4()}>
  //           <span className="blue bold">{el.name}</span>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}

export default SidebarBlog;
