import React from "react";

const PaymentCard = () => {
  return (
    <div>
      {/* Mirrored from uitheme.net/sociala/payment.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 03 Mar 2023 23:33:37 GMT */}
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
            <img src="images/profile-4.png" alt="user" className="w40 mt--1" />
          </a>
        </div>
        {/* navigation top */}
        {/* navigation left */}
        <nav className="navigation scroll-bar">
          <div className="container ps-0 pe-0">
            <div className="nav-content">
              <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                <div className="nav-caption fw-600 font-xssss text-grey-500">
                  <span>New </span>Feeds
                </div>
                <ul className="mb-1 top-content">
                  <li className="logo d-none d-xl-block d-lg-block" />
                  <li>
                    <a
                      href="default.html"
                      className="nav-content-bttn open-font"
                    >
                      <i className="feather-tv btn-round-md bg-blue-gradiant me-3" />
                      <span>Newsfeed</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-badge.html"
                      className="nav-content-bttn open-font"
                    >
                      <i className="feather-award btn-round-md bg-red-gradiant me-3" />
                      <span>Badges</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-storie.html"
                      className="nav-content-bttn open-font"
                    >
                      <i className="feather-globe btn-round-md bg-gold-gradiant me-3" />
                      <span>Explore Stories</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-group.html"
                      className="nav-content-bttn open-font"
                    >
                      <i className="feather-zap btn-round-md bg-mini-gradiant me-3" />
                      <span>Popular Groups</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="user-page.html"
                      className="nav-content-bttn open-font"
                    >
                      <i className="feather-user btn-round-md bg-primary-gradiant me-3" />
                      <span>Author Profile </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
                <div className="nav-caption fw-600 font-xssss text-grey-500">
                  <span>More </span>Pages
                </div>
                <ul className="mb-3">
                  <li>
                    <a
                      href="default-email-box.html"
                      className="nav-content-bttn open-font"
                    >
                      <i className="font-xl text-current feather-inbox me-3" />
                      <span>Email Box</span>
                      <span className="circle-count bg-warning mt-1">584</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-hotel.html"
                      className="nav-content-bttn open-font"
                    >
                      <i className="font-xl text-current feather-home me-3" />
                      <span>Near Hotel</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-event.html"
                      className="nav-content-bttn open-font"
                    >
                      <i className="font-xl text-current feather-map-pin me-3" />
                      <span>Latest Event</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-live-stream.html"
                      className="nav-content-bttn open-font"
                    >
                      <i className="font-xl text-current feather-youtube me-3" />
                      <span>Live Stream</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                <div className="nav-caption fw-600 font-xssss text-grey-500">
                  <span /> Account
                </div>
                <ul className="mb-1">
                  <li className="logo d-none d-xl-block d-lg-block" />
                  <li>
                    <a
                      href="default-settings.html"
                      className="nav-content-bttn open-font h-auto pt-2 pb-2"
                    >
                      <i className="font-sm feather-settings me-3 text-grey-500" />
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-analytics.html"
                      className="nav-content-bttn open-font h-auto pt-2 pb-2"
                    >
                      <i className="font-sm feather-pie-chart me-3 text-grey-500" />
                      <span>Analytics</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="default-message.html"
                      className="nav-content-bttn open-font h-auto pt-2 pb-2"
                    >
                      <i className="font-sm feather-message-square me-3 text-grey-500" />
                      <span>Chat</span>
                      <span className="circle-count bg-warning mt-0">23</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* navigation left */}
        {/* main content */}
        <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left">
              <div className="middle-wrap">
                <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                  <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
                    <a
                      href="default-settings.html"
                      className="d-inline-block mt-2"
                    >
                      <i className="ti-arrow-left font-sm text-white" />
                    </a>
                    <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">
                      Payment Method
                    </h4>
                  </div>
                  <div className="card-body p-lg-5 p-4 w-100 border-0">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="col-lg-12 ps-0">
                          <h4 className="mb-4 font-lg fw-700 mont-font mb-5">
                            Saved Card{" "}
                          </h4>
                        </div>
                        <div className="cleafrfix" />
                        <div className="card border-0 shadow-none mb-4 mt-3">
                          <div className="card-body d-block text-left p-0">
                            <div className="item w-100 h150 bg-white rounded-xxl overflow-hidden text-left shadow-md ps-3 pt-2 align-items-end flex-column d-flex">
                              <div className="card border-0 shadow-none p-0 bg-transparent-card text-left w-100">
                                <div className="row">
                                  <div className="col-6">
                                    <img
                                      src="images/b-9.png"
                                      alt="icon"
                                      className="w40 float-left d-inline-block"
                                    />
                                  </div>
                                  <div className="col-6 text-right pe-4">
                                    <img
                                      src="images/chip.png"
                                      alt="icon"
                                      className="w30 float-right d-inline-block mt-2 me-2"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="card border-0 shadow-none p-0 bg-transparent-card text-left w-100 mt-auto">
                                <h4 className="text-grey-900 font-sm fw-700 mont-font mb-3 text-dark-color">
                                  $ 5960.00{" "}
                                  <span className="d-block fw-500 text-grey-500 font-xssss mt-1 text-dark-color">
                                    Debit Card
                                  </span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 shadow-none mb-4">
                          <div className="card-bod6 d-block text-left 2 fw-600-0">
                            <div className="item w-100 h150 bg-gold-gradiant rounded-xxl overflow-hidden text-left shadow-md ps-3 pt-2 align-items-end flex-column d-flex">
                              <div className="card bg-transparent border-0 bg-transparent-card shadow-none p-0 text-left w-100">
                                <div className="row">
                                  <div className="col-6">
                                    <img
                                      src="images/b-14.png"
                                      alt="icon"
                                      className="w90 float-left d-inline-block"
                                    />
                                  </div>
                                  <div className="col-6 text-right pe-4">
                                    <img
                                      src="images/chip.png"
                                      alt="icon"
                                      className="w30 float-right d-inline-block mt-2 me-2 rounded-xxl"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="card bg-transparent border-0 bg-transparent-card shadow-none p-0 text-left w-100 mt-auto">
                                <h4 className="text-white font-sm fw-700 mont-font mb-3">
                                  $ 5960.00{" "}
                                  <span className="d-block fw-500 text-white font-xssss mt-1">
                                    Debit Card
                                  </span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card border-0 mb-4 shadow-none">
                          <div className="card-body d-block text-left p-0">
                            <div className="item w-100 h150 bg-primary rounded-xxl text-left shadow-md ps-3 pt-2 align-items-end flex-column d-flex">
                              <div className="card bg-transparent border-0 bg-transparent-card shadow-none p-0 text-left w-100">
                                <div className="row">
                                  <div className="col-6">
                                    <img
                                      src="images/b-10.png"
                                      alt="icon"
                                      className="w40 float-left d-inline-block"
                                    />
                                  </div>
                                  <div className="col-6 text-right pe-4">
                                    <img
                                      src="images/chip.png"
                                      alt="icon"
                                      className="w30 float-right d-inline-block mt-2 me-2 rounded-3"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="card bg-transparent border-0 bg-transparent-card shadow-none p-0 text-left w-100 mt-auto">
                                <h4 className="text-white mb-3 font-sm fw-700 mont-font">
                                  $ 2260.00{" "}
                                  <span className="d-block fw-500 text-grey-300 font-xssss mt-1">
                                    Debit Card
                                  </span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="rounded-xxl border-dashed mb-2 p-3 w-100 fw-600 fw-700 text-center font-xssss mont-font text-uppercase ls-3 text-grey-900 d-block  text-dark"
                        >
                          Add Card
                        </a>
                      </div>
                      <div className="col-lg-6 offset-lg-1">
                        <div className="rounded-xxl bg-greylight h-100 p-3">
                          <div className="col-lg-12 ps-0">
                            {/* <h4 class="mb-4 font-xs fw-700 mont-font mt-0">Add Card </h4> */}
                          </div>
                          <div className="col-lg-12">
                            <div className="item ms-auto me-auto mt-3 w-100 h150 bg-white rounded-xxl text-left shadow-lg ps-3 pt-2 align-items-end flex-column d-flex">
                              <div className="card border-0 bg-transparent-card shadow-none p-0 text-left w-100">
                                <div className="row">
                                  <div className="col-6 ps-2">
                                    <img
                                      src="images/b-17.png"
                                      alt="icon"
                                      className="w60 float-left d-inline-block"
                                    />
                                  </div>
                                  <div className="col-6 text-right pe-4">
                                    <img
                                      src="images/chip.png"
                                      alt="icon"
                                      className="w30 float-right d-inline-block mt-2 me-2"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="card border-0 bg-transparent-card shadow-none p-0 text-left w-100 mt-auto">
                                <h4 className="text-grey-900 font-sm fw-700 mont-font text-dark-color">
                                  **** **** **** 2234{" "}
                                  <span className="d-block fw-500 text-grey-500 font-xssss mt-0 mb-3 text-dark-color">
                                    Credit Card
                                  </span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 mt-5">
                            <form>
                              <div className="form-group mb-1">
                                <label
                                  className="text-dark-color text-grey-600 font-xssss mb-2 fw-600"
                                  htmlFor="exampleInputPassword1"
                                >
                                  Card Number
                                </label>
                                <div className="form-group icon-tab">
                                  <input
                                    type="text"
                                    className="bg-white font-xsss border-0 rounded-3 form-control ps-4 bg-color-none border-bottom text-grey-900"
                                    placeholder="1234 1234 1234 1234"
                                  />
                                </div>
                              </div>
                              <div className="form-group mb-1">
                                <label
                                  className="text-dark-color text-grey-600 font-xssss mb-2 fw-600"
                                  htmlFor="exampleInputPassword1"
                                >
                                  Card Holder Name
                                </label>
                                <div className="form-group icon-tab">
                                  <input
                                    type="text"
                                    className="bg-white border-0 rounded-3 form-control ps-4 bg-color-none border-bottom text-grey-900"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-6">
                                  <div className="form-group mb-1">
                                    <label
                                      className="text-dark-color text-grey-600 font-xssss mb-2 fw-600"
                                      htmlFor="exampleInputPassword1"
                                    >
                                      Month
                                    </label>
                                    <div className="form-group icon-tab">
                                      <input
                                        type="text"
                                        className="bg-white border-0 rounded-3 form-control ps-4 bg-color-none border-bottom text-grey-900"
                                        placeholder={03}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="form-group mb-1">
                                    <label
                                      className="text-dark-color text-grey-600 font-xssss mb-2 fw-600"
                                      htmlFor="exampleInputPassword1"
                                    >
                                      Year
                                    </label>
                                    <div className="form-group icon-tab">
                                      <input
                                        type="text"
                                        className="bg-white border-0 rounded-3 form-control ps-4 bg-color-none border-bottom text-grey-900"
                                        placeholder={2021}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <a
                                    href="#"
                                    className="rounded-3 bg-current mb-2 mt-4 p-3 w-100 fw-600 fw-700 text-center font-xssss mont-font text-uppercase ls-3 text-white d-block"
                                  >
                                    Add Card
                                  </a>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="card w-100 border-0 p-2"></div> */}
              </div>
            </div>
          </div>
        </div>
        {/* main content */}
        {/* right chat */}
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
                    <img src="images/user-8.png" alt="image" className="w35" />
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
                    <img src="images/user-7.png" alt="image" className="w35" />
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
                    <img src="images/user-6.png" alt="image" className="w35" />
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
                    <img src="images/user-5.png" alt="image" className="w35" />
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
                    <img src="images/user-4.png" alt="image" className="w35" />
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
                    <img src="images/user-3.png" alt="image" className="w35" />
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
                    <img src="images/user-2.png" alt="image" className="w35" />
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
                    <img src="images/user-12.png" alt="image" className="w35" />
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
      {/* Mirrored from uitheme.net/sociala/payment.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 03 Mar 2023 23:33:42 GMT */}
    </div>
  );
};

export default PaymentCard;
