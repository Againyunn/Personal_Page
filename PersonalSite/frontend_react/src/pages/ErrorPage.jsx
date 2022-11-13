import React from "react";
import { useNavigate } from "react-router-dom";

//css
import { Button } from "react-bootstrap";
import "static/style/css/ErrorPage.css";
import "static/style/css/Common.css";

function ErrorPage(props) {
  const navigate = useNavigate();
  return (
    <div className="error-wrap">
      <div className="error-container">
        <div className="row align-items-center d-flex flex-row">
          <div className="col-lg-5 text-lg-right pr-lg-3">
            <h1 className="display-1 mb-0 warning-color">404</h1>
          </div>
          <div className="col-lg-7 error-page-divider text-lg-left pl-lg-5 warning-color">
            <h2>SORRY!</h2>
            <h6 className="font-weight-light">페이지를 찾을 수 없습니다..</h6>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center mt-xl-2">
            <span className="font-weight-medium" onClick={() => navigate("/")}>
              <Button className="cancel-button">메인 페이지로 이동</Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
