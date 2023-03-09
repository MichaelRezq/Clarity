import React from 'react'
import "./css/app.min.css"
// import "./css/icons.min.css"
// import "./css/bootstrap.min.css"
const SingleJob = () => {
  return (
    <div className=''>
 <div>
  {/* START JOB-DEATILS */}
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="card job-detail overflow-hidden">
            <div>
              <img src={require("../../Assets/images/b-14.png")} alt className="img-fluid" />
              <div className="job-details-compnay-profile">
                <img src={require("../../Assets/images/b-14.png")} alt className="img-fluid rounded-3 rounded-3" />
              </div>
            </div>
            <div className="card-body p-4">
              <div>
                <div className="row">
                  <div className="col-md-8">
                    <h5 className="mb-1">Product Designer / UI Designer</h5>
                    <ul className="list-inline text-muted mb-0">
                      <li className="list-inline-item">
                        <i className="mdi mdi-account" /> 8 Vacancy
                      </li>
                      <li className="list-inline-item text-warning review-rating">
                        <span className="badge bg-warning">4.8</span> <i className="mdi mdi-star align-middle" /><i className="mdi mdi-star align-middle" /><i className="mdi mdi-star align-middle" /><i className="mdi mdi-star align-middle" /><i className="mdi mdi-star-half-full align-middle" />
                      </li>
                    </ul>
                  </div>{/*end col*/}
                  <div className="col-lg-4">
                    <ul className="list-inline mb-0 text-lg-end mt-3 mt-lg-0">
                      <li className="list-inline-item">
                        <div className="favorite-icon">
                          <a href="javascript:void(0)"><i className="uil uil-heart-alt" /></a>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="favorite-icon">
                          <a href="javascript:void(0)"><i className="uil uil-setting" /></a>
                        </div>
                      </li>
                    </ul>
                  </div>{/*end col*/}
                </div>{/*end row*/}    
              </div>
              <div className="mt-4">
                <div className="row g-2">
                  <div className="col-lg-3">
                    <div className="border rounded-start p-3">
                      <p className="text-muted mb-0 fs-13">Experience</p>
                      <p className="fw-medium fs-15 mb-0">Minimum 1 Year</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="border p-3">
                      <p className="text-muted fs-13 mb-0">Employee type</p>
                      <p className="fw-medium mb-0">Full Time</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="border p-3">
                      <p className="text-muted fs-13 mb-0">Position</p>
                      <p className="fw-medium mb-0">Senior</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="border rounded-end p-3">
                      <p className="text-muted fs-13 mb-0">Offer Salary</p>
                      <p className="fw-medium mb-0">$2150/ Month</p>
                    </div>
                  </div>
                </div>
              </div>{/*end Experience*/}
              <div className="mt-4">
                <h5 className="mb-3">Job Description</h5>
                <div className="job-detail-desc">
                  <p className="text-muted mb-0">As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.</p>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="mb-3">Responsibilities</h5>
                <div className="job-detail-desc mt-2">
                  <p className="text-muted">As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.</p>
                  <ul className="job-detail-list list-unstyled mb-0 text-muted">
                    <li><i className="uil uil-circle" /> Have sound knowledge of commercial activities.</li>
                    <li><i className="uil uil-circle" /> Build next-generation web applications with a focus on the client side</li> 
                    <li><i className="uil uil-circle" /> Work on multiple projects at once, and consistently meet draft deadlines</li> 
                    <li><i className="uil uil-circle" /> have already graduated or are currently in any year of study</li> 
                    <li><i className="uil uil-circle" /> Revise the work of previous designers to create a unified aesthetic for our brand materials</li> 
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="mb-3">Qualification </h5>
                <div className="job-detail-desc mt-2">
                  <ul className="job-detail-list list-unstyled mb-0 text-muted">
                    <li><i className="uil uil-circle" /> B.C.A / M.C.A under National University course complete.</li> 
                    <li><i className="uil uil-circle" /> 3 or more years of professional design experience</li> 
                    <li><i className="uil uil-circle" /> have already graduated or are currently in any year of study</li> 
                    <li><i className="uil uil-circle" /> Advanced degree or equivalent experience in graphic and web design</li> 
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="mb-3">Skill &amp; Experience</h5>
                <div className="job-details-desc">
                  <ul className="job-detail-list list-unstyled mb-0 text-muted">
                    <li><i className="uil uil-circle" /> Understanding of key Design Principal</li>
                    <li><i className="uil uil-circle" /> Proficiency With HTML, CSS, Bootstrap</li> 
                    <li><i className="uil uil-circle" /> Wordpress: 1 year (Required)</li> 
                    <li><i className="uil uil-circle" /> Experience designing and developing responsive design websites</li>
                    <li><i className="uil uil-circle" /> web designing: 1 year (Preferred)</li>
                  </ul>
                  <div className="mt-4">
                    <span className="badge bg-primary">PHP</span>
                    <span className="badge bg-primary">JS</span>
                    <span className="badge bg-primary">Marketing</span>
                    <span className="badge bg-primary">REACT</span>
                    <span className="badge bg-primary">PHOTOSHOP</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mt-1">
                    Share this job:
                  </li>
                  <li className="list-inline-item mt-1">
                    <a href="javascript:void(0)" className="btn btn-primary btn-hover"><i className="uil uil-facebook-f" /> Facebook</a>
                  </li>
                  <li className="list-inline-item mt-1">
                    <a href="javascript:void(0)" className="btn btn-danger btn-hover"><i className="uil uil-google" /> Google+</a>
                  </li>
                  <li className="list-inline-item mt-1">
                    <a href="javascript:void(0)" className="btn btn-success btn-hover"><i className="uil uil-linkedin-alt" /> linkedin</a>
                  </li>
                </ul>
              </div>
            </div>{/*end card-body*/}
          </div>{/*end job-detail*/}
          <div className="mt-4">
            <h5>Related Jobs</h5>
            <div className="job-box card mt-4">
              <div className="p-4">
                <div className="row">
                  <div className="col-lg-1">
                    <img src={require("../../Assets/images/b-14.png")} alt className="img-fluid rounded-3" />
                  </div>{/*end col*/}
                  <div className="col-lg-10">
                    <div className="mt-3 mt-lg-0">
                      <h5 className="fs-17 mb-1"><a href="job-details.html" className="text-dark">HTML Developer</a> <small className="text-muted fw-normal">(0-2 Yrs Exp.)</small></h5>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0">Jobcy Technology Pvt.Ltd</p>
                        </li>
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0"><i className="mdi mdi-map-marker" /> California</p>
                        </li>
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0"><i className="uil uil-wallet" /> $250 - $800 / month</p>
                        </li>
                      </ul>
                      <div className="mt-2">
                        <span className="badge bg-soft-success mt-1">Full Time</span>
                        <span className="badge bg-soft-warning mt-1">Urgent</span>
                        <span className="badge bg-soft-info mt-1">Private</span>
                      </div>
                    </div>
                  </div>{/*end col*/}
                </div>{/*end row*/}
                <div className="favorite-icon">
                  <a href="javascript:void(0)"><i className="uil uil-heart-alt fs-18" /></a>
                </div>
              </div>
              <div className="p-3 bg-light">
                <div className="row justify-content-between">
                  <div className="col-md-8">
                    <div>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item"><i className="uil uil-tag" /> Keywords :</li>
                        <li className="list-inline-item"><a href="javascript:void(0)" className="primary-link text-muted">Ui designer</a>,</li>
                        <li className="list-inline-item"><a href="javascript:void(0)" className="primary-link text-muted">developer</a></li>
                      </ul>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-3">
                    <div className="text-md-end">
                      <a href="javascript:void(0)" className="primary-link">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end job-box*/}
            <div className="job-box bookmark-post card mt-4">
              <div className="p-4">
                <div className="row">
                  <div className="col-lg-1">
                    <img src={require("../../Assets/images/b-14.png")} alt className="img-fluid rounded-3" />
                  </div>{/*end col*/}
                  <div className="col-lg-10">
                    <div className="mt-3 mt-lg-0">
                      <h5 className="fs-17 mb-1"><a href="job-details.html" className="text-dark">Marketing Director</a> <small className="text-muted fw-normal">(2-4 Yrs Exp.)</small></h5>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0">Creative Agency</p>
                        </li>
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0"><i className="mdi mdi-map-marker" /> New York</p>
                        </li>
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0"><i className="uil uil-wallet" /> $250 - $800 / month</p>
                        </li>
                      </ul>
                      <div className="mt-2">
                        <span className="badge bg-soft-danger mt-1">Part Time</span>
                        <span className="badge bg-soft-info mt-1">Private</span>
                      </div>
                    </div>
                  </div>{/*end col*/}
                </div>{/*end row*/}
                <div className="favorite-icon">
                  <a href="javascript:void(0)"><i className="uil uil-heart-alt fs-18" /></a>
                </div>
              </div>
              <div className="p-3 bg-light">
                <div className="row justify-content-between">
                  <div className="col-md-8">
                    <div>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item"><i className="uil uil-tag" /> Keywords :</li>
                        <li className="list-inline-item"><a href="javascript:void(0)" className="primary-link text-muted">Marketing</a>,</li>
                        <li className="list-inline-item"><a href="javascript:void(0)" className="primary-link text-muted">business</a></li>
                      </ul>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-3">
                    <div className="text-md-end">
                      <a href="javascript:void(0)" className="primary-link">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end job-box*/}
            <div className="job-box card mt-4">
              <div className="p-4">
                <div className="row">
                  <div className="col-lg-1">
                    <img src={require("../../Assets/images/b-14.png")} alt className="img-fluid rounded-3" />
                  </div>{/*end col*/}
                  <div className="col-lg-10">
                    <div className="mt-3 mt-lg-0">
                      <h5 className="fs-17 mb-1"><a href="job-details.html" className="text-dark">HTML Developer</a> <small className="text-muted fw-normal">(2-4 Yrs Exp.)</small></h5>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0">Jobcy Technology Pvt.Ltd</p>
                        </li>
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0"><i className="mdi mdi-map-marker" /> California</p>
                        </li>
                        <li className="list-inline-item">
                          <p className="text-muted fs-14 mb-0"><i className="uil uil-wallet" /> $250 - $800 / month</p>
                        </li>
                      </ul>
                      <div className="mt-2">
                        <span className="badge bg-soft-purple mt-1">Freelance</span>
                        <span className="badge bg-soft-blue mt-1">Internship</span>
                      </div>
                    </div>
                  </div>{/*end col*/}
                </div>{/*end row*/}
                <div className="favorite-icon">
                  <a href="javascript:void(0)"><i className="uil uil-heart-alt fs-18" /></a>
                </div>
              </div>
              <div className="p-3 bg-light">
                <div className="row justify-content-between">
                  <div className="col-md-8">
                    <div>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item"><i className="uil uil-tag" /> Keywords :</li>
                        <li className="list-inline-item"><a href="javascript:void(0)" className="primary-link text-muted">Ui designer</a>,</li>
                        <li className="list-inline-item"><a href="javascript:void(0)" className="primary-link text-muted">developer</a></li>
                      </ul>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-3">
                    <div className="text-md-end">
                      <a href="javascript:void(0)" className="primary-link">Apply Now <i className="mdi mdi-chevron-double-right" /></a>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end job-box*/}
          </div>
          <div className="text-center mt-4">
            <a href="job-list.html" className="primary-link form-text">View More <i className="mdi mdi-arrow-right" /></a>
          </div>
        </div>{/*end col*/}
        <div className="col-lg-4 mt-4 mt-lg-0">
          {/*start side-bar*/}
          <div className="side-bar ms-lg-4">
            <div className="card job-overview">
              <div className="card-body p-4">
                <h6 className="fs-17">Job Overview</h6>
                <ul className="list-unstyled mt-4 mb-0">
                  <li>
                    <div className="d-flex mt-4">
                      <i className="uil uil-user icon bg-soft-primary" />
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Job Title</h6>
                        <p className="text-muted mb-0">Product Designer</p> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex mt-4">
                      <i className="uil uil-star-half-alt icon bg-soft-primary" />
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Experience</h6>
                        <p className="text-muted mb-0"> 0-3 Years</p> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex mt-4">
                      <i className="uil uil-location-point icon bg-soft-primary" />
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Location</h6>
                        <p className="text-muted mb-0"> New york</p> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex mt-4">
                      <i className="uil uil-usd-circle icon bg-soft-primary" />
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Offered Salary</h6>
                        <p className="text-muted mb-0">$35k - $45k</p> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex mt-4">
                      <i className="uil uil-graduation-cap icon bg-soft-primary" />
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Qualification</h6>
                        <p className="text-muted mb-0">Bachelor Degree</p> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex mt-4">
                      <i className="uil uil-building icon bg-soft-primary" />
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Industry</h6>
                        <p className="text-muted mb-0">Private</p> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex mt-4">
                      <i className="uil uil-history icon bg-soft-primary" />
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Date Posted</h6>
                        <p className="text-muted mb-0">Posted 2 hrs ago</p> 
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="mt-3">
                  <a href="#applyNow" data-bs-toggle="modal" className="btn btn-primary btn-hover w-100 mt-2">Apply Now <i className="uil uil-arrow-right" /></a>
                  <a href="bookmark-jobs.html" className="btn btn-soft-warning btn-hover w-100 mt-2"><i className="uil uil-bookmark" /> Add Bookmark</a>
                </div>
              </div>{/*end card-body*/}
            </div>{/*end job-overview*/}
            <div className="card company-profile mt-4">
              <div className="card-body p-4">
                <div className="text-center">
                  <img src={require("../../Assets/images/b-14.png")} alt className="img-fluid rounded-3" />
                  <div className="mt-4">
                    <h6 className="fs-17 mb-1">Jobcy Technology Pvt.Ltd</h6>
                    <p className="text-muted">Since July 2017</p>
                  </div>
                </div>
                <ul className="list-unstyled mt-4">
                  <li>
                    <div className="d-flex">
                      <i className="uil uil-phone-volume text-primary fs-4" />
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Phone</h6>
                        <p className="text-muted fs-14 mb-0">+589 560 56555</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-3">
                    <div className="d-flex">
                      <i className="uil uil-envelope text-primary fs-4" />
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Email</h6>
                        <p className="text-muted fs-14 mb-0">pixltechnology@info.com</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-3">
                    <div className="d-flex">
                      <i className="uil uil-globe text-primary fs-4" />
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Website</h6>
                        <p className="text-muted fs-14 text-break mb-0">www.Jobcytechnology.pvt.ltd.com</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-3">
                    <div className="d-flex">
                      <i className="uil uil-map-marker text-primary fs-4" />
                      <div className="ms-3">
                        <h6 className="fs-14 mb-2">Location</h6>
                        <p className="text-muted fs-14 mb-0">Oakridge Lane Richardson.</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="company-details.html" className="btn btn-primary btn-hover w-100 rounded"><i className="mdi mdi-eye" /> View Profile</a>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h6 className="fs-16 mb-3">Job location</h6>
              <iframe src={require("../../Assets/images/b-14.png")} style={{width: '100%'}} height={250} allowFullScreen loading="lazy" />
            </div>
          </div>
          {/*end side-bar*/}
        </div>{/*end col*/}
      </div>{/*end row*/}
    </div>{/*end container*/}
  </section>
  {/* START JOB-DEATILS */}
  {/* START APPLY MODAL */}
  <div className="modal fade" id="applyNow" tabIndex={-1} aria-labelledby="applyNow" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-5">
          <div className="text-center mb-4">
            <h5 className="modal-title" id="staticBackdropLabel">Apply For This Job</h5>
          </div>
          <div className="position-absolute end-0 top-0 p-3">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="mb-3">
            <label htmlFor="nameControlInput" className="form-label">Name</label>
            <input type="text" className="form-control" id="nameControlInput" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="emailControlInput2" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="emailControlInput2" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="messageControlTextarea" className="form-label">Message</label>
            <textarea className="form-control" id="messageControlTextarea" rows={4} placeholder="Enter your message" defaultValue={""} />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="inputGroupFile01">Resume Upload</label>
            <input type="file" className="form-control" id="inputGroupFile01" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Application</button>
        </div>
      </div>
    </div>
  </div>{/* END APPLY MODAL */}
  {/* End Page-content */}
</div>

    
    </div>
  )
}

export default SingleJob