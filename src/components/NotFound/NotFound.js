import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="main-wrapper">
 
        {/* main content */}
        <div className="main-content pt-0 bg-white ps-0 pe-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 text-center default-page vh-100 align-items-center d-flex">
                <div className="card border-0 text-center d-block p-0">
                  <img
                    src="images/bg-43.png"
                    alt="icon"
                    className="w200 mb-4 ms-auto me-auto pt-md-5"
                  />
                  <h1 className="fw-700 text-grey-900 display3-size display4-md-size">
                    Oops! It looks like you're lost.
                  </h1>
                  <p className="text-grey-500 font-xsss">
                    The page you're looking for isn't available. Try to search
                    again or use the go to.
                  </p>
                  <a
                    href="index-2.html"
                    className="p-3 w175 bg-current text-white d-inline-block text-center fw-600 font-xssss rounded-3 text-uppercase ls-3"
                  >
                    Home Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* main content */}
        <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
          <a href="default.html" className="nav-content-bttn nav-center">
            <i className="feather-home" />
          </a>
          <a href="default-follower.html" className="nav-content-bttn">
            <i className="feather-package" />
          </a>
          <a
            href="default-live-stream.html"
            className="nav-content-bttn"
            data-tab="chats"
          >
            <i className="feather-layout" />
          </a>
          <a href="shop-2.html" className="nav-content-bttn">
            <i className="feather-layers" />
          </a>
          <a href="default-settings.html" className="nav-content-bttn">
            <img
              src="images/female-profile.png"
              alt="user"
              className="w30 shadow-xss"
            />
          </a>
        </div>
        <div className="app-header-search">
          <form className="search-form">
            <div className="form-group searchbox mb-0 border-0 p-1">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Search..."
              />
              <i className="input-icon">
                <ion-icon
                  name="search-outline"
                  role="img"
                  className="md hydrated"
                  aria-label="search outline"
                />
              </i>
              <a
                href="#"
                className="ms-1 mt-1 d-inline-block close searchbox-close"
              >
                <i className="ti-close font-xs" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
