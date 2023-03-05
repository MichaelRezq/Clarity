import React from "react";

const Video = () => {
  return (
    <div>
      {/* Custom Stylesheet */}
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/video-player.css" />
      <div className="preloader" />
      <div className="main-wrapper">
        {/* main content */}
        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="card w-100 border-0 shadow-xss rounded-xxl border-0 p-4 mb-3 overflow-hidden">
                    <div className="card-body p-0 d-flex align-items-center mb-3">
                      <h4 className="fw-700 font-xss text-grey-900 pt-0 mb-0">
                        Featured Stories
                      </h4>
                      <a
                        href="#"
                        className="ps-3 pe-2 lh-32 d-flex align-items-center font-xssss fw-600 alert-primary rounded-xxl text-primary ms-auto"
                      >
                        See more{" "}
                        <i className="font-xsss feather-chevron-right ms-1" />
                      </a>
                    </div>
                    <div className="card-body p-0 d-block mb-4">
                      <div className="owl-carousel owl-theme category-card overflow-visible owl-dot-nav nav-none style2 chatlist">
                        <div className="item no-ouline">
                          <div className="card w-100 border-0 shadow-none bg-transparent bg-transparent-card">
                            <a
                              href="#"
                              data-target="#Modalstries"
                              data-toggle="modal"
                              className="w-100 btn-round-lg"
                            >
                              <i className="feather-plus text-grey-600 font-md" />{" "}
                              <span className="d-block fw-600 font-xssss text-grey-600 text-dark mt-0">
                                My story
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="item dashed online">
                          <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                            <div className="card-image text-center">
                              <a
                                href="#"
                                data-target="#Modalstries"
                                data-toggle="modal"
                              >
                                <img
                                  src={require("../../Assets/images/user-22.png")}
                                  alt="image"
                                  className="d-inline p-0"
                                />{" "}
                                <span className="d-block fw-600 font-xssss text-grey-600 text-dark">
                                  Ana
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item online">
                          <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                            <div className="card-image text-center">
                              <a
                                href="#"
                                data-target="#Modalstries"
                                data-toggle="modal"
                              >
                                <img
                                  src={require("../../Assets/images/user-23.png")}
                                  alt="image"
                                  className="d-inline p-0"
                                />{" "}
                                <span className="d-block fw-600 font-xssss text-grey-600 text-dark">
                                  Devid
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item online">
                          <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                            <div className="card-image text-center">
                              <a
                                href="#"
                                data-target="#Modalstries"
                                data-toggle="modal"
                              >
                                <img
                                  src={require("../../Assets/images/user-24.png")}
                                  alt="image"
                                  className="d-inline p-0"
                                />{" "}
                                <span className="d-block fw-600 font-xssss text-grey-600 text-dark">
                                  Anton
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                            <div className="card-image text-center">
                              <a
                                href="#"
                                data-target="#Modalstries"
                                data-toggle="modal"
                              >
                                <img
                                  src={require("../../Assets/images/user-21.png")}
                                  alt="image"
                                  className="d-inline p-0"
                                />{" "}
                                <span className="d-block fw-600 font-xssss text-grey-600 text-dark">
                                  Jane
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                            <div className="card-image text-center">
                              <a
                                href="#"
                                data-target="#Modalstries"
                                data-toggle="modal"
                              >
                                <img
                                  src={require("../../Assets/images/user-25.png")}
                                  alt="image"
                                  className="d-inline p-0"
                                />{" "}
                                <span className="d-block fw-600 font-xssss text-grey-600 text-dark">
                                  Wade
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                            <div className="card-image text-center">
                              <a
                                href="#"
                                data-target="#Modalstries"
                                data-toggle="modal"
                              >
                                <img
                                  src={require("../../Assets/images/user-12.png")}
                                  alt="image"
                                  className="d-inline shadow p-0"
                                />{" "}
                                <span className="d-block fw-600 font-xssss text-grey-600 text-dark">
                                  Cabe
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item online">
                          <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                            <div className="card-image text-center">
                              <a
                                href="#"
                                data-target="#Modalstries"
                                data-toggle="modal"
                              >
                                <img
                                  src={require("../../Assets/images/user-24.png")}
                                  alt="image"
                                  className="d-inline p-0"
                                />{" "}
                                <span className="d-block fw-600 font-xssss text-grey-600 text-dark">
                                  Anton
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                            <div className="card-image text-center">
                              <a
                                href="#"
                                data-target="#Modalstries"
                                data-toggle="modal"
                              >
                                <img
                                  src={require("../../Assets/images/user-21.png")}
                                  alt="image"
                                  className="d-inline p-0"
                                />{" "}
                                <span className="d-block fw-600 font-xssss text-grey-600 text-dark">
                                  Jane
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="card bg-transparent bg-transparent-card border-0 shadow-none">
                            <div className="card-image text-center">
                              <a
                                href="#"
                                data-target="#Modalstries"
                                data-toggle="modal"
                              >
                                <img
                                  src={require("../../Assets/images/user-25.png")}
                                  alt="image"
                                  className="d-inline p-0"
                                />{" "}
                                <span className="d-block fw-600 font-xssss text-grey-600 text-dark">
                                  Wade
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
                    <div className="card-body p-0 d-flex">
                      <figure className="avatar me-3">
                        <img
                          src={require("../../Assets/images/user-8.png")}
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
                    <div className="card-body p-0 mb-3 rounded-3 overflow-hidden">
                      <div className="player bg-transparent shadow-none">
                        {/* <video id='video' src={require('../../Assets/images/v-2.mp4' pla)}ysinline></video> */}
                        <video
                          id="my-video"
                          className="video-js"
                          controls
                          preload="auto"
                          poster="images/poster-1.png"
                          data-setup="{}"
                          style={{ width: "100%", height: "auto" }}
                        >
                          <source
                            src={require("../../Assets/images/v-2.mp4")}
                            type="video/mp4"
                          />
                          <p className="vjs-no-js">
                            To view this video please enable JavaScript, and
                            consider upgrading to a web browser that
                            <a
                              href="https://videojs.com/html5-video-support/"
                              target="_blank"
                            >
                              supports HTML5 video
                            </a>
                          </p>
                        </video>
                      </div>
                    </div>
                    <div className="card-body p-0 me-lg-5">
                      <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi nulla dolor, ornare at commodo non, feugiat non
                        nisi. Phasellus faucibus mollis pharetra. Proin blandit
                        ac massa sed rhoncus{" "}
                        <a href="#" className="fw-600 text-primary ms-2">
                          See more
                        </a>
                      </p>
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
                  <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
                    <div className="card-body p-0 d-flex">
                      <figure className="avatar me-3">
                        <img
                          src={require("../../Assets/images/user-8.png")}
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
                    <div className="card-body p-0 mb-3 rounded-3 overflow-hidden">
                      <div className="player bg-transparent shadow-none">
                        <video
                          id="my-video4"
                          className="video-js"
                          controls
                          preload="auto"
                          poster="images/poster-2.png"
                          data-setup="{}"
                          style={{ width: "100%", height: "auto" }}
                        >
                          <source
                            src={require("../../Assets/images/v-1.mp4")}
                            type="video/mp4"
                          />
                          <p className="vjs-no-js">
                            To view this video please enable JavaScript, and
                            consider upgrading to a web browser that
                            <a
                              href="https://videojs.com/html5-video-support/"
                              target="_blank"
                            >
                              supports HTML5 video
                            </a>
                          </p>
                        </video>
                      </div>
                    </div>
                    <div className="card-body p-0 me-lg-5">
                      <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi nulla dolor, ornare at commodo non, feugiat non
                        nisi. Phasellus faucibus mollis pharetra. Proin blandit
                        ac massa sed rhoncus{" "}
                        <a href="#" className="fw-600 text-primary ms-2">
                          See more
                        </a>
                      </p>
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
                  <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
                    <div className="card-body p-0 d-flex">
                      <figure className="avatar me-3">
                        <img
                          src={require("../../Assets/images/user-7.png")}
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
                    <div className="card-body p-0 mb-3 rounded-3 overflow-hidden">
                      <div className="player bg-transparent shadow-none">
                        <video
                          id="my-video2"
                          className="video-js"
                          controls
                          preload="auto"
                          poster="images/poster-3.png"
                          data-setup="{}"
                          style={{ width: "100%", height: "auto" }}
                        >
                          <source
                            src={require("../../Assets/images/v-4.mp4")}
                            type="video/mp4"
                          />
                          <p className="vjs-no-js">
                            To view this video please enable JavaScript, and
                            consider upgrading to a web browser that
                            <a
                              href="https://videojs.com/html5-video-support/"
                              target="_blank"
                            >
                              supports HTML5 video
                            </a>
                          </p>
                        </video>
                      </div>
                    </div>
                    <div className="card-body p-0 me-lg-5">
                      <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi nulla dolor, ornare at commodo non, feugiat non
                        nisi. Phasellus faucibus mollis pharetra. Proin blandit
                        ac massa sed rhoncus{" "}
                        <a href="#" className="fw-600 text-primary ms-2">
                          See more
                        </a>
                      </p>
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
                  <div className="card w-100 text-center shadow-xss rounded-xxl border-0 p-4 mb-3">
                    <div
                      className="snippet mt-2 ms-auto me-auto"
                      data-title=".dot-typing"
                    >
                      <div className="stage">
                        <div className="dot-typing" />
                      </div>
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
                      src={require("../../Assets/images/user-8.png")}
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
                      src={require("../../Assets/images/user-7.png")}
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
                      src={require("../../Assets/images/user-6.png")}
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
                      src={require("../../Assets/images/user-5.png")}
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
                      src={require("../../Assets/images/user-4.png")}
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
                      src={require("../../Assets/images/user-3.png")}
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
                      src={require("../../Assets/images/user-2.png")}
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
                      src={require("../../Assets/images/user-12.png")}
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
              src={require("../../Assets/images/female-profile.png")}
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
      {/* Mirrored from uitheme.net/sociala/default-video.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 03 Mar 2023 23:30:05 GMT */}
    </div>
  );
};

export default Video;
