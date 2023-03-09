import React from 'react'

function AddProblem() {
  return (
    <>
{/*================Add Question Area =================*/}
<section className="all-question-area bg-disable pt-100 pb-120 d-flex justify-content-center">
  <div className="container custom-container">
    <div className="row">
      <div className="col-xl-3 d-xl-block d-none pe-0">
        {/* <div className="forum-left-sidebar-widget">
          <ul className="list-unstyled nav-sidebar">
            <li className="nav-item">
              <a href="index-2.html" className="nav-link"><img src={require("../../Assets/Problems/side-nav/home.png")} alt />Home</a>
            </li>
            <li className="nav-item active">
              <a href="forum-topics.html" className="nav-link"><img src={require("../../Assets/Problems/side-nav/question.png")} alt="briefcase" />Questions</a>
              <span className="icon"><i className="arrow_carrot-down" /></span>
              <ul className="list-unstyled dropdown_nav">
                <li><a href="#">New Questions</a></li>
                <li><a href="#" className="active">Trending Questions</a></li>
                <li><a href="#">Must read Questions</a></li>
                <li><a href="#">Hot Questions</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"><img src={require("../../Assets/Problems/side-nav/link.png")} alt />Communities</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"><img src={require("../../Assets/Problems/side-nav/megaphone.png")} alt />Polls</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"><img src={require("../../Assets/Problems/side-nav/mortarboard.png")} alt />Education</a>
              <span className="icon"><i className="arrow_carrot-down" /></span>
              <ul className="list-unstyled dropdown_nav">
                <li><a href="#">Typography</a></li>
                <li><a href="#">Code</a></li>
                <li><a href="#">Image</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">Keyboard Shortcuts</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"><img src={require("../../Assets/Problems/side-nav/robot.png")} alt />Technology</a>
            </li>
            <li className="nav-item">
              <a href="badges.html" className="nav-link"><img src={require("../../Assets/Problems/side-nav/badge.png")} alt />Badges</a>
            </li>
            <li className="nav-item">
              <a href="add-question.html" className="nav-link"><img src={require("../../Assets/Problems/side-nav/add.png")} alt />Add group</a>
            </li>
            <li className="nav-item">
              <a href="user-list.html" className="nav-link"><img src={require("../../Assets/Problems/side-nav/chat.png")} alt />User</a>
              <span className="icon"><i className="arrow_carrot-down" /></span>
              <ul className="list-unstyled dropdown_nav">
                <li><a href="forum-profile.html">User Profile</a></li>
                <li><a href="user-list.html">User List</a></li>
                <li><a href="user-details.html">User Details</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"><img src={require("../../Assets/Problems/side-nav/lifeguard.png")} alt />Help</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"><img src={require("../../Assets/Problems/side-nav/bag.png")} alt />Buy Theme</a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="col-xl-6 pe-xl-0 ps-xxl-4">
        <div className="add-question-widget">
          <h4 className="widget-title">Create New Question</h4>
          <form action="#">
            <div className="mt-30">
              <label className="label" htmlFor="inp_title">Title <span>*</span></label>
              <div className="icon-input-group">
                <input className="form-control" type="text" id="inp_title" />
                <i className="icon_chat_alt" />
              </div>
              <div className="instruction">
                Please choose an appropriate title for the equation so
                it can be answered easily.
              </div>
            </div>
            <div className="mt-25">
              <label className="label" htmlFor="inp_category">Category <span>*</span></label>
              <div className="icon-input-group">
                <select id="inp_category" className="custom-select form-control">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>
                <i className="icon_folder-open" />
              </div>
              <div className="instruction">
                Please choose an appropriate title for the equation so
                it can be answered easily.
              </div>
            </div>
            <div className="mt-25">
              <label className="label" htmlFor="inp_tag">Tags <span>*</span></label>
              <div className="icon-input-group">
                <input className="form-control" type="text" id="inp_tag" />
                <i className="icon_tags" />
              </div>
              <div className="instruction">
                Please choose suitable Keywords Ex:
                <span>question, poll</span>
              </div>
            </div>
            <div className="mt-25">
              <label className="label" htmlFor="inp_desc">Description <span>*</span></label>
              <textarea id="inp_desc" cols={30} rows={7} className="form-control" defaultValue={""} />
              <div className="instruction">
                Please choose an appropriate title for the equation so
                it can be answered easily.
              </div>
            </div>
            <div className="mt-25">
              <label className="label">Attach File <span>*</span></label>
              <div id="dropzone" className="dropzone">
              </div>
              <ul className="dropzone-file-preview pt-3" id="dropzone-preview-container">
                <li>
                  <div className="upload-progress" data-dz-uploadprogress />
                  <div className="preview-info">
                    <ion-icon name="attach" />
                    <span data-dz-name />
                  </div>
                  <button data-dz-remove>Remove</button>
                </li>
              </ul>
              <div className="form-check mt-30">
                <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" />
                <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                  Is this question is a poll? If you want to be doing a poll click here.
                </label>
              </div>
              <div className="form-check mt-10">
                <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck2" />
                <label className="form-check-label" htmlFor="disabledFieldsetCheck2">
                  Get notified by email when someone answers this question.
                </label>
              </div>
              <div className="form-check mt-10">
                <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck3" />
                <label className="form-check-label" htmlFor="disabledFieldsetCheck3">
                  By asking your question, you agree to the Terms of Service and Privacy
                  Policy.
                </label>
              </div>
              <div className="d-flex justify-content-between mt-60">
                <button className="cancel_btn">Cancel</button>
                <button className="action_btn" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-xl-3">
        <div className="forum-right-sidebar-widget question-sidebar">
          <a href="#" className="action_btn custom-sidebar-btn w-100">Ask Question</a>
          <div className="single-widget-box stat-widget-2 mt-40">
            <div className="widget-header">
              <img src={require("../../Assets/Problems/statistics-icon.png")} alt="icon" />
              <h5>Ama Statistics</h5>
            </div>
            <div className="widget-content">
              <p>Q&amp;A for serious players and enthusiasts of Ama</p>
              <div className="row gx-0">
                <div className="col-4">
                  <h4 className="counter">50</h4>
                  <span>Questions</span>
                </div>
                <div className="col-4">
                  <h4 className="counter">70</h4>
                  <span>Answers</span>
                </div>
                <div className="col-4">
                  <h4>
                    <span className="counter d-inline-block">99</span>%
                  </h4>
                  <span>Answersed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="single-widget-box related-topic mt-40">
            <div className="widget-header">
              <img src={require("../../Assets/Problems/chain.png")} alt="icon" />
              <h5>Related</h5>
            </div>
            <div className="widget-content">
              <ul className="list-unstyled">
                <li>
                  <span className="ans-count">78</span><a href="#">Loop inside React JSX</a>
                </li>
                <li>
                  <span className="ans-count">76</span><a href="#">Show or hide element in
                    React</a>
                </li>
                <li>
                  <span className="ans-count">69</span><a href="#">Hide keyboard in
                    react-native</a>
                </li>
                <li>
                  <span className="ans-count">56</span><a href="#">React Native version
                    mismatch</a>
                </li>
                <li>
                  <span className="ans-count">37</span><a href="#">Hide keyboard in
                    react-native</a>
                </li>
                <li>
                  <span className="ans-count">20</span><a href="#">Show or hide element in
                    React</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="single-widget-box tag-widget mt-40">
            <div className="widget-header">
              <img src={require("../../Assets/Problems/tags-icon.png")} alt="icon" />
              <h5>Tags</h5>
            </div>
            <div className="widget-content">
              <ul className="widget-tag-list-2 list-unstyled tag-light">
                <li><a href="#">jQuery</a></li>
                <li><a href="#">PHP</a></li>
                <li><a href="#">WordPress</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Foram</a></li>
                <li><a href="#">help desk</a></li>
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">support</a></li>
                <li><a href="#">ecommerce</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*================End Add Question Area =================*/}

    </>
  )
}

export default AddProblem