import React from "react";

const EmailBox = () => {
  return (
    <div>
      <div>
        {/* Mirrored from uitheme.net/sociala/default-email-box.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 03 Mar 2023 23:30:29 GMT */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Sociala - Social Network App HTML Template </title>
        <link rel="stylesheet" href="css/themify-icons.css" />
        <link rel="stylesheet" href="css/feather.css" />
        {/* Favicon icon */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/favicon.png"
        />
        {/* Custom Stylesheet */}
        <link rel="stylesheet" href="css/style.css" />
        <div className="preloader" />
        <div className="main-wrapper">
          {/* navigation top*/}
          <div className="nav-header bg-white shadow-xs border-0">
            <div className="nav-top">
              <a href="index-2.html">
                <i className="feather-zap text-success display1-size me-2 ms-0" />
                <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                  Sociala.{" "}
                </span>{" "}
              </a>
              <a href="#" className="mob-menu ms-auto me-2 chat-active-btn">
                <i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight" />
              </a>
              <a href="default-video.html" className="mob-menu me-2">
                <i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight" />
              </a>
              <a href="#" className="me-2 menu-search-icon mob-menu">
                <i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight" />
              </a>
              <button className="nav-menu me-0 ms-2" />
            </div>
            <form action="#" className="float-left header-search">
              <div className="form-group mb-0 icon-input">
                <i className="feather-search font-sm text-grey-400" />
                <input
                  type="text"
                  placeholder="Start typing to search.."
                  className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg"
                />
              </div>
            </form>
            <a
              href="default.html"
              className="p-2 text-center ms-3 menu-icon center-menu-icon"
            >
              <i className="feather-home font-lg alert-primary btn-round-lg theme-dark-bg text-current " />
            </a>
            <a
              href="default-storie.html"
              className="p-2 text-center ms-0 menu-icon center-menu-icon"
            >
              <i className="feather-zap font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 " />
            </a>
            <a
              href="default-video.html"
              className="p-2 text-center ms-0 menu-icon center-menu-icon"
            >
              <i className="feather-video font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 " />
            </a>
            <a
              href="default-group.html"
              className="p-2 text-center ms-0 menu-icon center-menu-icon"
            >
              <i className="feather-user font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 " />
            </a>
            <a
              href="shop-2.html"
              className="p-2 text-center ms-0 menu-icon center-menu-icon"
            >
              <i className="feather-shopping-bag font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 " />
            </a>
            <a
              href="#"
              className="p-2 text-center ms-auto menu-icon"
              id="dropdownMenu3"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-bs-toggle="dropdown"
            >
              <span className="dot-count bg-warning" />
              <i className="feather-bell font-xl text-current" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-end p-4 rounded-3 border-0 shadow-lg"
              aria-labelledby="dropdownMenu3"
            >
              <h4 className="fw-700 font-xss mb-4">Notification</h4>
              <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                <img
                  src="images/user-8.png"
                  alt="user"
                  className="w40 position-absolute left-0"
                />
                <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                  Hendrix Stamp{" "}
                  <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                    {" "}
                    3 min
                  </span>
                </h5>
                <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                  There are many variations of pass..
                </h6>
              </div>
              <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                <img
                  src="images/user-4.png"
                  alt="user"
                  className="w40 position-absolute left-0"
                />
                <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                  Goria Coast{" "}
                  <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                    {" "}
                    2 min
                  </span>
                </h5>
                <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                  Mobile Apps UI Designer is require..
                </h6>
              </div>
              <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                <img
                  src="images/user-7.png"
                  alt="user"
                  className="w40 position-absolute left-0"
                />
                <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                  Surfiya Zakir{" "}
                  <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                    {" "}
                    1 min
                  </span>
                </h5>
                <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                  Mobile Apps UI Designer is require..
                </h6>
              </div>
              <div className="card bg-transparent-card w-100 border-0 ps-5">
                <img
                  src="images/user-6.png"
                  alt="user"
                  className="w40 position-absolute left-0"
                />
                <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                  Victor Exrixon{" "}
                  <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                    {" "}
                    30 sec
                  </span>
                </h5>
                <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                  Mobile Apps UI Designer is require..
                </h6>
              </div>
            </div>
            <a
              href="#"
              className="p-2 text-center ms-3 menu-icon chat-active-btn"
            >
              <i className="feather-message-square font-xl text-current" />
            </a>
            <div className="p-2 text-center ms-3 position-relative dropdown-menu-icon menu-icon cursor-pointer">
              <i className="feather-settings animation-spin d-inline-block font-xl text-current" />
              <div className="dropdown-menu-settings switchcolor-wrap">
                <h4 className="fw-700 font-sm mb-4">Settings</h4>
                <h6 className="font-xssss text-grey-500 fw-700 mb-3 d-block">
                  Choose Color Theme
                </h6>
                <ul>
                  <li>
                    <label className="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        defaultValue="red"
                        defaultChecked
                      />
                      <i className="ti-check" />
                      <span
                        className="circle-color bg-red"
                        style={{ backgroundColor: "#ff3b30" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label className="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        defaultValue="green"
                      />
                      <i className="ti-check" />
                      <span
                        className="circle-color bg-green"
                        style={{ backgroundColor: "#4cd964" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label className="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        defaultValue="blue"
                        defaultChecked
                      />
                      <i className="ti-check" />
                      <span
                        className="circle-color bg-blue"
                        style={{ backgroundColor: "#132977" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label className="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        defaultValue="pink"
                      />
                      <i className="ti-check" />
                      <span
                        className="circle-color bg-pink"
                        style={{ backgroundColor: "#ff2d55" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label className="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        defaultValue="yellow"
                      />
                      <i className="ti-check" />
                      <span
                        className="circle-color bg-yellow"
                        style={{ backgroundColor: "#ffcc00" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label className="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        defaultValue="orange"
                      />
                      <i className="ti-check" />
                      <span
                        className="circle-color bg-orange"
                        style={{ backgroundColor: "#ff9500" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label className="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        defaultValue="gray"
                      />
                      <i className="ti-check" />
                      <span
                        className="circle-color bg-gray"
                        style={{ backgroundColor: "#8e8e93" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label className="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        defaultValue="brown"
                      />
                      <i className="ti-check" />
                      <span
                        className="circle-color bg-brown"
                        style={{ backgroundColor: "#D2691E" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label className="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        defaultValue="darkgreen"
                      />
                      <i className="ti-check" />
                      <span
                        className="circle-color bg-darkgreen"
                        style={{ backgroundColor: "#228B22" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label className="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        defaultValue="deeppink"
                      />
                      <i className="ti-check" />
                      <span
                        className="circle-color bg-deeppink"
                        style={{ backgroundColor: "#FFC0CB" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label className="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        defaultValue="cadetblue"
                      />
                      <i className="ti-check" />
                      <span
                        className="circle-color bg-cadetblue"
                        style={{ backgroundColor: "#5f9ea0" }}
                      />
                    </label>
                  </li>
                  <li>
                    <label className="item-radio item-content">
                      <input
                        type="radio"
                        name="color-radio"
                        defaultValue="darkorchid"
                      />
                      <i className="ti-check" />
                      <span
                        className="circle-color bg-darkorchid"
                        style={{ backgroundColor: "#9932cc" }}
                      />
                    </label>
                  </li>
                </ul>
                <div className="card bg-transparent-card border-0 d-block mt-3">
                  <h4 className="d-inline font-xssss mont-font fw-700">
                    Header Background
                  </h4>
                  <div className="d-inline float-right mt-1">
                    <label className="toggle toggle-menu-color">
                      <input type="checkbox" />
                      <span className="toggle-icon" />
                    </label>
                  </div>
                </div>
                <div className="card bg-transparent-card border-0 d-block mt-3">
                  <h4 className="d-inline font-xssss mont-font fw-700">
                    Menu Position
                  </h4>
                  <div className="d-inline float-right mt-1">
                    <label className="toggle toggle-menu">
                      <input type="checkbox" />
                      <span className="toggle-icon" />
                    </label>
                  </div>
                </div>
                <div className="card bg-transparent-card border-0 d-block mt-3">
                  <h4 className="d-inline font-xssss mont-font fw-700">
                    Dark Mode
                  </h4>
                  <div className="d-inline float-right mt-1">
                    <label className="toggle toggle-dark">
                      <input type="checkbox" />
                      <span className="toggle-icon" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <a href="default-settings.html" className="p-0 ms-3 menu-icon">
              <img
                src="images/profile-4.png"
                alt="user"
                className="w40 mt--1"
              />
            </a>
          </div>
          {/* navigation top */}
          {/* navigation left */}
          <nav className="navigation scroll-bar">
            <div className="container ps-0 pe-0">
              <div className="p-3 bg-white theme-dark-bg">
                <a
                  href="#"
                  className="bg-primary-gradiant p-3 w-100 btn-block border-0 rounded-3 text-white text-center fw-500 font-xsss"
                >
                  <i className="feather-edit me-2" /> Write Message
                </a>
                <ul className="mt-3">
                  <li className="mt-1 mb-1">
                    <a
                      href="#"
                      className="bg-white theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-900 text-left fw-600 font-xsss d-flex align-items-center"
                    >
                      <i className="feather-mail font-md btn-round-sm me-2 p-0" />{" "}
                      Inbox{" "}
                      <span className="ms-auto font-xssss text-grey-500">
                        233
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 mb-1">
                    <a
                      href="#"
                      className="bg-white theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"
                    >
                      <i className="feather-star font-md btn-round-sm me-2 p-0" />{" "}
                      Starred{" "}
                      <span className="ms-auto font-xssss text-grey-500">
                        1235
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 mb-1">
                    <a
                      href="#"
                      className="bg-white theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"
                    >
                      <i className="feather-send font-md btn-round-sm me-2 p-0" />{" "}
                      Sent{" "}
                      <span className="ms-auto font-xssss text-grey-500">
                        54
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 mb-1">
                    <a
                      href="#"
                      className="bg-white theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"
                    >
                      <i className="feather-file font-md btn-round-sm me-2 p-0" />{" "}
                      Draft{" "}
                      <span className="ms-auto font-xssss text-grey-500">
                        66
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 mb-1">
                    <a
                      href="#"
                      className="bg-white theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"
                    >
                      <i className="feather-alert-circle font-md btn-round-sm me-2 p-0" />{" "}
                      Span{" "}
                      <span className="ms-auto font-xssss text-grey-500">
                        12
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 mb-1">
                    <a
                      href="#"
                      className="bg-white theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"
                    >
                      <i className="feather-anchor font-md btn-round-sm me-2 p-0" />{" "}
                      Work{" "}
                      <span className="ms-auto font-xssss text-grey-500">
                        12
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 mb-1">
                    <a
                      href="#"
                      className="bg-white theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-600 text-left fw-600 font-xsss d-flex align-items-center"
                    >
                      <i className="feather-trash-2 font-md btn-round-sm me-2 p-0" />{" "}
                      Trash{" "}
                      <span className="ms-auto font-xssss text-grey-500">
                        34
                      </span>
                    </a>
                  </li>
                </ul>
                <span className="fw-500 mt-3 font-xssss fw-700 text-uppercase ls-2 ps-3 text-grey-500">
                  Categories
                </span>
                <ul className="mt-3">
                  <li className="mt-1 mb-1">
                    <a
                      href="#"
                      className="bg-white theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-500 text-left fw-600 font-xsss d-flex align-items-center"
                    >
                      <span className="btn-round-xss ms-2 bg-primary me-3" />{" "}
                      Primary{" "}
                      <span className="ms-auto font-xssss text-grey-500">
                        233
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 mb-1">
                    <a
                      href="#"
                      className="bg-white theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-500 text-left fw-600 font-xsss d-flex align-items-center"
                    >
                      <span className="btn-round-xss ms-2 bg-danger me-3" />{" "}
                      Social{" "}
                      <span className="ms-auto font-xssss text-grey-500">
                        1235
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 mb-1">
                    <a
                      href="#"
                      className="bg-white theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-500 text-left fw-600 font-xsss d-flex align-items-center"
                    >
                      <span className="btn-round-xss ms-2 bg-warning me-3" />{" "}
                      Works{" "}
                      <span className="ms-auto font-xssss text-grey-500">
                        54
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 mb-1">
                    <a
                      href="#"
                      className="bg-white theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-500 text-left fw-600 font-xsss d-flex align-items-center"
                    >
                      <span className="btn-round-xss ms-2 bg-success me-3" />{" "}
                      Promotions{" "}
                      <span className="ms-auto font-xssss text-grey-500">
                        66
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 mb-1">
                    <a
                      href="#"
                      className="bg-white theme-dark-bg p-2 w-100 border-0 rounded-3 text-dark text-grey-500 text-left fw-600 font-xsss d-flex align-items-center"
                    >
                      <span className="btn-round-xss ms-2 bg-secondary me-3" />{" "}
                      Friends{" "}
                      <span className="ms-auto font-xssss text-grey-500">
                        23
                      </span>
                    </a>
                  </li>
                  <li className="mt-1 mb-0">
                    <a
                      href="#"
                      className="bg-greylight p-2 w-100 border-0 rounded-3 text-grey-500 text-left fw-600 font-xssss d-flex align-items-center"
                    >
                      <i className="feather-plus font-sm btn-round-sm me-2 p-0" />{" "}
                      Create New Label{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* navigation left */}
          {/* main content */}
          <div className="main-content right-chat-active">
            <div className="middle-sidebar-bottom">
              <div
                className="middle-sidebar-left pe-0 ps-lg-3 ms-0 me-0"
                style={{ maxWidth: "100%" }}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="chat-wrapper p-3 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                      <ul className="email-message">
                        <li>
                          <a
                            href="default-email-open.html"
                            className="rounded-3 bg-lightblue theme-light-bg"
                          >
                            <div className="form-check mt-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blankCheckbox1"
                                defaultValue="option1"
                                aria-label
                              />
                              <label
                                className="text-grey-500 font-xssss"
                                htmlFor="blankCheckbox1"
                              />
                            </div>
                            <div className="email-user">
                              <span className="btn-round-xss ms-0 bg-success me-2" />
                              <img
                                src="images/user-12.png"
                                alt="user"
                                className="w35 me-2"
                              />
                              <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                Hurin Seary
                              </h6>
                            </div>
                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                              <i className="feather-star font-xss text-warning me-2" />
                              Mobile Apps Redesign
                            </div>
                            <div className="email-text text-grey-500 fw-600 font-xssss">
                              Hey Cak, Could you free now? Can you look and read
                              the brief first before...
                            </div>
                            <span className="email-file">
                              <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0" />
                            </span>
                            <div className="email-time text-grey-500 fw-600">
                              12:48PM
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="default-email-open.html"
                            className="rounded-3 bg-transparent"
                          >
                            <div className="form-check mt-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blankCheckbox2"
                                defaultValue="option1"
                                aria-label
                              />
                              <label
                                className="text-grey-500 font-xssss"
                                htmlFor="blankCheckbox2"
                              />
                            </div>
                            <div className="email-user">
                              <span className="btn-round-xss ms-0 bg-success me-2" />
                              <img
                                src="images/user-8.png"
                                alt="user"
                                className="w35 me-2"
                              />
                              <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                Victor Exrixon
                              </h6>
                            </div>
                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                              <i className="feather-star font-xss text-warning me-2" />
                              Mobile Apps Redesign
                            </div>
                            <div className="email-text text-grey-500 fw-600 font-xssss">
                              Hey Cak, Could you free now? Can you look and read
                              the brief first before...
                            </div>
                            <span className="email-file">
                              <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0" />
                            </span>
                            <div className="email-time text-grey-500 fw-600">
                              12:48PM
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="default-email-open.html"
                            className="rounded-3 bg-transparent"
                          >
                            <div className="form-check mt-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blankCheckbox3"
                                defaultValue="option1"
                                aria-label
                              />
                              <label
                                className="text-grey-500 font-xssss"
                                htmlFor="blankCheckbox3"
                              />
                            </div>
                            <div className="email-user">
                              <span className="btn-round-xss ms-0 bg-success me-2" />
                              <img
                                src="images/user-7.png"
                                alt="user"
                                className="w35 me-2"
                              />
                              <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                Surfiya Zakir
                              </h6>
                            </div>
                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                              <i className="feather-star font-xss text-warning me-2" />
                              Mobile Apps Redesign
                            </div>
                            <div className="email-text text-grey-500 fw-600 font-xssss">
                              Hey Cak, Could you free now? Can you look and read
                              the brief first before...
                            </div>
                            <span className="email-file">
                              <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0" />
                            </span>
                            <div className="email-time text-grey-500 fw-600">
                              12:48PM
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="default-email-open.html"
                            className="rounded-3 bg-transparent"
                          >
                            <div className="form-check mt-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blankCheckbox4"
                                defaultValue="option1"
                                aria-label
                              />
                              <label
                                className="text-grey-500 font-xssss"
                                htmlFor="blankCheckbox4"
                              />
                            </div>
                            <div className="email-user">
                              <span className="btn-round-xss ms-0 bg-dark me-2" />
                              <img
                                src="images/user-6.png"
                                alt="user"
                                className="w35 me-2"
                              />
                              <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                Goria Coast
                              </h6>
                            </div>
                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                              <i className="feather-star font-xss text-warning me-2" />
                              Mobile Apps Redesign
                            </div>
                            <div className="email-text text-grey-500 fw-600 font-xssss">
                              Hey Cak, Could you free now? Can you look and read
                              the brief first before...
                            </div>
                            <span className="email-file"></span>
                            <div className="email-time text-grey-500 fw-600">
                              12:48PM
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="default-email-open.html"
                            className="rounded-3 bg-lightblue theme-light-bg"
                          >
                            <div className="form-check mt-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blankCheckbox5"
                                defaultValue="option1"
                                aria-label
                              />
                              <label
                                className="text-grey-500 font-xssss"
                                htmlFor="blankCheckbox5"
                              />
                            </div>
                            <div className="email-user">
                              <span className="btn-round-xss ms-0 bg-success me-2" />
                              <img
                                src="images/user-5.png"
                                alt="user"
                                className="w35 me-2"
                              />
                              <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                Hurin Seary
                              </h6>
                            </div>
                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                              <i className="feather-star font-xss text-warning me-2" />
                              Mobile Apps Redesign
                            </div>
                            <div className="email-text text-grey-500 fw-600 font-xssss">
                              Hey Cak, Could you free now? Can you look and read
                              the brief first before...
                            </div>
                            <span className="email-file">
                              <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0" />
                            </span>
                            <div className="email-time text-grey-500 fw-600">
                              12:48PM
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="default-email-open.html"
                            className="rounded-3 bg-lightblue theme-light-bg"
                          >
                            <div className="form-check mt-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blankCheckbox6"
                                defaultValue="option1"
                                aria-label
                              />
                              <label
                                className="text-grey-500 font-xssss"
                                htmlFor="blankCheckbox6"
                              />
                            </div>
                            <div className="email-user">
                              <span className="btn-round-xss ms-0 bg-warning me-2" />
                              <span className="btn-round-sm bg-gold-gradiant me-2 ls-3 text-white font-xssss fw-700">
                                V
                              </span>
                              <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                David Goria
                              </h6>
                            </div>
                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                              <i className="feather-star font-xss text-warning me-2" />
                              Mobile Apps Redesign
                            </div>
                            <div className="email-text text-grey-500 fw-600 font-xssss">
                              Hey Cak, Could you free now? Can you look and read
                              the brief first before...
                            </div>
                            <span className="email-file"></span>
                            <div className="email-time text-grey-500 fw-600">
                              12:48PM
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="default-email-open.html"
                            className="rounded-3 bg-transparent"
                          >
                            <div className="form-check mt-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blankCheckbox7"
                                defaultValue="option1"
                                aria-label
                              />
                              <label
                                className="text-grey-500 font-xssss"
                                htmlFor="blankCheckbox7"
                              />
                            </div>
                            <div className="email-user">
                              <span className="btn-round-xss ms-0 bg-success me-2" />
                              <img
                                src="images/user-3.png"
                                alt="user"
                                className="w35 me-2"
                              />
                              <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                Seary Victor
                              </h6>
                            </div>
                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                              <i className="feather-star font-xss text-warning me-2" />
                              Mobile Apps Redesign
                            </div>
                            <div className="email-text text-grey-500 fw-600 font-xssss">
                              Hey Cak, Could you free now? Can you look and read
                              the brief first before...
                            </div>
                            <span className="email-file">
                              <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0" />
                            </span>
                            <div className="email-time text-grey-500 fw-600">
                              12:48PM
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="default-email-open.html"
                            className="rounded-3 bg-transparent"
                          >
                            <div className="form-check mt-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blankCheckbox8"
                                defaultValue="option1"
                                aria-label
                              />
                              <label
                                className="text-grey-500 font-xssss"
                                htmlFor="blankCheckbox8"
                              />
                            </div>
                            <div className="email-user">
                              <span className="btn-round-xss ms-0 bg-warning me-2" />
                              <img
                                src="images/user-2.png"
                                alt="user"
                                className="w35 me-2"
                              />
                              <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                Ana Seary
                              </h6>
                            </div>
                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                              <i className="feather-star font-xss text-warning me-2" />
                              Mobile Apps Redesign
                            </div>
                            <div className="email-text text-grey-500 fw-600 font-xssss">
                              Hey Cak, Could you free now? Can you look and read
                              the brief first before...
                            </div>
                            <span className="email-file"></span>
                            <div className="email-time text-grey-500 fw-600">
                              12:48PM
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="default-email-open.html"
                            className="rounded-3 bg-transparent"
                          >
                            <div className="form-check mt-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blankCheckbox9"
                                defaultValue="option1"
                                aria-label
                              />
                              <label
                                className="text-grey-500 font-xssss"
                                htmlFor="blankCheckbox9"
                              />
                            </div>
                            <div className="email-user">
                              <span className="btn-round-xss ms-0 bg-success me-2" />
                              <span className="btn-round-sm bg-primary-gradiant me-2 ls-3 text-white font-xssss fw-700">
                                UD
                              </span>
                              <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                Studio Express
                              </h6>
                            </div>
                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                              <i className="feather-star font-xss text-warning me-2" />
                              Mobile Apps Redesign
                            </div>
                            <div className="email-text text-grey-500 fw-600 font-xssss">
                              Hey Cak, Could you free now? Can you look and read
                              the brief first before...
                            </div>
                            <span className="email-file">
                              <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0" />
                            </span>
                            <div className="email-time text-grey-500 fw-600">
                              12:48PM
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="default-email-open.html"
                            className="rounded-3 bg-lightblue theme-light-bg"
                          >
                            <div className="form-check mt-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blankCheckbox10"
                                defaultValue="option1"
                                aria-label
                              />
                              <label
                                className="text-grey-500 font-xssss"
                                htmlFor="blankCheckbox10"
                              />
                            </div>
                            <div className="email-user">
                              <span className="btn-round-xss ms-0 bg-warning me-2" />
                              <span className="btn-round-sm bg-gold-gradiant me-2 ls-3 text-white font-xssss fw-700">
                                V
                              </span>
                              <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                David Goria
                              </h6>
                            </div>
                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                              <i className="feather-star font-xss text-warning me-2" />
                              Mobile Apps Redesign
                            </div>
                            <div className="email-text text-grey-500 fw-600 font-xssss">
                              Hey Cak, Could you free now? Can you look and read
                              the brief first before...
                            </div>
                            <span className="email-file"></span>
                            <div className="email-time text-grey-500 fw-600">
                              12:48PM
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="default-email-open.html"
                            className="rounded-3 bg-transparent"
                          >
                            <div className="form-check mt-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blankCheckbox11"
                                defaultValue="option1"
                                aria-label
                              />
                              <label
                                className="text-grey-500 font-xssss"
                                htmlFor="blankCheckbox11"
                              />
                            </div>
                            <div className="email-user">
                              <span className="btn-round-xss ms-0 bg-success me-2" />
                              <img
                                src="images/user-3.png"
                                alt="user"
                                className="w35 me-2"
                              />
                              <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                Seary Victor
                              </h6>
                            </div>
                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                              <i className="feather-star font-xss text-warning me-2" />
                              Mobile Apps Redesign
                            </div>
                            <div className="email-text text-grey-500 fw-600 font-xssss">
                              Hey Cak, Could you free now? Can you look and read
                              the brief first before...
                            </div>
                            <span className="email-file">
                              <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0" />
                            </span>
                            <div className="email-time text-grey-500 fw-600">
                              12:48PM
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="default-email-open.html"
                            className="rounded-3 bg-transparent"
                          >
                            <div className="form-check mt-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blankCheckbox12"
                                defaultValue="option1"
                                aria-label
                              />
                              <label
                                className="text-grey-500 font-xssss"
                                htmlFor="blankCheckbox12"
                              />
                            </div>
                            <div className="email-user">
                              <span className="btn-round-xss ms-0 bg-warning me-2" />
                              <img
                                src="images/user-2.png"
                                alt="user"
                                className="w35 me-2"
                              />
                              <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                Ana Seary
                              </h6>
                            </div>
                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                              <i className="feather-star font-xss text-warning me-2" />
                              Mobile Apps Redesign
                            </div>
                            <div className="email-text text-grey-500 fw-600 font-xssss">
                              Hey Cak, Could you free now? Can you look and read
                              the brief first before...
                            </div>
                            <span className="email-file"></span>
                            <div className="email-time text-grey-500 fw-600">
                              12:48PM
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="default-email-open.html"
                            className="rounded-3 bg-transparent"
                          >
                            <div className="form-check mt-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="blankCheckbox13"
                                defaultValue="option1"
                                aria-label
                              />
                              <label
                                className="text-grey-500 font-xssss"
                                htmlFor="blankCheckbox13"
                              />
                            </div>
                            <div className="email-user">
                              <span className="btn-round-xss ms-0 bg-success me-2" />
                              <span className="btn-round-sm bg-primary-gradiant me-2 ls-3 text-white font-xssss fw-700">
                                UD
                              </span>
                              <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-700">
                                Studio Express
                              </h6>
                            </div>
                            <div className="email-subject text-grey-900 text-dark fw-600 font-xssss">
                              <i className="feather-star font-xss text-warning me-2" />
                              Mobile Apps Redesign
                            </div>
                            <div className="email-text text-grey-500 fw-600 font-xssss">
                              Hey Cak, Could you free now? Can you look and read
                              the brief first before...
                            </div>
                            <span className="email-file">
                              <i className="feather-paperclip font-xss btn-round-sm text-grey-500 me-2 p-0" />
                            </span>
                            <div className="email-time text-grey-500 fw-600">
                              12:48PM
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* main content */}
          {/* right chat */}
          <div className="right-chat nav-wrap mt-2 right-scroll-bar">
            <div className="middle-sidebar-right-content bg-white shadow-xss rounded-xxl">
              {/* loader wrapper */}
              <div className="preloader-wrap p-3">
                <div className="box shimmer">
                  <div className="lines">
                    <div className="line s_shimmer" />
                    <div className="line s_shimmer" />
                    <div className="line s_shimmer" />
                    <div className="line s_shimmer" />
                  </div>
                </div>
                <div className="box shimmer mb-3">
                  <div className="lines">
                    <div className="line s_shimmer" />
                    <div className="line s_shimmer" />
                    <div className="line s_shimmer" />
                    <div className="line s_shimmer" />
                  </div>
                </div>
                <div className="box shimmer">
                  <div className="lines">
                    <div className="line s_shimmer" />
                    <div className="line s_shimmer" />
                    <div className="line s_shimmer" />
                    <div className="line s_shimmer" />
                  </div>
                </div>
              </div>
              {/* loader wrapper */}
              <div className="section full pe-3 ps-4 pt-4 position-relative feed-body">
                <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
                  CONTACTS
                </h4>
                <ul className="list-group list-group-flush">
                  <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                      <img
                        src="images/user-8.png"
                        alt="image"
                        className="w35"
                      />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                      <a
                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                        href="#"
                      >
                        Hurin Seary
                      </a>
                    </h3>
                    <span className="badge badge-primary text-white badge-pill fw-500 mt-0">
                      2
                    </span>
                  </li>
                  <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                      <img
                        src="images/user-7.png"
                        alt="image"
                        className="w35"
                      />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                      <a
                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                        href="#"
                      >
                        Victor Exrixon
                      </a>
                    </h3>
                    <span className="bg-success ms-auto btn-round-xss" />
                  </li>
                  <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                      <img
                        src="images/user-6.png"
                        alt="image"
                        className="w35"
                      />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                      <a
                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                        href="#"
                      >
                        Surfiya Zakir
                      </a>
                    </h3>
                    <span className="bg-warning ms-auto btn-round-xss" />
                  </li>
                  <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                      <img
                        src="images/user-5.png"
                        alt="image"
                        className="w35"
                      />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                      <a
                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                        href="#"
                      >
                        Goria Coast
                      </a>
                    </h3>
                    <span className="bg-success ms-auto btn-round-xss" />
                  </li>
                  <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                      <img
                        src="images/user-4.png"
                        alt="image"
                        className="w35"
                      />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                      <a
                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                        href="#"
                      >
                        Hurin Seary
                      </a>
                    </h3>
                    <span className="badge mt-0 text-grey-500 badge-pill pe-0 font-xsssss">
                      4:09 pm
                    </span>
                  </li>
                  <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                      <img
                        src="images/user-3.png"
                        alt="image"
                        className="w35"
                      />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                      <a
                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                        href="#"
                      >
                        David Goria
                      </a>
                    </h3>
                    <span className="badge mt-0 text-grey-500 badge-pill pe-0 font-xsssss">
                      2 days
                    </span>
                  </li>
                  <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                      <img
                        src="images/user-2.png"
                        alt="image"
                        className="w35"
                      />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                      <a
                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                        href="#"
                      >
                        Seary Victor
                      </a>
                    </h3>
                    <span className="bg-success ms-auto btn-round-xss" />
                  </li>
                  <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <figure className="avatar float-left mb-0 me-2">
                      <img
                        src="images/user-12.png"
                        alt="image"
                        className="w35"
                      />
                    </figure>
                    <h3 className="fw-700 mb-0 mt-0">
                      <a
                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                        href="#"
                      >
                        Ana Seary
                      </a>
                    </h3>
                    <span className="bg-success ms-auto btn-round-xss" />
                  </li>
                </ul>
              </div>
              <div className="section full pe-3 ps-4 pt-4 pb-4 position-relative feed-body">
                <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
                  GROUPS
                </h4>
                <ul className="list-group list-group-flush">
                  <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <span className="btn-round-sm bg-primary-gradiant me-3 ls-3 text-white font-xssss fw-700">
                      UD
                    </span>
                    <h3 className="fw-700 mb-0 mt-0">
                      <a
                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                        href="#"
                      >
                        Studio Express
                      </a>
                    </h3>
                    <span className="badge mt-0 text-grey-500 badge-pill pe-0 font-xsssss">
                      2 min
                    </span>
                  </li>
                  <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <span className="btn-round-sm bg-gold-gradiant me-3 ls-3 text-white font-xssss fw-700">
                      UD
                    </span>
                    <h3 className="fw-700 mb-0 mt-0">
                      <a
                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                        href="#"
                      >
                        Armany Design
                      </a>
                    </h3>
                    <span className="bg-warning ms-auto btn-round-xss" />
                  </li>
                  <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <span className="btn-round-sm bg-mini-gradiant me-3 ls-3 text-white font-xssss fw-700">
                      UD
                    </span>
                    <h3 className="fw-700 mb-0 mt-0">
                      <a
                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                        href="#"
                      >
                        De fabous
                      </a>
                    </h3>
                    <span className="bg-success ms-auto btn-round-xss" />
                  </li>
                </ul>
              </div>
              <div className="section full pe-3 ps-4 pt-0 pb-4 position-relative feed-body">
                <h4 className="font-xsssss text-grey-500 text-uppercase fw-700 ls-3">
                  Pages
                </h4>
                <ul className="list-group list-group-flush">
                  <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <span className="btn-round-sm bg-primary-gradiant me-3 ls-3 text-white font-xssss fw-700">
                      UD
                    </span>
                    <h3 className="fw-700 mb-0 mt-0">
                      <a
                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                        href="#"
                      >
                        Armany Seary
                      </a>
                    </h3>
                    <span className="bg-success ms-auto btn-round-xss" />
                  </li>
                  <li className="bg-transparent list-group-item no-icon pe-0 ps-0 pt-2 pb-2 border-0 d-flex align-items-center">
                    <span className="btn-round-sm bg-gold-gradiant me-3 ls-3 text-white font-xssss fw-700">
                      UD
                    </span>
                    <h3 className="fw-700 mb-0 mt-0">
                      <a
                        className="font-xssss text-grey-600 d-block text-dark model-popup-chat"
                        href="#"
                      >
                        Entropio Inc
                      </a>
                    </h3>
                    <span className="bg-success ms-auto btn-round-xss" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* right chat */}
          <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
            <a href="default.html" className="nav-content-bttn nav-center">
              <i className="feather-home" />
            </a>
            <a href="default-video.html" className="nav-content-bttn">
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
        <div
          className="modal bottom side fade"
          id="Modalstries"
          tabIndex={-1}
          role="dialog"
          style={{ overflowY: "auto" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 bg-transparent">
              <button
                type="button"
                className="close mt-0 position-absolute top--30 right--10"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti-close text-white font-xssss" />
              </button>
              <div className="modal-body p-0">
                <div className="card w-100 border-0 rounded-3 overflow-hidden bg-gradiant-bottom bg-gradiant-top">
                  <div className="owl-carousel owl-theme dot-style3 story-slider owl-dot-nav nav-none">
                    <div className="item">
                      <img src="images/story-5.jpg" alt="image" />
                    </div>
                    <div className="item">
                      <img src="images/story-6.jpg" alt="image" />
                    </div>
                    <div className="item">
                      <img src="images/story-7.jpg" alt="image" />
                    </div>
                    <div className="item">
                      <img src="images/story-8.jpg" alt="image" />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3 mb-0 p-3 position-absolute bottom-0 z-index-1 w-100">
                  <input
                    type="text"
                    className="style2-input w-100 bg-transparent border-light-md p-3 pe-5 font-xssss fw-500 text-white"
                    defaultValue="Write Comments"
                  />
                  <span
                    className="feather-send text-white font-md text-white position-absolute"
                    style={{ bottom: 35, right: 30 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-popup-chat">
          <div className="modal-popup-wrap bg-white p-0 shadow-lg rounded-3">
            <div className="modal-popup-header w-100 border-bottom">
              <div className="card p-3 d-block border-0 d-block">
                <figure className="avatar mb-0 float-left me-2">
                  <img
                    src="images/user-12.png"
                    alt="image"
                    className="w35 me-1"
                  />
                </figure>
                <h5 className="fw-700 text-primary font-xssss mt-1 mb-1">
                  Hendrix Stamp
                </h5>
                <h4 className="text-grey-500 font-xsssss mt-0 mb-0">
                  <span className="d-inline-block bg-success btn-round-xss m-0" />{" "}
                  Available
                </h4>
                <a
                  href="#"
                  className="font-xssss position-absolute right-0 top-0 mt-3 me-4"
                >
                  <i className="ti-close text-grey-900 mt-2 d-inline-block" />
                </a>
              </div>
            </div>
            <div className="modal-popup-body w-100 p-3 h-auto">
              <div className="message">
                <div className="message-content font-xssss lh-24 fw-500">
                  Hi, how can I help you?
                </div>
              </div>
              <div className="date-break font-xsssss lh-24 fw-500 text-grey-500 mt-2 mb-2">
                Mon 10:20am
              </div>
              <div className="message self text-right mt-2">
                <div className="message-content font-xssss lh-24 fw-500">
                  I want those files for you. I want you to send 1 PDF and 1
                  image file.
                </div>
              </div>
              <div
                className="snippet pt-3 ps-4 pb-2 pe-3 mt-2 bg-grey rounded-xl float-right"
                data-title=".dot-typing"
              >
                <div className="stage">
                  <div className="dot-typing" />
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="modal-popup-footer w-100 border-top">
              <div className="card p-3 d-block border-0 d-block">
                <div className="form-group icon-right-input style1-input mb-0">
                  <input
                    type="text"
                    placeholder="Start typing.."
                    className="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 ps-3"
                  />
                  <i className="feather-send text-grey-500 font-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mirrored from uitheme.net/sociala/default-email-box.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 03 Mar 2023 23:30:29 GMT */}
      </div>
    </div>
  );
};

export default EmailBox;
