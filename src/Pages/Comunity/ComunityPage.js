import React from "react";

const ComunityPage = () => {
  return (
    <div>
      {/* Mirrored from uitheme.net/sociala/group-page.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 03 Mar 2023 23:23:33 GMT */}
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
      <link rel="stylesheet" href="css/lightbox.css" />
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
                src="../../Assets/images/user-8.png"
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
                src="../../Assets/images/user-4.png"
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
                src="../../Assets/images/user-7.png"
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
                src="../../Assets/images/user-6.png"
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
              src="../../Assets/images/profile-4.png"
              alt="user"
              className="w40 mt--1"
            />
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
        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left">
              <div className="row">
                <div className="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                  <div className="card w-100 shadow-xss rounded-xxl overflow-hidden border-0 mb-3 mt-3 pb-3">
                    <div
                      className="card-body position-relative h150 bg-image-cover bg-image-center"
                      style={{ backgroundImage: "url(images/bb-9.jpg)" }}
                    />
                    <div className="card-body d-block pt-4 text-center">
                      <figure className="avatar mt--6 position-relative w75 z-index-1 w100 z-index-1 ms-auto me-auto">
                        <img
                          src="../../Assets/images/pt-1.jpg"
                          alt="image"
                          className="p-1 bg-white rounded-xl w-100"
                        />
                      </figure>
                      <h4 className="font-xs ls-1 fw-700 text-grey-900">
                        Surfiya Zakir{" "}
                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                          @surfiyazakir22
                        </span>
                      </h4>
                    </div>
                    <div className="card-body d-flex align-items-center ps-4 pe-4 pt-0">
                      <h4 className="font-xsssss text-center text-grey-500 fw-600 ms-2 me-2">
                        <b className="text-grey-900 mb-1 font-xss fw-700 d-inline-block ls-3 text-dark">
                          456{" "}
                        </b>{" "}
                        Posts
                      </h4>
                      <h4 className="font-xsssss text-center text-grey-500 fw-600 ms-2 me-2">
                        <b className="text-grey-900 mb-1 font-xss fw-700 d-inline-block ls-3 text-dark">
                          2.1k{" "}
                        </b>{" "}
                        Followers
                      </h4>
                      <h4 className="font-xsssss text-center text-grey-500 fw-600 ms-2 me-2">
                        <b className="text-grey-900 mb-1 font-xss fw-700 d-inline-block ls-3 text-dark">
                          32k{" "}
                        </b>{" "}
                        Follow
                      </h4>
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-center ps-4 pe-4 pt-0">
                      <a
                        href="#"
                        className="bg-success p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3"
                      >
                        Add Friend
                      </a>
                      <a
                        href="#"
                        className="bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"
                      >
                        <i className="feather-mail font-md" />
                      </a>
                      <a
                        href="#"
                        className="bg-greylight theme-white-bg btn-round-lg ms-2 rounded-3 text-grey-700"
                      >
                        <i className="ti-more font-md" />
                      </a>
                    </div>
                  </div>
                  <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                    <div className="card-body d-block p-4">
                      <h4 className="fw-700 mb-3 font-xsss text-grey-900">
                        About
                      </h4>
                      <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi nulla dolor, ornare at commodo non, feugiat non
                        nisi. Phasellus faucibus mollis pharetra. Proin blandit
                        ac massa sed rhoncus
                      </p>
                    </div>
                    <div className="card-body border-top-xs d-flex">
                      <i className="feather-lock text-grey-500 me-3 font-lg" />
                      <h4 className="fw-700 text-grey-900 font-xssss mt-0">
                        Private{" "}
                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                          What's up, how are you?
                        </span>
                      </h4>
                    </div>
                    <div className="card-body d-flex pt-0">
                      <i className="feather-eye text-grey-500 me-3 font-lg" />
                      <h4 className="fw-700 text-grey-900 font-xssss mt-0">
                        Visble{" "}
                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                          Anyone can find you
                        </span>
                      </h4>
                    </div>
                    <div className="card-body d-flex pt-0">
                      <i className="feather-map-pin text-grey-500 me-3 font-lg" />
                      <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                        Flodia, Austia{" "}
                      </h4>
                    </div>
                    <div className="card-body d-flex pt-0">
                      <i className="feather-users text-grey-500 me-3 font-lg" />
                      <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                        Genarel Group
                      </h4>
                    </div>
                  </div>
                  <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                    <div className="card-body d-flex align-items-center  p-4">
                      <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                        Photos
                      </h4>
                      <a
                        href="#"
                        className="fw-600 ms-auto font-xssss text-primary"
                      >
                        See all
                      </a>
                    </div>
                    <div className="card-body d-block pt-0 pb-2">
                      <div className="row">
                        <div className="col-6 mb-2 pe-1">
                          <a href="images/e-2.jpg" data-lightbox="roadtrip">
                            <img
                              src="../../Assets/images/e-2.jpg"
                              alt="image"
                              className="img-fluid rounded-3 w-100"
                            />
                          </a>
                        </div>
                        <div className="col-6 mb-2 ps-1">
                          <a href="images/e-3.jpg" data-lightbox="roadtrip">
                            <img
                              src="../../Assets/images/e-3.jpg"
                              alt="image"
                              className="img-fluid rounded-3 w-100"
                            />
                          </a>
                        </div>
                        <div className="col-6 mb-2 pe-1">
                          <a href="images/e-4.jpg" data-lightbox="roadtrip">
                            <img
                              src="../../Assets/images/e-4.jpg"
                              alt="image"
                              className="img-fluid rounded-3 w-100"
                            />
                          </a>
                        </div>
                        <div className="col-6 mb-2 ps-1">
                          <a href="images/e-5.jpg" data-lightbox="roadtrip">
                            <img
                              src="../../Assets/images/e-5.jpg"
                              alt="image"
                              className="img-fluid rounded-3 w-100"
                            />
                          </a>
                        </div>
                        <div className="col-6 mb-2 pe-1">
                          <a href="images/e-2.jpg" data-lightbox="roadtrip">
                            <img
                              src="../../Assets/images/e-2.jpg"
                              alt="image"
                              className="img-fluid rounded-3 w-100"
                            />
                          </a>
                        </div>
                        <div className="col-6 mb-2 ps-1">
                          <a href="images/e-1.jpg" data-lightbox="roadtrip">
                            <img
                              src="../../Assets/images/e-1.jpg"
                              alt="image"
                              className="img-fluid rounded-3 w-100"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-block w-100 pt-0">
                      <a
                        href="#"
                        className="p-2 lh-28 w-100 d-block bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"
                      >
                        <i className="feather-external-link font-xss me-2" />{" "}
                        More
                      </a>
                    </div>
                  </div>
                  <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                    <div className="card-body d-flex align-items-center  p-4">
                      <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                        Event
                      </h4>
                      <a
                        href="#"
                        className="fw-600 ms-auto font-xssss text-primary"
                      >
                        See all
                      </a>
                    </div>
                    <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                      <div className="bg-success me-2 p-3 rounded-xxl">
                        <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                          <span className="ls-1 d-block font-xsss text-white fw-600">
                            FEB
                          </span>
                          22
                        </h4>
                      </div>
                      <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                        Meeting with clients{" "}
                        <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
                          41 madison ave, floor 24 new work, NY 10010
                        </span>{" "}
                      </h4>
                    </div>
                    <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                      <div className="bg-warning me-2 p-3 rounded-xxl">
                        <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                          <span className="ls-1 d-block font-xsss text-white fw-600">
                            APR
                          </span>
                          30
                        </h4>
                      </div>
                      <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                        Developer Programe{" "}
                        <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
                          41 madison ave, floor 24 new work, NY 10010
                        </span>{" "}
                      </h4>
                    </div>
                    <div className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden">
                      <div className="bg-primary me-2 p-3 rounded-xxl">
                        <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                          <span className="ls-1 d-block font-xsss text-white fw-600">
                            APR
                          </span>
                          23
                        </h4>
                      </div>
                      <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                        Aniversary Event{" "}
                        <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
                          41 madison ave, floor 24 new work, NY 10010
                        </span>{" "}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-xxl-9 col-lg-8">
                  <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3 mt-3">
                    <div className="card-body p-0">
                      <a
                        href="#"
                        className=" font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"
                      >
                        <i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight" />
                        Create Post
                      </a>
                    </div>
                    <div className="card-body p-0 mt-3 position-relative">
                      <figure className="avatar position-absolute ms-2 mt-1 top-5">
                        <img
                          src="../../Assets/images/user-8.png"
                          alt="image"
                          className="shadow-sm rounded-circle w30"
                        />
                      </figure>
                      <textarea
                        name="message"
                        className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg"
                        cols={30}
                        rows={10}
                        placeholder="What's on your mind?"
                        defaultValue={""}
                      />
                    </div>
                    <div className="card-body d-flex p-0 mt-0">
                      <a
                        href="#"
                        className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
                      >
                        <i className="font-md text-danger feather-video me-2" />
                        <span className="d-none-xs">Live Video</span>
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
                      >
                        <i className="font-md text-success feather-image me-2" />
                        <span className="d-none-xs">Photo/Video</span>
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
                      >
                        <i className="font-md text-warning feather-camera me-2" />
                        <span className="d-none-xs">Feeling/Activity</span>
                      </a>
                      <a
                        href="#"
                        className="ms-auto"
                        id="dropdownMenu4"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                        aria-labelledby="dropdownMenu4"
                      >
                        <div className="card-body p-0 d-flex">
                          <i className="feather-bookmark text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                            Save Link{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Add this to your saved items
                            </span>
                          </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                          <i className="feather-alert-circle text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                            Hide Post{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Save to your saved items
                            </span>
                          </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                          <i className="feather-alert-octagon text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                            Hide all from Group{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Save to your saved items
                            </span>
                          </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                          <i className="feather-lock text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                            Unfollow Group{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Save to your saved items
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
                    <div className="card-body p-0 d-flex">
                      <figure className="avatar me-3">
                        <img
                          src="../../Assets/images/user-7.png"
                          alt="image"
                          className="shadow-sm rounded-circle w45"
                        />
                      </figure>
                      <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                        Anthony Daugloi{" "}
                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                          3 hour ago
                        </span>
                      </h4>
                      <a
                        href="#"
                        className="ms-auto"
                        id="dropdownMenu21"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                        aria-labelledby="dropdownMenu21"
                      >
                        <div className="card-body p-0 d-flex">
                          <i className="feather-bookmark text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                            Save Link{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Add this to your saved items
                            </span>
                          </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                          <i className="feather-alert-circle text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                            Hide Post{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Save to your saved items
                            </span>
                          </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                          <i className="feather-alert-octagon text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                            Hide all from Group{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Save to your saved items
                            </span>
                          </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                          <i className="feather-lock text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                            Unfollow Group{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Save to your saved items
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0 me-lg-5">
                      <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi nulla dolor, ornare at commodo non, feugiat non
                        nisi. Phasellus faucibus mollis pharetra. Proin blandit
                        ac massa sed rhoncus{" "}
                        <a href="#" className="fw-600 text-primary ms-2">
                          See more
                        </a>
                      </p>
                    </div>
                    <div className="card-body d-block p-0">
                      <div className="row ps-2 pe-2">
                        <div className="col-xs-4 col-sm-4 p-1">
                          <a href="images/t-10.jpg" data-lightbox="roadtrip">
                            <img
                              src="../../Assets/images/t-10.jpg"
                              className="rounded-3 w-100"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="col-xs-4 col-sm-4 p-1">
                          <a href="images/t-11.jpg" data-lightbox="roadtrip">
                            <img
                              src="../../Assets/images/t-11.jpg"
                              className="rounded-3 w-100"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="col-xs-4 col-sm-4 p-1">
                          <a
                            href="images/t-12.jpg"
                            data-lightbox="roadtrip"
                            className="position-relative d-block"
                          >
                            <img
                              src="../../Assets/images/t-12.jpg"
                              className="rounded-3 w-100"
                              alt="image"
                            />
                            <span className="img-count font-sm text-white ls-3 fw-600">
                              <b>+2</b>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex p-0 mt-3">
                      <a
                        href="#"
                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"
                      >
                        <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                        <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                        2.8K Like
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                      >
                        <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                        22 Comment
                      </a>
                      <a
                        href="#"
                        className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                      >
                        <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                        <span className="d-none-xs">Share</span>
                      </a>
                    </div>
                  </div>
                  <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-0">
                    <div className="card-body p-0 d-flex">
                      <figure className="avatar me-3">
                        <img
                          src="../../Assets/images/user-8.png"
                          alt="image"
                          className="shadow-sm rounded-circle w45"
                        />
                      </figure>
                      <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                        Anthony Daugloi{" "}
                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                          2 hour ago
                        </span>
                      </h4>
                      <a
                        href="#"
                        className="ms-auto"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                        aria-labelledby="dropdownMenu2"
                      >
                        <div className="card-body p-0 d-flex">
                          <i className="feather-bookmark text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                            Save Link{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Add this to your saved items
                            </span>
                          </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                          <i className="feather-alert-circle text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                            Hide Post{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Save to your saved items
                            </span>
                          </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                          <i className="feather-alert-octagon text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                            Hide all from Group{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Save to your saved items
                            </span>
                          </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                          <i className="feather-lock text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                            Unfollow Group{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Save to your saved items
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0 me-lg-5">
                      <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi nulla dolor, ornare at commodo non, feugiat non
                        nisi. Phasellus faucibus mollis pharetra. Proin blandit
                        ac massa sed rhoncus{" "}
                        <a href="#" className="fw-600 text-primary ms-2">
                          See more
                        </a>
                      </p>
                    </div>
                    <div className="card-body d-flex p-0">
                      <a
                        href="#"
                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"
                      >
                        <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                        <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                        2.8K Like
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                      >
                        <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                        22 Comment
                      </a>
                      <a
                        href="#"
                        className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                      >
                        <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                        <span className="d-none-xs">Share</span>
                      </a>
                    </div>
                  </div>
                  <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3 mt-3">
                    <div className="card-body p-0 d-flex">
                      <figure className="avatar me-3">
                        <img
                          src="../../Assets/images/user-8.png"
                          alt="image"
                          className="shadow-sm rounded-circle w45"
                        />
                      </figure>
                      <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                        Anthony Daugloi{" "}
                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                          2 hour ago
                        </span>
                      </h4>
                      <a
                        href="#"
                        className="ms-auto"
                        id="dropdownMenu5"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                        aria-labelledby="dropdownMenu5"
                      >
                        <div className="card-body p-0 d-flex">
                          <i className="feather-bookmark text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                            Save Link{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Add this to your saved items
                            </span>
                          </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                          <i className="feather-alert-circle text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                            Hide Post{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Save to your saved items
                            </span>
                          </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                          <i className="feather-alert-octagon text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-4">
                            Hide all from Group{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Save to your saved items
                            </span>
                          </h4>
                        </div>
                        <div className="card-body p-0 d-flex mt-2">
                          <i className="feather-lock text-grey-500 me-3 font-lg" />
                          <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                            Unfollow Group{" "}
                            <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                              Save to your saved items
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0 mb-3 rounded-3 overflow-hidden">
                      <a href="#" className="video-btn">
                        <video autoPlay loop className="float-right w-100">
                          <source
                            src="../../Assets/images/v-2.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </a>
                    </div>
                    <div className="card-body p-0 me-lg-5">
                      <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi nulla dolor, ornare at commodo non, feugiat non
                        nisi. Phasellus faucibus mollis pharetra. Proin blandit
                        ac massa sed rhoncus{" "}
                        <a href="#" className="fw-600 text-primary ms-2">
                          See more
                        </a>
                      </p>
                    </div>
                    <div className="card-body d-flex p-0">
                      <a
                        href="#"
                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"
                      >
                        <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                        <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                        2.8K Like
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                      >
                        <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                        22 Comment
                      </a>
                      <a
                        href="#"
                        className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                      >
                        <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                        <span className="d-none-xs">Share</span>
                      </a>
                    </div>
                  </div>
                  <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-4">
                    <div className="card-body p-0 d-flex">
                      <figure className="avatar me-3">
                        <img
                          src="../../Assets/images/user-8.png"
                          alt="image"
                          className="shadow-sm rounded-circle w45"
                        />
                      </figure>
                      <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                        Anthony Daugloi{" "}
                        <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                          2 hour ago
                        </span>
                      </h4>
                      <a href="#" className="ms-auto">
                        <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                      </a>
                    </div>
                    <div className="card-body p-0 me-lg-5">
                      <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi nulla dolor, ornare at commodo non, feugiat non
                        nisi. Phasellus faucibus mollis pharetra. Proin blandit
                        ac massa sed rhoncus{" "}
                        <a href="#" className="fw-600 text-primary ms-2">
                          See more
                        </a>
                      </p>
                    </div>
                    <div className="card-body d-block p-0 mb-3">
                      <div className="row ps-2 pe-2">
                        <div className="col-xs-6 col-sm-6 p-1">
                          <a href="images/t-21.jpg" data-lightbox="roadtri">
                            <img
                              src="../../Assets/images/t-21.jpg"
                              className="rounded-3 w-100"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="col-xs-6 col-sm-6 p-1">
                          <a href="images/t-22.jpg" data-lightbox="roadtri">
                            <img
                              src="../../Assets/images/t-22.jpg"
                              className="rounded-3 w-100"
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="row ps-2 pe-2">
                        <div className="col-xs-4 col-sm-4 p-1">
                          <a href="images/t-23.jpg" data-lightbox="roadtri">
                            <img
                              src="../../Assets/images/t-23.jpg"
                              className="rounded-3 w-100"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="col-xs-4 col-sm-4 p-1">
                          <a href="images/t-24.jpg" data-lightbox="roadtri">
                            <img
                              src="../../Assets/images/t-24.jpg"
                              className="rounded-3 w-100"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="col-xs-4 col-sm-4 p-1">
                          <a
                            href="images/t-25.jpg"
                            data-lightbox="roadtri"
                            className="position-relative d-block"
                          >
                            <img
                              src="../../Assets/images/t-25.jpg"
                              className="rounded-3 w-100"
                              alt="image"
                            />
                            <span className="img-count font-sm text-white ls-3 fw-600">
                              <b>+2</b>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex p-0">
                      <a
                        href="#"
                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"
                      >
                        <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                        <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                        2.8K Like
                      </a>
                      <a
                        href="#"
                        className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                      >
                        <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                        22 Comment
                      </a>
                      <a
                        href="#"
                        className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                      >
                        <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                        <span className="d-none-xs">Share</span>
                      </a>
                    </div>
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
                      src="../../Assets/images/user-8.png"
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
                      src="../../Assets/images/user-7.png"
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
                      src="../../Assets/images/user-6.png"
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
                      src="../../Assets/images/user-5.png"
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
                      src="../../Assets/images/user-4.png"
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
                      src="../../Assets/images/user-3.png"
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
                      src="../../Assets/images/user-2.png"
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
                      src="../../Assets/images/user-12.png"
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
              src="../../Assets/images/female-profile.png"
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
                    <img src="../../Assets/images/story-5.jpg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="../../Assets/images/story-6.jpg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="../../Assets/images/story-7.jpg" alt="image" />
                  </div>
                  <div className="item">
                    <img src="../../Assets/images/story-8.jpg" alt="image" />
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
                  src="../../Assets/images/user-12.png"
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
                I want those files for you. I want you to send 1 PDF and 1 image
                file.
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
      {/* Mirrored from uitheme.net/sociala/group-page.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 03 Mar 2023 23:23:53 GMT */}
    </div>
  );
};

export default ComunityPage;
