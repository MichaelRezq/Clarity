import React from "react";
import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div>
      {/* Mirrored from uitheme.net/sociala/default-job.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 03 Mar 2023 23:30:32 GMT */}
      {/* Favicon icon */}

      {/* Custom Stylesheet */}
      <div className="preloader" />
      <div className="main-wrapper">
        {/* navigation top*/}

        {/* navigation top */}

        {/* main content */}
        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div
              className="middle-sidebar-left pe-0 ms-0 me-0"
              style={{ maxWidth: "100%" }}
            >
              <div className="row">
                <div className="col-xl-6 chat-left scroll-bar">
                  <div className="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
                    <div className="card-body d-flex align-items-center p-0">
                      <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900">
                        Job
                      </h2>
                      <div className="search-form-2 ms-auto">
                        <i className="ti-search font-xss" />
                        <input
                          type="text"
                          className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0"
                          placeholder="Search here."
                        />
                      </div>
                      <Link
                        to={"/home"}
                        className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"
                      >
                        <i className="feather-filter font-xss text-grey-500" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="card d-block w-100 border-0 mb-3 shadow-xss bg-white rounded-3 p-4"
                    style={{ paddingLeft: "120px !important" }}
                  >
                    <img
                      src={require("../../Assets/images/download7.png")}
                      alt="images"
                      className="position-absolute p-2 bg-lightblue2 w65 ms-4 left-0"
                    />
                    <i className="feather-bookmark font-md text-grey-500 position-absolute right-0 me-3" />
                    <h4 className="font-xss fw-700 text-grey-900 mb-3 pe-4">
                      Python Developer{" "}
                      <span className="font-xssss fw-500 text-grey-500 ms-4">
                        (3 days ago)
                      </span>{" "}
                    </h4>
                    <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                      <span className="text-grey-900 font-xssss">
                        Location :{" "}
                      </span>{" "}
                      London, United Kingdom
                    </h5>
                    <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                      <span className="text-grey-900 font-xssss">
                        Employment :{" "}
                      </span>{" "}
                      Part Time
                    </h5>
                    <h5 className="font-xssss text-grey-500 fw-600 mb-3">
                      <span className="text-grey-900 font-xssss">
                        Salary :{" "}
                      </span>{" "}
                      12000 -45000
                    </h5>
                    <h6 className="d-inline-block p-2 text-success alert-success fw-600 font-xssss rounded-3 me-2">
                      UX Design
                    </h6>
                    <h6 className="d-inline-block p-2 text-warning alert-warning fw-600 font-xssss rounded-3 me-2">
                      Andriod
                    </h6>
                    <h6 className="d-inline-block p-2 text-secondary alert-secondary fw-600 font-xssss rounded-3 me-2">
                      Developer
                    </h6>
                    <Link
                      to={"/home"}
                      className="position-absolute bottom-15 mb-3 right-15"
                    >
                      <i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right" />
                    </Link>
                  </div>
                  <div
                    className="card d-block w-100 border-0 mb-3 shadow-xss bg-white rounded-3 p-4"
                    style={{ paddingLeft: "120px !important" }}
                  >
                    <img
                      src={require("../../Assets/images/download4.png")}
                      alt="images"
                      className="position-absolute p-2 bg-lightblue2 w65 ms-4 left-0"
                    />
                    <i className="feather-bookmark font-md text-danger position-absolute right-0 me-3" />
                    <h4 className="font-xss fw-700 text-grey-900 mb-3 pe-4">
                      Sass Developer{" "}
                      <span className="font-xssss fw-500 text-grey-500 ms-4">
                        (3 days ago)
                      </span>{" "}
                    </h4>
                    <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                      <span className="text-grey-900 font-xssss">
                        Location :{" "}
                      </span>{" "}
                      London, United Kingdom
                    </h5>
                    <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                      <span className="text-grey-900 font-xssss">
                        Employment :{" "}
                      </span>{" "}
                      Part Time
                    </h5>
                    <h5 className="font-xssss text-grey-500 fw-600 mb-3">
                      <span className="text-grey-900 font-xssss">
                        Salary :{" "}
                      </span>{" "}
                      12000 -45000
                    </h5>
                    <h6 className="d-inline-block p-2 text-success alert-success fw-600 font-xssss rounded-3 me-2">
                      UX Design
                    </h6>
                    <h6 className="d-inline-block p-2 text-warning alert-warning fw-600 font-xssss rounded-3 me-2">
                      Andriod
                    </h6>
                    <h6 className="d-inline-block p-2 text-secondary alert-secondary fw-600 font-xssss rounded-3 me-2">
                      Developer
                    </h6>
                    <Link
                      to={"/home"}
                      className="position-absolute bottom-15 mb-3 right-15"
                    >
                      <i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right" />
                    </Link>
                  </div>
                  <div
                    className="card d-block w-100 border-0 mb-3 shadow-xss bg-white rounded-3 p-4"
                    style={{ paddingLeft: "120px !important" }}
                  >
                    <img
                      src={require("../../Assets/images/download6.png")}
                      alt="images"
                      className="position-absolute p-2 bg-lightblue2 w65 ms-4 left-0"
                    />
                    <i className="feather-bookmark font-md text-danger position-absolute right-0 me-3" />
                    <h4 className="font-xss fw-700 text-grey-900 mb-3 pe-4">
                      Java Developer{" "}
                      <span className="font-xssss fw-500 text-grey-500 ms-4">
                        (3 days ago)
                      </span>{" "}
                    </h4>
                    <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                      <span className="text-grey-900 font-xssss">
                        Location :{" "}
                      </span>{" "}
                      London, United Kingdom
                    </h5>
                    <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                      <span className="text-grey-900 font-xssss">
                        Employment :{" "}
                      </span>{" "}
                      Part Time
                    </h5>
                    <h5 className="font-xssss text-grey-500 fw-600 mb-3">
                      <span className="text-grey-900 font-xssss">
                        Salary :{" "}
                      </span>{" "}
                      12000 -45000
                    </h5>
                    <h6 className="d-inline-block p-2 text-success alert-success fw-600 font-xssss rounded-3 me-2">
                      UX Design
                    </h6>
                    <h6 className="d-inline-block p-2 text-warning alert-warning fw-600 font-xssss rounded-3 me-2">
                      Andriod
                    </h6>
                    <h6 className="d-inline-block p-2 text-secondary alert-secondary fw-600 font-xssss rounded-3 me-2">
                      Developer
                    </h6>
                    <Link
                      to={"/home"}
                      className="position-absolute bottom-15 mb-3 right-15"
                    >
                      <i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right" />
                    </Link>
                  </div>
                  <div
                    className="card d-block w-100 border-0 mb-3 shadow-xss bg-white rounded-3 p-4"
                    style={{ paddingLeft: "120px !important" }}
                  >
                    <img
                      src={require("../../Assets/images/download5.png")}
                      alt="images"
                      className="position-absolute p-2 bg-lightblue2 w65 ms-4 left-0"
                    />
                    <i className="feather-bookmark font-md text-grey-500 position-absolute right-0 me-3" />
                    <h4 className="font-xss fw-700 text-grey-900 mb-3 pe-4">
                      React Developer{" "}
                      <span className="font-xssss fw-500 text-grey-500 ms-4">
                        (3 days ago)
                      </span>{" "}
                    </h4>
                    <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                      <span className="text-grey-900 font-xssss">
                        Location :{" "}
                      </span>{" "}
                      London, United Kingdom
                    </h5>
                    <h5 className="font-xssss mb-2 text-grey-500 fw-600">
                      <span className="text-grey-900 font-xssss">
                        Employment :{" "}
                      </span>{" "}
                      Part Time
                    </h5>
                    <h5 className="font-xssss text-grey-500 fw-600 mb-3">
                      <span className="text-grey-900 font-xssss">
                        Salary :{" "}
                      </span>{" "}
                      12000 -45000
                    </h5>
                    <h6 className="d-inline-block p-2 text-success alert-success fw-600 font-xssss rounded-3 me-2">
                      UX Design
                    </h6>
                    <h6 className="d-inline-block p-2 text-warning alert-warning fw-600 font-xssss rounded-3 me-2">
                      Andriod
                    </h6>
                    <h6 className="d-inline-block p-2 text-secondary alert-secondary fw-600 font-xssss rounded-3 me-2">
                      Developer
                    </h6>
                    <Link
                      to={"/home"}
                      className="position-absolute bottom-15 mb-3 right-15"
                    >
                      <i className="btn-round-sm bg-primary-gradiant text-white font-sm feather-chevron-right" />
                    </Link>
                  </div>
                </div>
                {/* <div className="col-xl-6 ps-0 d-none d-xl-block">
                  <div className="card w-100 border-0 shadow-none rounded-3 border-0 mb-4 overflow-hidden ">
                    <div
                      id="map"
                      className="rounded-3"
                      style={{ height: "86vh" }}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* main content */}
        {/* right chat */}

        {/* right chat */}
        <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
          <Link to={"/home"} className="nav-content-bttn nav-center">
            <i className="feather-home" />
          </Link>
          <Link to={"/home"} className="nav-content-bttn">
            <i className="feather-package" />
          </Link>
          <Link to={"/home"} className="nav-content-bttn" data-tab="chats">
            <i className="feather-layout" />
          </Link>
          <Link to={"/home"} className="nav-content-bttn">
            <i className="feather-layers" />
          </Link>
          <Link to={"/home"} className="nav-content-bttn">
            <img
              src={require("../../Assets/images/female-profile.png")}
              alt="user"
              className="w30 shadow-xss"
            />
          </Link>
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
              <Link
                to={"/home"}
                className="ms-1 mt-1 d-inline-block close searchbox-close"
              >
                <i className="ti-close font-xs" />
              </Link>
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
                    <img
                      src={require("../../Assets/images/story-5.jpg")}
                      alt="image"
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../../Assets/images/story-6.jpg")}
                      alt="image"
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../../Assets/images/story-7.jpg")}
                      alt="image"
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../../Assets/images/story-8.jpg")}
                      alt="image"
                    />
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
                  src={require("../../Assets/images/user-12.png")}
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
              <Link
                to={"/home"}
                className="font-xssss position-absolute right-0 top-0 mt-3 me-4"
              >
                <i className="ti-close text-grey-900 mt-2 d-inline-block" />
              </Link>
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
      {/* Mirrored from uitheme.net/sociala/default-job.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 03 Mar 2023 23:30:37 GMT */}
    </div>
  );
};

export default JobCard;
