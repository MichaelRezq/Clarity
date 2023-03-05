import React from "react";

const GuestPage = () => {
  return (
    <div>
      <div className="preloader" />
      <div className="main-wrap">
        <div className="nav-header bg-transparent shadow-none border-0">
          <div className="nav-top w-100">
            <a href="index-2.html">
              <i className="feather-zap text-success display1-size me-2 ms-0" />
              <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
                Clarity.{" "}
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
            <a
              href="#"
              className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
              data-bs-toggle="modal"
              data-bs-target="#Modallogin"
            >
              Login
            </a>
            <a
              href="#"
              className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"
              data-bs-toggle="modal"
              data-bs-target="#Modalregister"
            >
              Register
            </a>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{ backgroundImage: "url(images/login-bg-2.jpg)" }}
          />
          <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <div className="card shadow-none border-0 ms-auto me-auto login-card">
              <div className="card-body rounded-0 text-left">
                <h2 className="fw-700 display1-size display2-md-size mb-4">
                  Change <br />
                  your password
                </h2>
                <form>
                  <div className="form-group icon-input mb-3">
                    <input
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="Old Password"
                    />
                    <i className="font-sm ti-lock text-grey-500 pe-0" />
                  </div>
                  <div className="form-group icon-input mb-1">
                    <input
                      type="Password"
                      className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                      placeholder="New Password"
                    />
                    <i className="font-sm ti-lock text-grey-500 pe-0" />
                  </div>
                  <div className="form-check text-left mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input mt-2"
                      id="exampleCheck4"
                    />
                    <label
                      className="form-check-label font-xsss text-grey-500"
                      htmlFor="exampleCheck4"
                    >
                      Accept Term and Conditions
                    </label>
                    {/* <a href="#" class="fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a> */}
                  </div>
                </form>
                <div className="col-sm-12 p-0 text-left">
                  <div className="form-group mb-1">
                    <a
                      href="login.html"
                      className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                    >
                      Change Password
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Login */}
      <div
        className="modal bottom fade"
        style={{ overflowY: "scroll" }}
        id="Modallogin"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content border-0">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="ti-close text-grey-500" />
            </button>
            <div className="modal-body p-3 d-flex align-items-center bg-none">
              <div className="card shadow-none rounded-0 w-100 p-2 pt-3 border-0">
                <div className="card-body rounded-0 text-left p-3">
                  <h2 className="fw-700 display1-size display2-md-size mb-4">
                    Login into <br />
                    your account
                  </h2>
                  <form>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-email text-grey-500 pe-0" />
                      <input
                        type="text"
                        className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Your Email Address"
                      />
                    </div>
                    <div className="form-group icon-input mb-1">
                      <input
                        type="Password"
                        className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                        placeholder="Password"
                      />
                      <i className="font-sm ti-lock text-grey-500 pe-0" />
                    </div>
                    <div className="form-check text-left mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input mt-2"
                        id="exampleCheck5"
                      />
                      <label
                        className="form-check-label font-xsss text-grey-500"
                        htmlFor="exampleCheck5"
                      >
                        Remember me
                      </label>
                      <a
                        href="forgot.html"
                        className="fw-600 font-xsss text-grey-700 mt-1 float-right"
                      >
                        Forgot your Password?
                      </a>
                    </div>
                  </form>
                  <div className="col-sm-12 p-0 text-left">
                    <div className="form-group mb-1">
                      <a
                        href="#"
                        className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                      >
                        Login
                      </a>
                    </div>
                    <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                      Dont have account{" "}
                      <a href="register.html" className="fw-700 ms-1">
                        Register
                      </a>
                    </h6>
                  </div>
                  <div className="col-sm-12 p-0 text-center mt-3 ">
                    <h6 className="mb-0 d-inline-block bg-white fw-600 font-xsss text-grey-500 mb-4">
                      Or, Sign in with your social account{" "}
                    </h6>
                    <div className="form-group mb-1">
                      <a
                        href="#"
                        className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"
                      >
                        <img
                          src={require("../../Assets/images/icon-1.png")}
                          alt="icon"
                          className="ms-2 w40 mb-1 me-5"
                        />{" "}
                        Sign in with Google
                      </a>
                    </div>
                    <div className="form-group mb-1">
                      <a
                        href="#"
                        className="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0 "
                      >
                        <img
                          src={require("../../Assets/images/icon-3.png")}
                          alt="icon"
                          className="ms-2 w40 mb-1 me-5"
                        />{" "}
                        Sign in with Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Register */}
      <div
        className="modal bottom fade"
        style={{ overflowY: "scroll" }}
        id="Modalregister"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content border-0">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="ti-close text-grey-500" />
            </button>
            <div className="modal-body p-3 d-flex align-items-center bg-none">
              <div className="card shadow-none rounded-0 w-100 p-2 pt-3 border-0">
                <div className="card-body rounded-0 text-left p-3">
                  <h2 className="fw-700 display1-size display2-md-size mb-4">
                    Create <br />
                    your account
                  </h2>
                  <form>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-user text-grey-500 pe-0" />
                      <input
                        type="text"
                        className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group icon-input mb-3">
                      <i className="font-sm ti-email text-grey-500 pe-0" />
                      <input
                        type="text"
                        className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600"
                        placeholder="Your Email Address"
                      />
                    </div>
                    <div className="form-group icon-input mb-3">
                      <input
                        type="Password"
                        className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                        placeholder="Password"
                      />
                      <i className="font-sm ti-lock text-grey-500 pe-0" />
                    </div>
                    <div className="form-group icon-input mb-1">
                      <input
                        type="Password"
                        className="style2-input ps-5 form-control text-grey-900 font-xss ls-3"
                        placeholder="Confirm Password"
                      />
                      <i className="font-sm ti-lock text-grey-500 pe-0" />
                    </div>
                    <div className="form-check text-left mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input mt-2"
                        id="exampleCheck8"
                      />
                      <label
                        className="form-check-label font-xsss text-grey-500"
                        htmlFor="exampleCheck8"
                      >
                        Accept Term and Conditions
                      </label>
                      {/* <a href="#" class="fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a> */}
                    </div>
                  </form>
                  <div className="col-sm-12 p-0 text-left">
                    <div className="form-group mb-1">
                      <a
                        href="#"
                        className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 "
                      >
                        Register
                      </a>
                    </div>
                    <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                      Already have account{" "}
                      <a href="login.html" className="fw-700 ms-1">
                        Login
                      </a>
                    </h6>
                  </div>
                  <div className="col-sm-12 p-0 text-center mt-3 ">
                    <h6 className="mb-0 d-inline-block bg-white fw-600 font-xsss text-grey-500 mb-4">
                      Or, Sign in with your social account{" "}
                    </h6>
                    <div className="form-group mb-1">
                      <a
                        href="#"
                        className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 "
                      >
                        <img
                          src={require("../../Assets/images/icon-1.png")}
                          alt="icon"
                          className="ms-2 w40 mb-1 me-5"
                        />{" "}
                        Sign in with Google
                      </a>
                    </div>
                    <div className="form-group mb-1">
                      <a
                        href="#"
                        className="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0 "
                      >
                        <img
                          src={require("../../Assets/images/icon-3.png")}
                          alt="icon"
                          className="ms-2 w40 mb-1 me-5"
                        />{" "}
                        Sign in with Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mirrored from uitheme.net/sociala/forgot.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 03 Mar 2023 23:33:29 GMT */}
    </div>
  );
};

export default GuestPage;
