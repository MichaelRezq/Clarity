import React from "react";

const Group = () => {
  return (
        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left pe-0">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
                    <div className="card-body d-flex align-items-center p-0">
                      <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900">
                        Group
                      </h2>
                      <div className="search-form-2 ms-auto">
                        <i className="ti-search font-xss" />
                        <input
                          type="text"
                          className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0"
                          placeholder="Search here."
                        />
                      </div>
                      <a
                        href="#"
                        className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"
                      >
                        <i className="feather-filter font-xss text-grey-500" />
                      </a>
                    </div>
                  </div>
                  <div className="row ps-2 pe-1">
                    <div className="col-md-6 col-sm-6 pe-2 ps-2">
                      <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3">
                        <div
                          className="card-body position-relative h100 bg-image-cover bg-image-center"
                          style={{ backgroundImage: "url(images/bb-16.png)" }}
                        />
                        <div className="card-body d-block w-100 pl-10 pe-4 pb-4 pt-0 text-left position-relative">
                          <figure
                            className="avatar position-absolute w75 z-index-1"
                            style={{ top: "-40px", left: 15 }}
                          >
                            <img
                              src={require("../../Assets/images/user-12.png")} 
                              alt="image"
                              className="float-right p-1 bg-white rounded-circle w-100"
                            />
                          </figure>
                          <div className="clearfix" />
                          <h4 className="fw-700 font-xsss mt-3 mb-1">
                            Seary Victor
                          </h4>
                          <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3">
                            support@gmail.com
                          </p>
                          <span className="position-absolute right-15 top-0 d-flex align-items-center">
                            <a href="#" className="d-lg-block d-none">
                              <i className="feather-video btn-round-md font-md bg-primary-gradiant text-white" />
                            </a>
                            <a
                              href="#"
                              className="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white"
                            >
                              FOLLOW
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 pe-2 ps-2">
                      <div className="card w-100 text-center shadow-xss rounded-xxl border-0 p-4 mb-3 mt-0">
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
          </div>
        </div>
  );
};

export default Group;
