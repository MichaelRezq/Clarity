import React from "react";

const ContactInfo = () => {
  return (
    <div>
      <div className="preloader" />
      <div className="main-wrapper">
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
                      Contact Information
                    </h4>
                  </div>
                  <div className="card-body p-lg-5 p-4 w-100 border-0 mb-0">
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss">
                              Country
                            </label>
                            <input
                              type="text"
                              name="comment-name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss">
                              City
                            </label>
                            <input
                              type="text"
                              name="comment-name"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss">
                              Address
                            </label>
                            <input
                              type="text"
                              name="comment-name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="form-group">
                            <label className="mont-font fw-600 font-xsss">
                              Pincode
                            </label>
                            <input
                              type="text"
                              name="comment-name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 mb-3">
                          <div
                            id="map"
                            className="rounded-3 overflow-hidden"
                            style={{
                              height: 200,
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                height: "100%",
                                width: "100%",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                backgroundColor: "rgb(229, 227, 223)",
                              }}
                            >
                              <div
                                className="gm-style"
                                style={{
                                  position: "absolute",
                                  zIndex: 0,
                                  left: 0,
                                  top: 0,
                                  height: "100%",
                                  width: "100%",
                                  padding: 0,
                                  borderWidth: 0,
                                  margin: 0,
                                }}
                              >
                                <div
                                  tabIndex={0}
                                  aria-label="Map"
                                  aria-roledescription="map"
                                  role="group"
                                  style={{
                                    position: "absolute",
                                    zIndex: 0,
                                    left: 0,
                                    top: 0,
                                    height: "100%",
                                    width: "100%",
                                    padding: 0,
                                    borderWidth: 0,
                                    margin: 0,
                                    cursor:
                                      "url(_http_/maps.gstatic.com/mapfiles/openhand_8_8.html), default",
                                    touchAction: "pan-x pan-y",
                                  }}
                                >
                                  <div
                                    style={{
                                      zIndex: 1,
                                      position: "absolute",
                                      left: "50%",
                                      top: "50%",
                                      width: "100%",
                                      transform: "translate(0px, 0px)",
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        zIndex: 100,
                                        width: "100%",
                                      }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          left: 0,
                                          top: 0,
                                          zIndex: 0,
                                        }}
                                      >
                                        <div
                                          style={{
                                            position: "absolute",
                                            zIndex: 988,
                                            transform:
                                              "matrix(1, 0, 0, 1, -58, -252)",
                                          }}
                                        >
                                          <div
                                            style={{
                                              position: "absolute",
                                              left: 0,
                                              top: 256,
                                              width: 256,
                                              height: 256,
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: 256,
                                                height: 256,
                                              }}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              position: "absolute",
                                              left: "-256px",
                                              top: 256,
                                              width: 256,
                                              height: 256,
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: 256,
                                                height: 256,
                                              }}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              position: "absolute",
                                              left: "-256px",
                                              top: 0,
                                              width: 256,
                                              height: 256,
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: 256,
                                                height: 256,
                                              }}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              position: "absolute",
                                              left: 0,
                                              top: 0,
                                              width: 256,
                                              height: 256,
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: 256,
                                                height: 256,
                                              }}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              position: "absolute",
                                              left: 256,
                                              top: 0,
                                              width: 256,
                                              height: 256,
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: 256,
                                                height: 256,
                                              }}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              position: "absolute",
                                              left: 256,
                                              top: 256,
                                              width: 256,
                                              height: 256,
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: 256,
                                                height: 256,
                                              }}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              position: "absolute",
                                              left: "-512px",
                                              top: 256,
                                              width: 256,
                                              height: 256,
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: 256,
                                                height: 256,
                                              }}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              position: "absolute",
                                              left: "-512px",
                                              top: 0,
                                              width: 256,
                                              height: 256,
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: 256,
                                                height: 256,
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        zIndex: 101,
                                        width: "100%",
                                      }}
                                    />
                                    <div
                                      style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        zIndex: 102,
                                        width: "100%",
                                      }}
                                    />
                                    <div
                                      style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        zIndex: 103,
                                        width: "100%",
                                      }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          left: 0,
                                          top: 0,
                                          zIndex: -1,
                                        }}
                                      >
                                        <div
                                          style={{
                                            position: "absolute",
                                            zIndex: 988,
                                            transform:
                                              "matrix(1, 0, 0, 1, -58, -252)",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: 256,
                                              height: 256,
                                              overflow: "hidden",
                                              position: "absolute",
                                              left: 0,
                                              top: 256,
                                            }}
                                          />
                                          <div
                                            style={{
                                              width: 256,
                                              height: 256,
                                              overflow: "hidden",
                                              position: "absolute",
                                              left: "-256px",
                                              top: 256,
                                            }}
                                          />
                                          <div
                                            style={{
                                              width: 256,
                                              height: 256,
                                              overflow: "hidden",
                                              position: "absolute",
                                              left: "-256px",
                                              top: 0,
                                            }}
                                          />
                                          <div
                                            style={{
                                              width: 256,
                                              height: 256,
                                              overflow: "hidden",
                                              position: "absolute",
                                              left: 0,
                                              top: 0,
                                            }}
                                          />
                                          <div
                                            style={{
                                              width: 256,
                                              height: 256,
                                              overflow: "hidden",
                                              position: "absolute",
                                              left: 256,
                                              top: 0,
                                            }}
                                          />
                                          <div
                                            style={{
                                              width: 256,
                                              height: 256,
                                              overflow: "hidden",
                                              position: "absolute",
                                              left: 256,
                                              top: 256,
                                            }}
                                          />
                                          <div
                                            style={{
                                              width: 256,
                                              height: 256,
                                              overflow: "hidden",
                                              position: "absolute",
                                              left: "-512px",
                                              top: 256,
                                            }}
                                          />
                                          <div
                                            style={{
                                              width: 256,
                                              height: 256,
                                              overflow: "hidden",
                                              position: "absolute",
                                              left: "-512px",
                                              top: 0,
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        style={{
                                          width: 50,
                                          height: 50,
                                          overflow: "hidden",
                                          position: "absolute",
                                          left: "-25px",
                                          top: "-50px",
                                          zIndex: 0,
                                        }}
                                      >
                                        <img
                                          alt
                                          src="images/map-marker.png"
                                          draggable="false"
                                          style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            width: 50,
                                            height: 50,
                                            userSelect: "none",
                                            border: 0,
                                            padding: 0,
                                            margin: 0,
                                            maxWidth: "none",
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div
                                      style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        zIndex: 0,
                                      }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          zIndex: 988,
                                          transform:
                                            "matrix(1, 0, 0, 1, -58, -252)",
                                        }}
                                      >
                                        <div
                                          style={{
                                            position: "absolute",
                                            left: "-256px",
                                            top: 256,
                                            width: 256,
                                            height: 256,
                                            transition:
                                              "opacity 200ms linear 0s",
                                          }}
                                        >
                                          <img
                                            draggable="false"
                                            alt
                                            role="presentation"
                                            src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i12!2i3766!3i2458!4i256!2m3!1e0!2sm!3i546272108!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC52Om9uLHMudDoxfHMuZTpsLnQuZnxwLmM6I2ZmNDQ0NDQ0LHMudDoxOHxwLnY6b2ZmLHMudDoxOXxwLnY6b2ZmLHMudDoyMHxwLnY6b2ZmLHMudDoyMXxwLnY6b2ZmLHMudDoyMXxzLmU6bC50fHAudjpvZmYscy50OjV8cC5jOiNmZmYyZjJmMixzLnQ6ODF8cC52OnNpbXBsaWZpZWQscy50OjJ8cC52Om9mZnxwLmM6I2ZmY2VlOWRlfHAuczoyfHAudzowLjgwLHMudDozN3xzLmU6Zy5mfHAudjpvZmYscy50OjQwfHAudjpvbixzLnQ6M3xwLnM6LTEwMHxwLmw6NDUscy50OjQ5fHAudjpzaW1wbGlmaWVkLHMudDo0OXxzLmU6Zy5mfHAudjpvbnxwLmM6I2ZmZjVkNmQ2LHMudDo0OXxzLmU6bC50fHAudjpvZmYscy50OjQ5fHMuZTpsLml8cC5oOiNmZjAwMDB8cC52Om9uLHMudDo3ODV8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6Nzg1fHMuZTpsLml8cC52Om9ufHAuaDojMDA2NGZmfHAuZzoxLjQ0fHAubDotM3xwLnc6MS42OSxzLnQ6NTB8cC52Om9uLHMudDo1MHxzLmU6bC50fHAudjpvZmYscy50OjUwfHMuZTpsLml8cC52Om9mZixzLnQ6NTF8cC52Om9uLHMudDo1MXxzLmU6bC50fHAudjpzaW1wbGlmaWVkfHAudzowLjMxfHAuZzoxLjQzfHAubDotNXxwLnM6LTIyLHMudDo0fHAudjpvZmYscy50OjY1fHAudjpvbnxwLmg6I2ZmMDAwMCxzLnQ6MTA1OXxwLnY6c2ltcGxpZmllZHxwLmg6I2ZmMDA0NSxzLnQ6MTA1OHxwLnY6b258cC5oOiMwMGQxZmYscy50OjEwNTh8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6MTA1N3xwLnY6c2ltcGxpZmllZHxwLmg6IzAwY2JmZixzLnQ6MTA1N3xzLmU6bC50fHAudjpzaW1wbGlmaWVkLHMudDo2fHAuYzojZmY0NmJjZWN8cC52Om9uLHMudDo2fHMuZTpnLmZ8cC53OjEuNjF8cC5jOiNmZmNkZTJlNXxwLnY6b24!4e0&key=AIzaSyCOdKtT5fapH3_OfhV3HFeZjqFs4OfNIew&token=96024"
                                            style={{
                                              width: 256,
                                              height: 256,
                                              userSelect: "none",
                                              border: 0,
                                              padding: 0,
                                              margin: 0,
                                              maxWidth: "none",
                                            }}
                                          />
                                        </div>
                                        <div
                                          style={{
                                            position: "absolute",
                                            left: 256,
                                            top: 256,
                                            width: 256,
                                            height: 256,
                                            transition:
                                              "opacity 200ms linear 0s",
                                          }}
                                        >
                                          <img
                                            draggable="false"
                                            alt
                                            role="presentation"
                                            src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i12!2i3768!3i2458!4i256!2m3!1e0!2sm!3i546272120!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC52Om9uLHMudDoxfHMuZTpsLnQuZnxwLmM6I2ZmNDQ0NDQ0LHMudDoxOHxwLnY6b2ZmLHMudDoxOXxwLnY6b2ZmLHMudDoyMHxwLnY6b2ZmLHMudDoyMXxwLnY6b2ZmLHMudDoyMXxzLmU6bC50fHAudjpvZmYscy50OjV8cC5jOiNmZmYyZjJmMixzLnQ6ODF8cC52OnNpbXBsaWZpZWQscy50OjJ8cC52Om9mZnxwLmM6I2ZmY2VlOWRlfHAuczoyfHAudzowLjgwLHMudDozN3xzLmU6Zy5mfHAudjpvZmYscy50OjQwfHAudjpvbixzLnQ6M3xwLnM6LTEwMHxwLmw6NDUscy50OjQ5fHAudjpzaW1wbGlmaWVkLHMudDo0OXxzLmU6Zy5mfHAudjpvbnxwLmM6I2ZmZjVkNmQ2LHMudDo0OXxzLmU6bC50fHAudjpvZmYscy50OjQ5fHMuZTpsLml8cC5oOiNmZjAwMDB8cC52Om9uLHMudDo3ODV8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6Nzg1fHMuZTpsLml8cC52Om9ufHAuaDojMDA2NGZmfHAuZzoxLjQ0fHAubDotM3xwLnc6MS42OSxzLnQ6NTB8cC52Om9uLHMudDo1MHxzLmU6bC50fHAudjpvZmYscy50OjUwfHMuZTpsLml8cC52Om9mZixzLnQ6NTF8cC52Om9uLHMudDo1MXxzLmU6bC50fHAudjpzaW1wbGlmaWVkfHAudzowLjMxfHAuZzoxLjQzfHAubDotNXxwLnM6LTIyLHMudDo0fHAudjpvZmYscy50OjY1fHAudjpvbnxwLmg6I2ZmMDAwMCxzLnQ6MTA1OXxwLnY6c2ltcGxpZmllZHxwLmg6I2ZmMDA0NSxzLnQ6MTA1OHxwLnY6b258cC5oOiMwMGQxZmYscy50OjEwNTh8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6MTA1N3xwLnY6c2ltcGxpZmllZHxwLmg6IzAwY2JmZixzLnQ6MTA1N3xzLmU6bC50fHAudjpzaW1wbGlmaWVkLHMudDo2fHAuYzojZmY0NmJjZWN8cC52Om9uLHMudDo2fHMuZTpnLmZ8cC53OjEuNjF8cC5jOiNmZmNkZTJlNXxwLnY6b24!4e0&key=AIzaSyCOdKtT5fapH3_OfhV3HFeZjqFs4OfNIew&token=67711"
                                            style={{
                                              width: 256,
                                              height: 256,
                                              userSelect: "none",
                                              border: 0,
                                              padding: 0,
                                              margin: 0,
                                              maxWidth: "none",
                                            }}
                                          />
                                        </div>
                                        <div
                                          style={{
                                            position: "absolute",
                                            left: "-256px",
                                            top: 0,
                                            width: 256,
                                            height: 256,
                                            transition:
                                              "opacity 200ms linear 0s",
                                          }}
                                        >
                                          <img
                                            draggable="false"
                                            alt
                                            role="presentation"
                                            src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i12!2i3766!3i2457!4i256!2m3!1e0!2sm!3i546272120!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC52Om9uLHMudDoxfHMuZTpsLnQuZnxwLmM6I2ZmNDQ0NDQ0LHMudDoxOHxwLnY6b2ZmLHMudDoxOXxwLnY6b2ZmLHMudDoyMHxwLnY6b2ZmLHMudDoyMXxwLnY6b2ZmLHMudDoyMXxzLmU6bC50fHAudjpvZmYscy50OjV8cC5jOiNmZmYyZjJmMixzLnQ6ODF8cC52OnNpbXBsaWZpZWQscy50OjJ8cC52Om9mZnxwLmM6I2ZmY2VlOWRlfHAuczoyfHAudzowLjgwLHMudDozN3xzLmU6Zy5mfHAudjpvZmYscy50OjQwfHAudjpvbixzLnQ6M3xwLnM6LTEwMHxwLmw6NDUscy50OjQ5fHAudjpzaW1wbGlmaWVkLHMudDo0OXxzLmU6Zy5mfHAudjpvbnxwLmM6I2ZmZjVkNmQ2LHMudDo0OXxzLmU6bC50fHAudjpvZmYscy50OjQ5fHMuZTpsLml8cC5oOiNmZjAwMDB8cC52Om9uLHMudDo3ODV8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6Nzg1fHMuZTpsLml8cC52Om9ufHAuaDojMDA2NGZmfHAuZzoxLjQ0fHAubDotM3xwLnc6MS42OSxzLnQ6NTB8cC52Om9uLHMudDo1MHxzLmU6bC50fHAudjpvZmYscy50OjUwfHMuZTpsLml8cC52Om9mZixzLnQ6NTF8cC52Om9uLHMudDo1MXxzLmU6bC50fHAudjpzaW1wbGlmaWVkfHAudzowLjMxfHAuZzoxLjQzfHAubDotNXxwLnM6LTIyLHMudDo0fHAudjpvZmYscy50OjY1fHAudjpvbnxwLmg6I2ZmMDAwMCxzLnQ6MTA1OXxwLnY6c2ltcGxpZmllZHxwLmg6I2ZmMDA0NSxzLnQ6MTA1OHxwLnY6b258cC5oOiMwMGQxZmYscy50OjEwNTh8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6MTA1N3xwLnY6c2ltcGxpZmllZHxwLmg6IzAwY2JmZixzLnQ6MTA1N3xzLmU6bC50fHAudjpzaW1wbGlmaWVkLHMudDo2fHAuYzojZmY0NmJjZWN8cC52Om9uLHMudDo2fHMuZTpnLmZ8cC53OjEuNjF8cC5jOiNmZmNkZTJlNXxwLnY6b24!4e0&key=AIzaSyCOdKtT5fapH3_OfhV3HFeZjqFs4OfNIew&token=2892"
                                            style={{
                                              width: 256,
                                              height: 256,
                                              userSelect: "none",
                                              border: 0,
                                              padding: 0,
                                              margin: 0,
                                              maxWidth: "none",
                                            }}
                                          />
                                        </div>
                                        <div
                                          style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            width: 256,
                                            height: 256,
                                            transition:
                                              "opacity 200ms linear 0s",
                                          }}
                                        >
                                          <img
                                            draggable="false"
                                            alt
                                            role="presentation"
                                            src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i12!2i3767!3i2457!4i256!2m3!1e0!2sm!3i546272120!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC52Om9uLHMudDoxfHMuZTpsLnQuZnxwLmM6I2ZmNDQ0NDQ0LHMudDoxOHxwLnY6b2ZmLHMudDoxOXxwLnY6b2ZmLHMudDoyMHxwLnY6b2ZmLHMudDoyMXxwLnY6b2ZmLHMudDoyMXxzLmU6bC50fHAudjpvZmYscy50OjV8cC5jOiNmZmYyZjJmMixzLnQ6ODF8cC52OnNpbXBsaWZpZWQscy50OjJ8cC52Om9mZnxwLmM6I2ZmY2VlOWRlfHAuczoyfHAudzowLjgwLHMudDozN3xzLmU6Zy5mfHAudjpvZmYscy50OjQwfHAudjpvbixzLnQ6M3xwLnM6LTEwMHxwLmw6NDUscy50OjQ5fHAudjpzaW1wbGlmaWVkLHMudDo0OXxzLmU6Zy5mfHAudjpvbnxwLmM6I2ZmZjVkNmQ2LHMudDo0OXxzLmU6bC50fHAudjpvZmYscy50OjQ5fHMuZTpsLml8cC5oOiNmZjAwMDB8cC52Om9uLHMudDo3ODV8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6Nzg1fHMuZTpsLml8cC52Om9ufHAuaDojMDA2NGZmfHAuZzoxLjQ0fHAubDotM3xwLnc6MS42OSxzLnQ6NTB8cC52Om9uLHMudDo1MHxzLmU6bC50fHAudjpvZmYscy50OjUwfHMuZTpsLml8cC52Om9mZixzLnQ6NTF8cC52Om9uLHMudDo1MXxzLmU6bC50fHAudjpzaW1wbGlmaWVkfHAudzowLjMxfHAuZzoxLjQzfHAubDotNXxwLnM6LTIyLHMudDo0fHAudjpvZmYscy50OjY1fHAudjpvbnxwLmg6I2ZmMDAwMCxzLnQ6MTA1OXxwLnY6c2ltcGxpZmllZHxwLmg6I2ZmMDA0NSxzLnQ6MTA1OHxwLnY6b258cC5oOiMwMGQxZmYscy50OjEwNTh8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6MTA1N3xwLnY6c2ltcGxpZmllZHxwLmg6IzAwY2JmZixzLnQ6MTA1N3xzLmU6bC50fHAudjpzaW1wbGlmaWVkLHMudDo2fHAuYzojZmY0NmJjZWN8cC52Om9uLHMudDo2fHMuZTpnLmZ8cC53OjEuNjF8cC5jOiNmZmNkZTJlNXxwLnY6b24!4e0&key=AIzaSyCOdKtT5fapH3_OfhV3HFeZjqFs4OfNIew&token=68417"
                                            style={{
                                              width: 256,
                                              height: 256,
                                              userSelect: "none",
                                              border: 0,
                                              padding: 0,
                                              margin: 0,
                                              maxWidth: "none",
                                            }}
                                          />
                                        </div>
                                        <div
                                          style={{
                                            position: "absolute",
                                            left: 256,
                                            top: 0,
                                            width: 256,
                                            height: 256,
                                            transition:
                                              "opacity 200ms linear 0s",
                                          }}
                                        >
                                          <img
                                            draggable="false"
                                            alt
                                            role="presentation"
                                            src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i12!2i3768!3i2457!4i256!2m3!1e0!2sm!3i546272120!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC52Om9uLHMudDoxfHMuZTpsLnQuZnxwLmM6I2ZmNDQ0NDQ0LHMudDoxOHxwLnY6b2ZmLHMudDoxOXxwLnY6b2ZmLHMudDoyMHxwLnY6b2ZmLHMudDoyMXxwLnY6b2ZmLHMudDoyMXxzLmU6bC50fHAudjpvZmYscy50OjV8cC5jOiNmZmYyZjJmMixzLnQ6ODF8cC52OnNpbXBsaWZpZWQscy50OjJ8cC52Om9mZnxwLmM6I2ZmY2VlOWRlfHAuczoyfHAudzowLjgwLHMudDozN3xzLmU6Zy5mfHAudjpvZmYscy50OjQwfHAudjpvbixzLnQ6M3xwLnM6LTEwMHxwLmw6NDUscy50OjQ5fHAudjpzaW1wbGlmaWVkLHMudDo0OXxzLmU6Zy5mfHAudjpvbnxwLmM6I2ZmZjVkNmQ2LHMudDo0OXxzLmU6bC50fHAudjpvZmYscy50OjQ5fHMuZTpsLml8cC5oOiNmZjAwMDB8cC52Om9uLHMudDo3ODV8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6Nzg1fHMuZTpsLml8cC52Om9ufHAuaDojMDA2NGZmfHAuZzoxLjQ0fHAubDotM3xwLnc6MS42OSxzLnQ6NTB8cC52Om9uLHMudDo1MHxzLmU6bC50fHAudjpvZmYscy50OjUwfHMuZTpsLml8cC52Om9mZixzLnQ6NTF8cC52Om9uLHMudDo1MXxzLmU6bC50fHAudjpzaW1wbGlmaWVkfHAudzowLjMxfHAuZzoxLjQzfHAubDotNXxwLnM6LTIyLHMudDo0fHAudjpvZmYscy50OjY1fHAudjpvbnxwLmg6I2ZmMDAwMCxzLnQ6MTA1OXxwLnY6c2ltcGxpZmllZHxwLmg6I2ZmMDA0NSxzLnQ6MTA1OHxwLnY6b258cC5oOiMwMGQxZmYscy50OjEwNTh8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6MTA1N3xwLnY6c2ltcGxpZmllZHxwLmg6IzAwY2JmZixzLnQ6MTA1N3xzLmU6bC50fHAudjpzaW1wbGlmaWVkLHMudDo2fHAuYzojZmY0NmJjZWN8cC52Om9uLHMudDo2fHMuZTpnLmZ8cC53OjEuNjF8cC5jOiNmZmNkZTJlNXxwLnY6b24!4e0&key=AIzaSyCOdKtT5fapH3_OfhV3HFeZjqFs4OfNIew&token=2871"
                                            style={{
                                              width: 256,
                                              height: 256,
                                              userSelect: "none",
                                              border: 0,
                                              padding: 0,
                                              margin: 0,
                                              maxWidth: "none",
                                            }}
                                          />
                                        </div>
                                        <div
                                          style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 256,
                                            width: 256,
                                            height: 256,
                                            transition:
                                              "opacity 200ms linear 0s",
                                          }}
                                        >
                                          <img
                                            draggable="false"
                                            alt
                                            role="presentation"
                                            src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i12!2i3767!3i2458!4i256!2m3!1e0!2sm!3i546272120!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC52Om9uLHMudDoxfHMuZTpsLnQuZnxwLmM6I2ZmNDQ0NDQ0LHMudDoxOHxwLnY6b2ZmLHMudDoxOXxwLnY6b2ZmLHMudDoyMHxwLnY6b2ZmLHMudDoyMXxwLnY6b2ZmLHMudDoyMXxzLmU6bC50fHAudjpvZmYscy50OjV8cC5jOiNmZmYyZjJmMixzLnQ6ODF8cC52OnNpbXBsaWZpZWQscy50OjJ8cC52Om9mZnxwLmM6I2ZmY2VlOWRlfHAuczoyfHAudzowLjgwLHMudDozN3xzLmU6Zy5mfHAudjpvZmYscy50OjQwfHAudjpvbixzLnQ6M3xwLnM6LTEwMHxwLmw6NDUscy50OjQ5fHAudjpzaW1wbGlmaWVkLHMudDo0OXxzLmU6Zy5mfHAudjpvbnxwLmM6I2ZmZjVkNmQ2LHMudDo0OXxzLmU6bC50fHAudjpvZmYscy50OjQ5fHMuZTpsLml8cC5oOiNmZjAwMDB8cC52Om9uLHMudDo3ODV8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6Nzg1fHMuZTpsLml8cC52Om9ufHAuaDojMDA2NGZmfHAuZzoxLjQ0fHAubDotM3xwLnc6MS42OSxzLnQ6NTB8cC52Om9uLHMudDo1MHxzLmU6bC50fHAudjpvZmYscy50OjUwfHMuZTpsLml8cC52Om9mZixzLnQ6NTF8cC52Om9uLHMudDo1MXxzLmU6bC50fHAudjpzaW1wbGlmaWVkfHAudzowLjMxfHAuZzoxLjQzfHAubDotNXxwLnM6LTIyLHMudDo0fHAudjpvZmYscy50OjY1fHAudjpvbnxwLmg6I2ZmMDAwMCxzLnQ6MTA1OXxwLnY6c2ltcGxpZmllZHxwLmg6I2ZmMDA0NSxzLnQ6MTA1OHxwLnY6b258cC5oOiMwMGQxZmYscy50OjEwNTh8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6MTA1N3xwLnY6c2ltcGxpZmllZHxwLmg6IzAwY2JmZixzLnQ6MTA1N3xzLmU6bC50fHAudjpzaW1wbGlmaWVkLHMudDo2fHAuYzojZmY0NmJjZWN8cC52Om9uLHMudDo2fHMuZTpnLmZ8cC53OjEuNjF8cC5jOiNmZmNkZTJlNXxwLnY6b24!4e0&key=AIzaSyCOdKtT5fapH3_OfhV3HFeZjqFs4OfNIew&token=2186"
                                            style={{
                                              width: 256,
                                              height: 256,
                                              userSelect: "none",
                                              border: 0,
                                              padding: 0,
                                              margin: 0,
                                              maxWidth: "none",
                                            }}
                                          />
                                        </div>
                                        <div
                                          style={{
                                            position: "absolute",
                                            left: "-512px",
                                            top: 256,
                                            width: 256,
                                            height: 256,
                                            transition:
                                              "opacity 200ms linear 0s",
                                          }}
                                        >
                                          <img
                                            draggable="false"
                                            alt
                                            role="presentation"
                                            src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i12!2i3765!3i2458!4i256!2m3!1e0!2sm!3i546272096!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC52Om9uLHMudDoxfHMuZTpsLnQuZnxwLmM6I2ZmNDQ0NDQ0LHMudDoxOHxwLnY6b2ZmLHMudDoxOXxwLnY6b2ZmLHMudDoyMHxwLnY6b2ZmLHMudDoyMXxwLnY6b2ZmLHMudDoyMXxzLmU6bC50fHAudjpvZmYscy50OjV8cC5jOiNmZmYyZjJmMixzLnQ6ODF8cC52OnNpbXBsaWZpZWQscy50OjJ8cC52Om9mZnxwLmM6I2ZmY2VlOWRlfHAuczoyfHAudzowLjgwLHMudDozN3xzLmU6Zy5mfHAudjpvZmYscy50OjQwfHAudjpvbixzLnQ6M3xwLnM6LTEwMHxwLmw6NDUscy50OjQ5fHAudjpzaW1wbGlmaWVkLHMudDo0OXxzLmU6Zy5mfHAudjpvbnxwLmM6I2ZmZjVkNmQ2LHMudDo0OXxzLmU6bC50fHAudjpvZmYscy50OjQ5fHMuZTpsLml8cC5oOiNmZjAwMDB8cC52Om9uLHMudDo3ODV8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6Nzg1fHMuZTpsLml8cC52Om9ufHAuaDojMDA2NGZmfHAuZzoxLjQ0fHAubDotM3xwLnc6MS42OSxzLnQ6NTB8cC52Om9uLHMudDo1MHxzLmU6bC50fHAudjpvZmYscy50OjUwfHMuZTpsLml8cC52Om9mZixzLnQ6NTF8cC52Om9uLHMudDo1MXxzLmU6bC50fHAudjpzaW1wbGlmaWVkfHAudzowLjMxfHAuZzoxLjQzfHAubDotNXxwLnM6LTIyLHMudDo0fHAudjpvZmYscy50OjY1fHAudjpvbnxwLmg6I2ZmMDAwMCxzLnQ6MTA1OXxwLnY6c2ltcGxpZmllZHxwLmg6I2ZmMDA0NSxzLnQ6MTA1OHxwLnY6b258cC5oOiMwMGQxZmYscy50OjEwNTh8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6MTA1N3xwLnY6c2ltcGxpZmllZHxwLmg6IzAwY2JmZixzLnQ6MTA1N3xzLmU6bC50fHAudjpzaW1wbGlmaWVkLHMudDo2fHAuYzojZmY0NmJjZWN8cC52Om9uLHMudDo2fHMuZTpnLmZ8cC53OjEuNjF8cC5jOiNmZmNkZTJlNXxwLnY6b24!4e0&key=AIzaSyCOdKtT5fapH3_OfhV3HFeZjqFs4OfNIew&token=85807"
                                            style={{
                                              width: 256,
                                              height: 256,
                                              userSelect: "none",
                                              border: 0,
                                              padding: 0,
                                              margin: 0,
                                              maxWidth: "none",
                                            }}
                                          />
                                        </div>
                                        <div
                                          style={{
                                            position: "absolute",
                                            left: "-512px",
                                            top: 0,
                                            width: 256,
                                            height: 256,
                                            transition:
                                              "opacity 200ms linear 0s",
                                          }}
                                        >
                                          <img
                                            draggable="false"
                                            alt
                                            role="presentation"
                                            src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i12!2i3765!3i2457!4i256!2m3!1e0!2sm!3i546272108!3m17!2sen-GB!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC52Om9uLHMudDoxfHMuZTpsLnQuZnxwLmM6I2ZmNDQ0NDQ0LHMudDoxOHxwLnY6b2ZmLHMudDoxOXxwLnY6b2ZmLHMudDoyMHxwLnY6b2ZmLHMudDoyMXxwLnY6b2ZmLHMudDoyMXxzLmU6bC50fHAudjpvZmYscy50OjV8cC5jOiNmZmYyZjJmMixzLnQ6ODF8cC52OnNpbXBsaWZpZWQscy50OjJ8cC52Om9mZnxwLmM6I2ZmY2VlOWRlfHAuczoyfHAudzowLjgwLHMudDozN3xzLmU6Zy5mfHAudjpvZmYscy50OjQwfHAudjpvbixzLnQ6M3xwLnM6LTEwMHxwLmw6NDUscy50OjQ5fHAudjpzaW1wbGlmaWVkLHMudDo0OXxzLmU6Zy5mfHAudjpvbnxwLmM6I2ZmZjVkNmQ2LHMudDo0OXxzLmU6bC50fHAudjpvZmYscy50OjQ5fHMuZTpsLml8cC5oOiNmZjAwMDB8cC52Om9uLHMudDo3ODV8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6Nzg1fHMuZTpsLml8cC52Om9ufHAuaDojMDA2NGZmfHAuZzoxLjQ0fHAubDotM3xwLnc6MS42OSxzLnQ6NTB8cC52Om9uLHMudDo1MHxzLmU6bC50fHAudjpvZmYscy50OjUwfHMuZTpsLml8cC52Om9mZixzLnQ6NTF8cC52Om9uLHMudDo1MXxzLmU6bC50fHAudjpzaW1wbGlmaWVkfHAudzowLjMxfHAuZzoxLjQzfHAubDotNXxwLnM6LTIyLHMudDo0fHAudjpvZmYscy50OjY1fHAudjpvbnxwLmg6I2ZmMDAwMCxzLnQ6MTA1OXxwLnY6c2ltcGxpZmllZHxwLmg6I2ZmMDA0NSxzLnQ6MTA1OHxwLnY6b258cC5oOiMwMGQxZmYscy50OjEwNTh8cy5lOmwudHxwLnY6c2ltcGxpZmllZCxzLnQ6MTA1N3xwLnY6c2ltcGxpZmllZHxwLmg6IzAwY2JmZixzLnQ6MTA1N3xzLmU6bC50fHAudjpzaW1wbGlmaWVkLHMudDo2fHAuYzojZmY0NmJjZWN8cC52Om9uLHMudDo2fHMuZTpnLmZ8cC53OjEuNjF8cC5jOiNmZmNkZTJlNXxwLnY6b24!4e0&key=AIzaSyCOdKtT5fapH3_OfhV3HFeZjqFs4OfNIew&token=96730"
                                            style={{
                                              width: 256,
                                              height: 256,
                                              userSelect: "none",
                                              border: 0,
                                              padding: 0,
                                              margin: 0,
                                              maxWidth: "none",
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="gm-style-pbc"
                                    style={{
                                      zIndex: 2,
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      padding: 0,
                                      borderWidth: 0,
                                      margin: 0,
                                      left: 0,
                                      top: 0,
                                      opacity: 0,
                                    }}
                                  >
                                    <p className="gm-style-pbt" />
                                  </div>
                                  <div
                                    style={{
                                      zIndex: 3,
                                      position: "absolute",
                                      height: "100%",
                                      width: "100%",
                                      padding: 0,
                                      borderWidth: 0,
                                      margin: 0,
                                      left: 0,
                                      top: 0,
                                      touchAction: "pan-x pan-y",
                                    }}
                                  >
                                    <div
                                      style={{
                                        zIndex: 4,
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%",
                                        width: "100%",
                                        transform: "translate(0px, 0px)",
                                      }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          left: 0,
                                          top: 0,
                                          zIndex: 104,
                                          width: "100%",
                                        }}
                                      />
                                      <div
                                        style={{
                                          position: "absolute",
                                          left: 0,
                                          top: 0,
                                          zIndex: 105,
                                          width: "100%",
                                        }}
                                      />
                                      <div
                                        style={{
                                          position: "absolute",
                                          left: 0,
                                          top: 0,
                                          zIndex: 106,
                                          width: "100%",
                                        }}
                                      >
                                        <div
                                          title
                                          role="button"
                                          tabIndex={0}
                                          style={{
                                            width: 50,
                                            height: 50,
                                            overflow: "hidden",
                                            position: "absolute",
                                            cursor: "pointer",
                                            touchAction: "none",
                                            left: "-25px",
                                            top: "-50px",
                                            zIndex: 0,
                                          }}
                                        >
                                          <img
                                            alt
                                            src="../../maps.gstatic.com/mapfiles/transparent.png"
                                            draggable="false"
                                            style={{
                                              width: 50,
                                              height: 50,
                                              userSelect: "none",
                                              border: 0,
                                              padding: 0,
                                              margin: 0,
                                              maxWidth: "none",
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        style={{
                                          position: "absolute",
                                          left: 0,
                                          top: 0,
                                          zIndex: 107,
                                          width: "100%",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <iframe
                                  aria-hidden="true"
                                  frameBorder={0}
                                  tabIndex={-1}
                                  style={{
                                    zIndex: -1,
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    top: 0,
                                    left: 0,
                                    border: "none",
                                  }}
                                />
                                <div
                                  style={{
                                    pointerEvents: "none",
                                    width: "100%",
                                    height: "100%",
                                    boxSizing: "border-box",
                                    position: "absolute",
                                    zIndex: 1000002,
                                    opacity: 0,
                                    border: "2px solid rgb(26, 115, 232)",
                                  }}
                                />
                                <div />
                                <div />
                                <div />
                                <div />
                                <div>
                                  <button
                                    draggable="false"
                                    title="Toggle fullscreen view"
                                    aria-label="Toggle fullscreen view"
                                    type="button"
                                    className="gm-control-active gm-fullscreen-control"
                                    style={{
                                      background: "none rgb(255, 255, 255)",
                                      border: 0,
                                      margin: 10,
                                      padding: 0,
                                      textTransform: "none",
                                      appearance: "none",
                                      position: "absolute",
                                      cursor: "pointer",
                                      userSelect: "none",
                                      borderRadius: 2,
                                      height: 40,
                                      width: 40,
                                      boxShadow:
                                        "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
                                      overflow: "hidden",
                                      display: "none",
                                      top: 0,
                                      right: 0,
                                    }}
                                  >
                                    <img
                                      src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                      alt
                                      style={{ height: 18, width: 18 }}
                                    />
                                    <img
                                      src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                      alt
                                      style={{ height: 18, width: 18 }}
                                    />
                                    <img
                                      src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                      alt
                                      style={{ height: 18, width: 18 }}
                                    />
                                  </button>
                                </div>
                                <div />
                                <div />
                                <div />
                                <div />
                                <div />
                                <div>
                                  <div
                                    style={{
                                      marginLeft: 5,
                                      marginRight: 5,
                                      zIndex: 1000000,
                                      position: "absolute",
                                      left: 0,
                                      bottom: 0,
                                    }}
                                  >
                                    <a
                                      target="_blank"
                                      rel="noopener"
                                      href="https://maps.google.com/maps?ll=-33.86938,151.104&z=12&t=m&hl=en-GB&gl=US&mapclient=apiv3"
                                      title="Open this area in Google Maps (opens a new window)"
                                      style={{
                                        position: "static",
                                        overflow: "visible",
                                        float: "none",
                                        display: "inline",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: 66,
                                          height: 26,
                                          cursor: "pointer",
                                        }}
                                      >
                                        <img
                                          alt
                                          src="../../maps.gstatic.com/mapfiles/api-3/images/google_white5.png"
                                          draggable="false"
                                          style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            width: 66,
                                            height: 26,
                                            userSelect: "none",
                                            border: 0,
                                            padding: 0,
                                            margin: 0,
                                          }}
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div />
                                <div>
                                  <div
                                    className="gmnoprint"
                                    style={{
                                      zIndex: 1000001,
                                      position: "absolute",
                                      right: 166,
                                      bottom: 0,
                                      width: 121,
                                    }}
                                  >
                                    <div
                                      draggable="false"
                                      className="gm-style-cc"
                                      style={{
                                        userSelect: "none",
                                        height: 14,
                                        lineHeight: 14,
                                      }}
                                    >
                                      <div
                                        style={{
                                          opacity: "0.7",
                                          width: "100%",
                                          height: "100%",
                                          position: "absolute",
                                        }}
                                      >
                                        <div style={{ width: 1 }} />
                                        <div
                                          style={{
                                            backgroundColor:
                                              "rgb(245, 245, 245)",
                                            width: "auto",
                                            height: "100%",
                                            marginLeft: 1,
                                          }}
                                        />
                                      </div>
                                      <div
                                        style={{
                                          position: "relative",
                                          paddingRight: 6,
                                          paddingLeft: 6,
                                          boxSizing: "border-box",
                                          fontFamily:
                                            "Roboto, Arial, sans-serif",
                                          fontSize: 10,
                                          color: "rgb(0, 0, 0)",
                                          whiteSpace: "nowrap",
                                          direction: "ltr",
                                          textAlign: "right",
                                          verticalAlign: "middle",
                                          display: "inline-block",
                                        }}
                                      >
                                        <a
                                          style={{
                                            textDecoration: "none",
                                            cursor: "pointer",
                                            display: "none",
                                          }}
                                        >
                                          Map Data
                                        </a>
                                        <span>Map data ©2021 Google</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="gmnoprint gm-style-cc"
                                    draggable="false"
                                    style={{
                                      zIndex: 1000001,
                                      userSelect: "none",
                                      height: 14,
                                      lineHeight: 14,
                                      position: "absolute",
                                      right: 95,
                                      bottom: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        opacity: "0.7",
                                        width: "100%",
                                        height: "100%",
                                        position: "absolute",
                                      }}
                                    >
                                      <div style={{ width: 1 }} />
                                      <div
                                        style={{
                                          backgroundColor: "rgb(245, 245, 245)",
                                          width: "auto",
                                          height: "100%",
                                          marginLeft: 1,
                                        }}
                                      />
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        paddingRight: 6,
                                        paddingLeft: 6,
                                        boxSizing: "border-box",
                                        fontFamily: "Roboto, Arial, sans-serif",
                                        fontSize: 10,
                                        color: "rgb(0, 0, 0)",
                                        whiteSpace: "nowrap",
                                        direction: "ltr",
                                        textAlign: "right",
                                        verticalAlign: "middle",
                                        display: "inline-block",
                                      }}
                                    >
                                      <a
                                        href="https://www.google.com/intl/en-GB_US/help/terms_maps.html"
                                        target="_blank"
                                        rel="noopener"
                                        style={{
                                          textDecoration: "none",
                                          cursor: "pointer",
                                          color: "rgb(0, 0, 0)",
                                        }}
                                      >
                                        Terms of Use
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    draggable="false"
                                    className="gm-style-cc"
                                    style={{
                                      userSelect: "none",
                                      height: 14,
                                      lineHeight: 14,
                                      position: "absolute",
                                      right: 0,
                                      bottom: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        opacity: "0.7",
                                        width: "100%",
                                        height: "100%",
                                        position: "absolute",
                                      }}
                                    >
                                      <div style={{ width: 1 }} />
                                      <div
                                        style={{
                                          backgroundColor: "rgb(245, 245, 245)",
                                          width: "auto",
                                          height: "100%",
                                          marginLeft: 1,
                                        }}
                                      />
                                    </div>
                                    <div
                                      style={{
                                        position: "relative",
                                        paddingRight: 6,
                                        paddingLeft: 6,
                                        boxSizing: "border-box",
                                        fontFamily: "Roboto, Arial, sans-serif",
                                        fontSize: 10,
                                        color: "rgb(0, 0, 0)",
                                        whiteSpace: "nowrap",
                                        direction: "ltr",
                                        textAlign: "right",
                                        verticalAlign: "middle",
                                        display: "inline-block",
                                      }}
                                    >
                                      <a
                                        target="_blank"
                                        rel="noopener"
                                        title="Report errors in the road map or imagery to Google"
                                        dir="ltr"
                                        href="https://www.google.com/maps/@-33.86938,151.104,12z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3"
                                        style={{
                                          fontFamily:
                                            "Roboto, Arial, sans-serif",
                                          fontSize: 10,
                                          color: "rgb(0, 0, 0)",
                                          textDecoration: "none",
                                          position: "relative",
                                        }}
                                      >
                                        Report a map error
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    className="gmnoscreen"
                                    style={{
                                      position: "absolute",
                                      right: 0,
                                      bottom: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        fontFamily: "Roboto, Arial, sans-serif",
                                        fontSize: 11,
                                        color: "rgb(0, 0, 0)",
                                        direction: "ltr",
                                        textAlign: "right",
                                        backgroundColor: "rgb(245, 245, 245)",
                                      }}
                                    >
                                      Map data ©2021 Google
                                    </div>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    backgroundColor: "white",
                                    padding: "15px 21px",
                                    border: "1px solid rgb(171, 171, 171)",
                                    fontFamily: "Roboto, Arial, sans-serif",
                                    color: "rgb(34, 34, 34)",
                                    boxSizing: "border-box",
                                    boxShadow:
                                      "rgba(0, 0, 0, 0.2) 0px 4px 16px",
                                    zIndex: 10000002,
                                    display: "none",
                                    width: 300,
                                    height: 180,
                                    position: "absolute",
                                    left: 202,
                                    top: 10,
                                  }}
                                >
                                  <div
                                    style={{
                                      padding: "0px 0px 10px",
                                      fontSize: 16,
                                      boxSizing: "border-box",
                                    }}
                                  >
                                    Map Data
                                  </div>
                                  <div style={{ fontSize: 13 }}>
                                    Map data ©2021 Google
                                  </div>
                                  <button
                                    draggable="false"
                                    title="Close"
                                    aria-label="Close"
                                    type="button"
                                    className="gm-ui-hover-effect"
                                    style={{
                                      background: "none",
                                      display: "block",
                                      border: 0,
                                      margin: 0,
                                      padding: 0,
                                      textTransform: "none",
                                      appearance: "none",
                                      position: "absolute",
                                      cursor: "pointer",
                                      userSelect: "none",
                                      top: 0,
                                      right: 0,
                                      width: 37,
                                      height: 37,
                                    }}
                                  >
                                    <img
                                      src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                                      alt
                                      style={{
                                        pointerEvents: "none",
                                        display: "block",
                                        width: 13,
                                        height: 13,
                                        margin: 12,
                                      }}
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-0 mt-2 ps-0">
                        <a
                          href="#"
                          className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
                        >
                          Save
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div class="card w-100 border-0 p-2"></div> */}
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
    </div>
  );
};

export default ContactInfo;
