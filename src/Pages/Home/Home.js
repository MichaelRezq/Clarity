import React from "react";
import LeftSideBar from "../../components/generals/LeftSideBar";

const Home = () => {
  return (
    <>
      <>
        <div className="main-wrapper">
          {/* main content */}
          <div className="main-content right-chat-active">
            <div className="middle-sidebar-bottom">
              <div className="middle-sidebar-left">
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
                <div className="row feed-body">
                  <div className="col-xl-8 col-xxl-9 col-lg-8">
                    <div className="card w-100 shadow-none bg-transparent bg-transparent-card border-0 p-0 mb-0">
                      
                    </div>
                    <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
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
                            src={require("../../Assets/images/user-8.png")}
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
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
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
                            src={require("../../Assets/images/user-7.png")}
                            alt="image"
                            className="shadow-sm rounded-circle w45"
                          />
                        </figure>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                          Surfiya Zakir{" "}
                          <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                            3 hour ago
                          </span>
                        </h4>
                        <a
                          href="#"
                          className="ms-auto"
                          id="dropdownMenu2"
                          data-bs-toggle="dropdown"
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi nulla dolor, ornare at commodo non,
                          feugiat non nisi. Phasellus faucibus mollis pharetra.
                          Proin blandit ac massa sed rhoncus{" "}
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
                                src={require("../../Assets/images/t-10.jpg")}
                                className="rounded-3 w-100"
                                alt="image"
                              />
                            </a>
                          </div>
                          <div className="col-xs-4 col-sm-4 p-1">
                            <a href="images/t-11.jpg" data-lightbox="roadtrip">
                              <img
                                src={require("../../Assets/images/t-11.jpg")}
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
                                src={require("../../Assets/images/t-12.jpg")}
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
                          className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                        >
                          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                          2.8K Like
                        </a>
                        <div className="emoji-wrap">
                          <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item">
                              <i className="em em---1" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-angry" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-anguished" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-astonished" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-blush" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-clap" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-cry" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-full_moon_with_face" />
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                          <span className="d-none-xss">22 Comment</span>
                        </a>
                        <a
                          href="#"
                          id="dropdownMenu21"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                          <span className="d-none-xs">Share</span>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                          aria-labelledby="dropdownMenu21"
                        >
                          <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
                            Share{" "}
                            <i className="feather-x ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2" />
                          </h4>
                          <div className="card-body p-0 d-flex">
                            <ul className="d-flex align-items-center justify-content-between mt-2">
                              <li className="me-1">
                                <a
                                  href="#"
                                  className="btn-round-lg bg-facebook"
                                >
                                  <i className="font-xs ti-facebook text-white" />
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-twiiter">
                                  <i className="font-xs ti-twitter-alt text-white" />
                                </a>
                              </li>
                              <li className="me-1">
                                <a
                                  href="#"
                                  className="btn-round-lg bg-linkedin"
                                >
                                  <i className="font-xs ti-linkedin text-white" />
                                </a>
                              </li>
                              <li className="me-1">
                                <a
                                  href="#"
                                  className="btn-round-lg bg-instagram"
                                >
                                  <i className="font-xs ti-instagram text-white" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="btn-round-lg bg-pinterest"
                                >
                                  <i className="font-xs ti-pinterest text-white" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="card-body p-0 d-flex">
                            <ul className="d-flex align-items-center justify-content-between mt-2">
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-tumblr">
                                  <i className="font-xs ti-tumblr text-white" />
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-youtube">
                                  <i className="font-xs ti-youtube text-white" />
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-flicker">
                                  <i className="font-xs ti-flickr text-white" />
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-black">
                                  <i className="font-xs ti-vimeo-alt text-white" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="btn-round-lg bg-whatsup">
                                  <i className="font-xs feather-phone text-white" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
                            Copy Link
                          </h4>
                          <i className="feather-copy position-absolute right-35 mt-3 font-xs text-grey-500" />
                          <input
                            type="text"
                            defaultValue="https://socia.be/1rGxjoJKVF0"
                            className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
                      <div className="card-body p-0 d-flex">
                        <figure className="avatar me-3 m-0">
                          <img
                            src={require("../../Assets/images/user-8.png")}
                            alt="image"
                            className="shadow-sm rounded-circle w45"
                          />
                        </figure>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                          Goria Coast{" "}
                          <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                            2 hour ago
                          </span>
                        </h4>
                        <a
                          href="#"
                          className="ms-auto"
                          id="dropdownMenu6"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                          aria-labelledby="dropdownMenu6"
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi nulla dolor, ornare at commodo non,
                          feugiat non nisi. Phasellus faucibus mollis pharetra.
                          Proin blandit ac massa sed rhoncus{" "}
                          <a href="#" className="fw-600 text-primary ms-2">
                            See more
                          </a>
                        </p>
                      </div>
                      <div className="card-body d-flex p-0">
                        <a
                          href="#"
                          className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                        >
                          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                          2.8K Like
                        </a>
                        <div className="emoji-wrap">
                          <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item">
                              <i className="em em---1" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-angry" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-anguished" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-astonished" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-blush" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-clap" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-cry" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-full_moon_with_face" />
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                          <span className="d-none-xss">22 Comment</span>
                        </a>
                        <a
                          href="#"
                          id="dropdownMenu31"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg" />
                          <span className="d-none-xs">Share</span>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
                          aria-labelledby="dropdownMenu31"
                        >
                          <h4 className="fw-700 font-xss text-grey-900 d-flex align-items-center">
                            Share{" "}
                            <i className="feather-x ms-auto font-xssss btn-round-xs bg-greylight text-grey-900 me-2" />
                          </h4>
                          <div className="card-body p-0 d-flex">
                            <ul className="d-flex align-items-center justify-content-between mt-2">
                              <li className="me-1">
                                <a
                                  href="#"
                                  className="btn-round-lg bg-facebook"
                                >
                                  <i className="font-xs ti-facebook text-white" />
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-twiiter">
                                  <i className="font-xs ti-twitter-alt text-white" />
                                </a>
                              </li>
                              <li className="me-1">
                                <a
                                  href="#"
                                  className="btn-round-lg bg-linkedin"
                                >
                                  <i className="font-xs ti-linkedin text-white" />
                                </a>
                              </li>
                              <li className="me-1">
                                <a
                                  href="#"
                                  className="btn-round-lg bg-instagram"
                                >
                                  <i className="font-xs ti-instagram text-white" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="btn-round-lg bg-pinterest"
                                >
                                  <i className="font-xs ti-pinterest text-white" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="card-body p-0 d-flex">
                            <ul className="d-flex align-items-center justify-content-between mt-2">
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-tumblr">
                                  <i className="font-xs ti-tumblr text-white" />
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-youtube">
                                  <i className="font-xs ti-youtube text-white" />
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-flicker">
                                  <i className="font-xs ti-flickr text-white" />
                                </a>
                              </li>
                              <li className="me-1">
                                <a href="#" className="btn-round-lg bg-black">
                                  <i className="font-xs ti-vimeo-alt text-white" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="btn-round-lg bg-whatsup">
                                  <i className="font-xs feather-phone text-white" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h4 className="fw-700 font-xssss mt-4 text-grey-500 d-flex align-items-center mb-3">
                            Copy Link
                          </h4>
                          <i className="feather-copy position-absolute right-35 mt-3 font-xs text-grey-500" />
                          <input
                            type="text"
                            defaultValue="https://socia.be/1rGxjoJKVF0"
                            className="bg-grey text-grey-500 font-xssss border-0 lh-32 p-2 font-xssss fw-600 rounded-3 w-100 theme-dark-bg"
                          />
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
                        <a
                          href="#"
                          className="ms-auto"
                          id="dropdownMenu5"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss" />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
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
                        <a href="default-video.html" className="video-btn">
                          <video autoPlay loop className="float-right w-100">
                            <source
                              src={require("../../Assets/images/v-2.mp4")}
                              type="video/mp4"
                            />
                          </video>
                        </a>
                      </div>
                      <div className="card-body p-0 me-lg-5">
                        <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi nulla dolor, ornare at commodo non,
                          feugiat non nisi. Phasellus faucibus mollis pharetra.
                          Proin blandit ac massa sed rhoncus{" "}
                          <a href="#" className="fw-600 text-primary ms-2">
                            See more
                          </a>
                        </p>
                      </div>
                      <div className="card-body d-flex p-0">
                        <a
                          href="#"
                          className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                        >
                          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                          2.8K Like
                        </a>
                        <div className="emoji-wrap">
                          <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item">
                              <i className="em em---1" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-angry" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-anguished" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-astonished" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-blush" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-clap" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-cry" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-full_moon_with_face" />
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                          <span className="d-none-xss">22 Comment</span>
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
                      <div className="card-body p-0 me-lg-5">
                        <p className="fw-500 text-grey-500 lh-26 font-xssss w-100">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi nulla dolor, ornare at commodo non,
                          feugiat non nisi. Phasellus faucibus mollis pharetra.
                          Proin blandit ac massa sed rhoncus{" "}
                          <a href="#" className="fw-600 text-primary ms-2">
                            See more
                          </a>
                        </p>
                      </div>
                      <div className="card-body d-block p-0 mb-3">
                        <div className="row ps-2 pe-2">
                          <div className="col-xs-6 col-sm-6 p-1">
                            <a href="images/t-36.jpg" data-lightbox="roadtri">
                              <img
                                src={require("../../Assets/images/t-21.jpg")}
                                className="rounded-3 w-100"
                                alt="image"
                              />
                            </a>
                          </div>
                          <div className="col-xs-6 col-sm-6 p-1">
                            <a href="images/t-32.jpg" data-lightbox="roadtri">
                              <img
                                src={require("../../Assets/images/t-22.jpg")}
                                className="rounded-3 w-100"
                                alt="image"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="row ps-2 pe-2">
                          <div className="col-xs-4 col-sm-4 p-1">
                            <a href="images/t-33.jpg" data-lightbox="roadtri">
                              <img
                                src={require("../../Assets/images/t-23.jpg")}
                                className="rounded-3 w-100"
                                alt="image"
                              />
                            </a>
                          </div>
                          <div className="col-xs-4 col-sm-4 p-1">
                            <a href="images/t-34.jpg" data-lightbox="roadtri">
                              <img
                                src={require("../../Assets/images/t-24.jpg")}
                                className="rounded-3 w-100"
                                alt="image"
                              />
                            </a>
                          </div>
                          <div className="col-xs-4 col-sm-4 p-1">
                            <a
                              href="images/t-35.jpg"
                              data-lightbox="roadtri"
                              className="position-relative d-block"
                            >
                              <img
                                src={require("../../Assets/images/t-25.jpg")}
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
                          className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                        >
                          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                          2.8K Like
                        </a>
                        <div className="emoji-wrap">
                          <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item">
                              <i className="em em---1" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-angry" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-anguished" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-astonished" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-blush" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-clap" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-cry" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-full_moon_with_face" />
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                          <span className="d-none-xss">22 Comment</span>
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
                        <a href="default-video.html" className="video-btn">
                          <video autoPlay loop className="float-right w-100">
                            <source
                              src={require("../../Assets/images/v-1.mp4")}
                              type="video/mp4"
                            />
                          </video>
                        </a>
                      </div>
                      <div className="card-body p-0 me-lg-5">
                        <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi nulla dolor, ornare at commodo non,
                          feugiat non nisi. Phasellus faucibus mollis pharetra.
                          Proin blandit ac massa sed rhoncus{" "}
                          <a href="#" className="fw-600 text-primary ms-2">
                            See more
                          </a>
                        </p>
                      </div>
                      <div className="card-body d-flex p-0">
                        <a
                          href="#"
                          className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                        >
                          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                          2.8K Like
                        </a>
                        <div className="emoji-wrap">
                          <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item">
                              <i className="em em---1" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-angry" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-anguished" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-astonished" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-blush" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-clap" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-cry" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-full_moon_with_face" />
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                          <span className="d-none-xss">22 Comment</span>
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
                      <div className="card-body p-0 me-lg-5">
                        <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi nulla dolor, ornare at commodo non,
                          feugiat non nisi. Phasellus faucibus mollis pharetra.
                          Proin blandit ac massa sed rhoncus{" "}
                          <a href="#" className="fw-600 text-primary ms-2">
                            See more
                          </a>
                        </p>
                      </div>
                      <div className="card-body d-block p-0 mb-3">
                        <div className="row ps-2 pe-2">
                          <div className="col-sm-12 p-1">
                            <a href="images/t-30.jpg" data-lightbox="roadtr">
                              <img
                                src={require("../../Assets/images/t-31.jpg")}
                                className="rounded-3 w-100"
                                alt="image"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body d-flex p-0">
                        <a
                          href="#"
                          className="emoji-bttn d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"
                        >
                          <i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss" />{" "}
                          <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss" />
                          2.8K Like
                        </a>
                        <div className="emoji-wrap">
                          <ul className="emojis list-inline mb-0">
                            <li className="emoji list-inline-item">
                              <i className="em em---1" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-angry" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-anguished" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-astonished" />{" "}
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-blush" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-clap" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-cry" />
                            </li>
                            <li className="emoji list-inline-item">
                              <i className="em em-full_moon_with_face" />
                            </li>
                          </ul>
                        </div>
                        <a
                          href="#"
                          className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg" />
                          <span className="d-none-xss">22 Comment</span>
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
                  <div className="col-xl-4 col-xxl-3 col-lg-4 ps-lg-0">
                    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                      <div className="card-body d-flex align-items-center p-4">
                        <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                          Friend Request
                        </h4>
                        <a
                          href="default-member.html"
                          className="fw-600 ms-auto font-xssss text-primary"
                        >
                          See all
                        </a>
                      </div>
                      <div className="card-body d-flex pt-4 ps-4 pe-4 pb-0 border-top-xs bor-0">
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
                            12 mutual friends
                          </span>
                        </h4>
                      </div>
                      <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                        <a
                          href="#"
                          className="p-2 lh-20 w100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                        >
                          Confirm
                        </a>
                        <a
                          href="#"
                          className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
                        >
                          Delete
                        </a>
                      </div>
                      <div className="card-body d-flex pt-0 ps-4 pe-4 pb-0">
                        <figure className="avatar me-3">
                          <img
                            src={require("../../Assets/images/user-8.png")}
                            alt="image"
                            className="shadow-sm rounded-circle w45"
                          />
                        </figure>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                          Mohannad Zitoun{" "}
                          <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                            12 mutual friends
                          </span>
                        </h4>
                      </div>
                      <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                        <a
                          href="#"
                          className="p-2 lh-20 w100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                        >
                          Confirm
                        </a>
                        <a
                          href="#"
                          className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
                        >
                          Delete
                        </a>
                      </div>
                      <div className="card-body d-flex pt-0 ps-4 pe-4 pb-0">
                        <figure className="avatar me-3">
                          <img
                            src={require("../../Assets/images/user-12.png")}
                            alt="image"
                            className="shadow-sm rounded-circle w45"
                          />
                        </figure>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-1">
                          Mohannad Zitoun{" "}
                          <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                            12 mutual friends
                          </span>
                        </h4>
                      </div>
                      <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                        <a
                          href="#"
                          className="p-2 lh-20 w100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl"
                        >
                          Confirm
                        </a>
                        <a
                          href="#"
                          className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                    <div className="card w-100 shadow-xss rounded-xxl border-0 p-0 ">
                      <div className="card-body d-flex align-items-center p-4 mb-0">
                        <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                          Confirm Friend
                        </h4>
                        <a
                          href="default-member.html"
                          className="fw-600 ms-auto font-xssss text-primary"
                        >
                          See all
                        </a>
                      </div>
                      <div className="card-body bg-transparent-card d-flex p-3 bg-greylight ms-3 me-3 rounded-3">
                        <figure className="avatar me-2 mb-0">
                          <img
                            src={require("../../Assets/images/user-7.png")}
                            alt="image"
                            className="shadow-sm rounded-circle w45"
                          />
                        </figure>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                          Anthony Daugloi{" "}
                          <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                            12 mutual friends
                          </span>
                        </h4>
                        <a
                          href="#"
                          className="btn-round-sm bg-white text-grey-900 feather-chevron-right font-xss ms-auto mt-2"
                        />
                      </div>
                      <div
                        className="card-body bg-transparent-card d-flex p-3 bg-greylight m-3 rounded-3"
                        style={{ marginBottom: "0 !important" }}
                      >
                        <figure className="avatar me-2 mb-0">
                          <img
                            src={require("../../Assets/images/user-8.png")}
                            alt="image"
                            className="shadow-sm rounded-circle w45"
                          />
                        </figure>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                          {" "}
                          David Agfree{" "}
                          <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                            12 mutual friends
                          </span>
                        </h4>
                        <a
                          href="#"
                          className="btn-round-sm bg-white text-grey-900 feather-plus font-xss ms-auto mt-2"
                        />
                      </div>
                      <div className="card-body bg-transparent-card d-flex p-3 bg-greylight m-3 rounded-3">
                        <figure className="avatar me-2 mb-0">
                          <img
                            src={require("../../Assets/images/user-12.png")}
                            alt="image"
                            className="shadow-sm rounded-circle w45"
                          />
                        </figure>
                        <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                          Hugury Daugloi{" "}
                          <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
                            12 mutual friends
                          </span>
                        </h4>
                        <a
                          href="#"
                          className="btn-round-sm bg-white text-grey-900 feather-plus font-xss ms-auto mt-2"
                        />
                      </div>
                    </div>
                    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3 mt-3">
                      <div className="card-body d-flex align-items-center p-4">
                        <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                          Suggest Group
                        </h4>
                        <a
                          href="default-group.html"
                          className="fw-600 ms-auto font-xssss text-primary"
                        >
                          See all
                        </a>
                      </div>
                      <div className="card-body d-flex pt-4 ps-4 pe-4 pb-0 overflow-hidden border-top-xs bor-0">
                        <img
                          src={require("../../Assets/images/e-2.jpg")}
                          alt="img"
                          className="img-fluid rounded-xxl mb-2"
                        />
                      </div>
                      <div className="card-body dd-block pt-0 ps-4 pe-4 pb-4">
                        <ul className="memberlist mt-1 mb-2 ms-0 d-block">
                          <li className="w20">
                            <a href="#">
                              <img
                                src={require("../../Assets/images/user-6.png")}
                                alt="user"
                                className="w35 d-inline-block"
                                style={{ opacity: 1 }}
                              />
                            </a>
                          </li>
                          <li className="w20">
                            <a href="#">
                              <img
                                src={require("../../Assets/images/user-7.png")}
                                alt="user"
                                className="w35 d-inline-block"
                                style={{ opacity: 1 }}
                              />
                            </a>
                          </li>
                          <li className="w20">
                            <a href="#">
                              <img
                                src={require("../../Assets/images/user-8.png")}
                                alt="user"
                                className="w35 d-inline-block"
                                style={{ opacity: 1 }}
                              />
                            </a>
                          </li>
                          <li className="w20">
                            <a href="#">
                              <img
                                src={require("../../Assets/images/user-3.png")}
                                alt="user"
                                className="w35 d-inline-block"
                                style={{ opacity: 1 }}
                              />
                            </a>
                          </li>
                          <li className="last-member">
                            <a
                              href="#"
                              className="bg-greylight fw-600 text-grey-500 font-xssss w35 ls-3 text-center"
                              style={{ height: 35, lineHeight: 35 }}
                            >
                              +2
                            </a>
                          </li>
                          <li className="ps-3 w-auto ms-1">
                            <a
                              href="#"
                              className="fw-600 text-grey-500 font-xssss"
                            >
                              Member apply
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                      <div className="card-body d-flex align-items-center p-4">
                        <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                          Suggest Pages
                        </h4>
                        <a
                          href="default-group.html"
                          className="fw-600 ms-auto font-xssss text-primary"
                        >
                          See all
                        </a>
                      </div>
                      <div className="card-body d-flex pt-4 ps-4 pe-4 pb-0 overflow-hidden border-top-xs bor-0">
                        <img
                          src={require("../../Assets/images/g-2.jpg")}
                          alt="img"
                          className="img-fluid rounded-xxl mb-2"
                        />
                      </div>
                      <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                        <a
                          href="#"
                          className="p-2 lh-28 w-100 bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"
                        >
                          <i className="feather-external-link font-xss me-2" />{" "}
                          Like Page
                        </a>
                      </div>
                      <div className="card-body d-flex pt-0 ps-4 pe-4 pb-0 overflow-hidden">
                        <img
                          src={require("../../Assets/images/g-3.jpg")}
                          alt="img"
                          className="img-fluid rounded-xxl mb-2 bg-lightblue"
                        />
                      </div>
                      <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4">
                        <a
                          href="#"
                          className="p-2 lh-28 w-100 bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"
                        >
                          <i className="feather-external-link font-xss me-2" />{" "}
                          Like Page
                        </a>
                      </div>
                    </div>
                    <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                      <div className="card-body d-flex align-items-center  p-4">
                        <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                          Event
                        </h4>
                        <a
                          href="default-event.html"
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
                      AR
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
                      AB
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
                      SD
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
          id="Modalstory"
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
                <i className="ti-close text-grey-900 font-xssss" />
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
      </>
    </>
  );
};

export default Home;
