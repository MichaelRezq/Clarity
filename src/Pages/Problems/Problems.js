import React from 'react'
import './Style.css'
import './Responsive.css'
function Problems() {
  return (
    <>
    
    {/* <!--================All Question Area =================--> */}
<section className="all-question-area bg-disable pt-100 pb-lg-120 pb-100 d-flex justify-content-center">
  <div className="container custom-container ">
    <div className="row">
      <div className="col-xl-3 d-xl-block d-none pe-0">
        {/* <div className="forum-left-sidebar-widget">
          <ul className="list-unstyled nav-sidebar">
            <li className="nav-item">
              <a href="index-2.html" className="nav-link"><img src={require("../../Assets/Problems/side-nav/home.png")} alt />Home</a>
            </li>
            <li className="nav-item active">
              <a href="#" className="nav-link"><img src={require("../../Assets/Problems/side-nav/question.png")} alt="briefcase" />Questions</a>
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
              <a href="#" className="nav-link"><img src={require("../../Assets/Problems/side-nav/badge.png")} alt />Badges</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"><img src={require("../../Assets/Problems/side-nav/add.png")} alt />Add group</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link"><img src={require("../../Assets/Problems/side-nav/chat.png")} alt />User</a>
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
      <div className="col-xl-6 chat-left scroll-bar">
        <div className="all-question-widget">
          <div className="widget-header">
            <div className="title">
              <h4 className="mb-0">All Questions</h4>
              <span>250 questions</span>
            </div>
            <div className="filter-tab flex-wrap">
              <ul className="flex-wrap">
                <li><a className="active" href="javascript:void(0)">All</a></li>
                <li><a href="javascript:void(0)">Newest</a></li>
                <li><a href="javascript:void(0)">Active</a></li>
                <li><a href="javascript:void(0)">Bountied</a></li>
                <li><a href="javascript:void(0)">Unanswered</a></li>
                <li><a href="javascript:void(0)">Frequent</a></li>
                <li><a href="javascript:void(0)">Votes</a></li>
                <li>
                  <select className="custom-select" id="filter-tab-more">
                    <option value="More">More</option>
                    <option value="More">More</option>
                    <option value="More">More</option>
                  </select>
                </li>
              </ul>
              <ul>
                <li><a href="javascript:void(0)"><i className="icon_cog" />Filter</a></li>
              </ul>
            </div>
          </div>
          <div className="widget-content">
            <div className="single-question-widget">
              <div className="d-flex">
                <div className="question-content">
                  <div className="question-header">
                    <div className="author-img">
                      <img src={require("../../Assets/Problems/forum/forum-question/question-1.png")} alt />
                    </div>
                    <div className="qtn-title">
                      <a href="#">
                        <h6>How to translate language in react native</h6>
                      </a>
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="author-name">Charlie</span>
                        <span className="author-pos">Admin</span>
                        <span className="timestamp">asked 10 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="question-body">
                    <div className="vote">
                      <button className="up-arrow"><i className="arrow_triangle-up" /></button>
                      <div className="count">10</div>
                      <button className="down-arrow"><i className="arrow_triangle-down " /></button>
                    </div>
                    <div className="q-text">
                      <p>Suppose we have a string in bangla language and we want to
                        convert
                        them to English so what I do ??
                        We want to make language translator app</p>
                      <ul className="q-tag-list mt-3">
                        <li><a href="#">reactjs</a></li>
                        <li><a href="#"> react-native</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="question-reach">
                  <div className="answer">
                    <div>5</div>
                    <div>answers</div>
                  </div>
                  <div className="view">
                    <div>50</div>
                    <div>views</div>
                  </div>
                </div>
              </div>
              <form action="#">
                <div className="comment-bar">
                  <img src={require("../../Assets/Problems/forum/forum-question/user-profile.png")} alt />
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Write your answer..." />
                    <input className="inp-file" type="file" id="commentFile1" />
                    <label className="cam-btn" htmlFor="commentFile1"><i className="icon_camera_alt " /></label>
                  </div>
                  <button className="doc_border_btn" type="submit">Answer</button>
                </div>
              </form>
            </div>
            <div className="single-question-widget">
              <div className="d-flex">
                <div className="question-content">
                  <div className="question-header">
                    <div className="author-img">
                      <img src={require("../../Assets/Problems/forum/forum-question/question-2.png")} alt />
                    </div>
                    <div className="qtn-title">
                      <a href="#">
                        <h6>Change the select field to input type using formly</h6>
                      </a>
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="author-name">Anika George</span>
                        <span className="author-pos">Admin</span>
                        <span className="timestamp">asked 10 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="question-body">
                    <div className="vote">
                      <button className="up-arrow"><i className="arrow_triangle-up" /></button>
                      <div className="count">10</div>
                      <button className="down-arrow"><i className="arrow_triangle-down " /></button>
                    </div>
                    <div className="q-text">
                      <p>Suppose we have a string in bangla language and we want to
                        convert
                        them to English so what I do ??
                        We want to make language translator app</p>
                      <ul className="q-tag-list mt-3">
                        <li><a href="#">reactjs</a></li>
                        <li><a href="#"> react-native</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="question-reach">
                  <div className="answer">
                    <div>5</div>
                    <div>answers</div>
                  </div>
                  <div className="view">
                    <div>50</div>
                    <div>views</div>
                  </div>
                </div>
              </div>
              <form action="#">
                <div className="comment-bar">
                  <img src={require("../../Assets/Problems/forum/forum-question/user-profile.png")} alt />
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Write your answer..." />
                    <input className="inp-file" type="file" id="commentFile2" />
                    <label className="cam-btn" htmlFor="commentFile2"><i className="icon_camera_alt " /></label>
                  </div>
                  <button className="doc_border_btn" type="submit">Answer</button>
                </div>
              </form>
            </div>
            <div className="single-question-widget">
              <div className="d-flex">
                <div className="question-content">
                  <div className="question-header">
                    <div className="author-img">
                      <img src={require("../../Assets/Problems/forum/forum-question/question-3.png")} alt />
                    </div>
                    <div className="qtn-title">
                      <a href="#">
                        <h6>How to loop through Q and A array?</h6>
                      </a>
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="author-name">Justin Baptista</span>
                        <span className="author-pos">Admin</span>
                        <span className="timestamp">asked 10 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="question-body">
                    <div className="vote">
                      <button className="up-arrow"><i className="arrow_triangle-up" /></button>
                      <div className="count">10</div>
                      <button className="down-arrow"><i className="arrow_triangle-down " /></button>
                    </div>
                    <div className="q-text">
                      <p>Suppose we have a string in bangla language and we want to
                        convert
                        them to English so what I do ??
                        We want to make language translator app</p>
                      <ul className="q-tag-list mt-3">
                        <li><a href="#">reactjs</a></li>
                        <li><a href="#"> react-native</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="question-reach">
                  <div className="answer">
                    <div>5</div>
                    <div>answers</div>
                  </div>
                  <div className="view">
                    <div>50</div>
                    <div>views</div>
                  </div>
                </div>
              </div>
              <form action="#">
                <div className="comment-bar">
                  <img src={require("../../Assets/Problems/forum/forum-question/user-profile.png")} alt />
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Write your answer..." />
                    <input className="inp-file" type="file" id="commentFile3" />
                    <label className="cam-btn" htmlFor="commentFile3"><i className="icon_camera_alt " /></label>
                  </div>
                  <button className="doc_border_btn" type="submit">Answer</button>
                </div>
              </form>
            </div>
            <div className="single-question-widget">
              <div className="d-flex">
                <div className="question-content">
                  <div className="question-header">
                    <div className="author-img">
                      <img src={require("../../Assets/Problems/forum/forum-question/question-4.png")} alt />
                    </div>
                    <div className="qtn-title">
                      <a href="#">
                        <h6>Checks on foreign key of foreign key in SQLAlchemy</h6>
                      </a>
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="author-name">Omar Korsgaard</span>
                        <span className="author-pos">Admin</span>
                        <span className="timestamp">asked 10 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="question-body">
                    <div className="vote">
                      <button className="up-arrow"><i className="arrow_triangle-up" /></button>
                      <div className="count">10</div>
                      <button className="down-arrow"><i className="arrow_triangle-down " /></button>
                    </div>
                    <div className="q-text">
                      <p>Suppose we have a string in bangla language and we want to
                        convert
                        them to English so what I do ??
                        We want to make language translator app</p>
                      <ul className="q-tag-list mt-3">
                        <li><a href="#">reactjs</a></li>
                        <li><a href="#"> react-native</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="question-reach">
                  <div className="answer">
                    <div>5</div>
                    <div>answers</div>
                  </div>
                  <div className="view">
                    <div>50</div>
                    <div>views</div>
                  </div>
                </div>
              </div>
              <form action="#">
                <div className="comment-bar">
                  <img src={require("../../Assets/Problems/forum/forum-question/user-profile.png")} alt />
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Write your answer..." />
                    <input className="inp-file" type="file" id="commentFile4" />
                    <label className="cam-btn" htmlFor="commentFile4"><i className="icon_camera_alt " /></label>
                  </div>
                  <button className="doc_border_btn" type="submit">Answer</button>
                </div>
              </form>
            </div>
            <div className="single-question-widget">
              <div className="d-flex">
                <div className="question-content">
                  <div className="question-header">
                    <div className="author-img">
                      <img src={require("../../Assets/Problems/forum/forum-question/question-5.png")} alt />
                    </div>
                    <div className="qtn-title">
                      <a href="#">
                        <h6>How to get email errors when sending emails in Quarkus?
                        </h6>
                      </a>
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="author-name">Chance Curtis</span>
                        <span className="author-pos">Admin</span>
                        <span className="timestamp">asked 10 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="question-body">
                    <div className="vote">
                      <button className="up-arrow"><i className="arrow_triangle-up" /></button>
                      <div className="count">10</div>
                      <button className="down-arrow"><i className="arrow_triangle-down " /></button>
                    </div>
                    <div className="q-text">
                      <p>Suppose we have a string in bangla language and we want to
                        convert
                        them to English so what I do ??
                        We want to make language translator app</p>
                      <ul className="q-tag-list mt-3">
                        <li><a href="#">reactjs</a></li>
                        <li><a href="#"> react-native</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="question-reach">
                  <div className="answer">
                    <div>5</div>
                    <div>answers</div>
                  </div>
                  <div className="view">
                    <div>50</div>
                    <div>views</div>
                  </div>
                </div>
              </div>
              <form action="#">
                <div className="comment-bar">
                  <img src={require("../../Assets/Problems/forum/forum-question/user-profile.png")} alt />
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Write your answer..." />
                    <input className="inp-file" type="file" id="commentFile5" />
                    <label className="cam-btn" htmlFor="commentFile5"><i className="icon_camera_alt " /></label>
                  </div>
                  <button className="doc_border_btn" type="submit">Answer</button>
                </div>
              </form>
            </div>
            <div className="single-question-widget">
              <div className="d-flex">
                <div className="question-content">
                  <div className="question-header">
                    <div className="author-img">
                      <img src={require("../../Assets/Problems/forum/forum-question/question-6.png")} alt />
                    </div>
                    <div className="qtn-title">
                      <a href="#">
                        <h6>How to translate language in react native</h6>
                      </a>
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="author-name">Jaxson Torff</span>
                        <span className="author-pos">Admin</span>
                        <span className="timestamp">asked 10 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="question-body">
                    <div className="vote">
                      <button className="up-arrow"><i className="arrow_triangle-up" /></button>
                      <div className="count">10</div>
                      <button className="down-arrow"><i className="arrow_triangle-down " /></button>
                    </div>
                    <div className="q-text">
                      <p>Suppose we have a string in bangla language and we want to
                        convert
                        them to English so what I do ??
                        We want to make language translator app</p>
                      <ul className="q-tag-list mt-3">
                        <li><a href="#">reactjs</a></li>
                        <li><a href="#"> react-native</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="question-reach">
                  <div className="answer">
                    <div>5</div>
                    <div>answers</div>
                  </div>
                  <div className="view">
                    <div>50</div>
                    <div>views</div>
                  </div>
                </div>
              </div>
              <form action="#">
                <div className="comment-bar">
                  <img src={require("../../Assets/Problems/forum/forum-question/user-profile.png")} alt />
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Write your answer..." />
                    <input className="inp-file" type="file" id="commentFile6" />
                    <label className="cam-btn" htmlFor="commentFile6"><i className="icon_camera_alt " /></label>
                  </div>
                  <button className="doc_border_btn" type="submit">Answer</button>
                </div>
              </form>
            </div>
            <div className="single-question-widget">
              <div className="d-flex">
                <div className="question-content">
                  <div className="question-header">
                    <div className="author-img">
                      <img src={require("../../Assets/Problems/forum/forum-question/question-7.png")} alt />
                    </div>
                    <div className="qtn-title">
                      <a href="#">
                        <h6>How to code a variable that is not independent</h6>
                      </a>
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="author-name">Tatiana Septimus</span>
                        <span className="author-pos">Admin</span>
                        <span className="timestamp">asked 10 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="question-body">
                    <div className="vote">
                      <button className="up-arrow"><i className="arrow_triangle-up" /></button>
                      <div className="count">10</div>
                      <button className="down-arrow"><i className="arrow_triangle-down " /></button>
                    </div>
                    <div className="q-text">
                      <p>Suppose we have a string in bangla language and we want to
                        convert
                        them to English so what I do ??
                        We want to make language translator app</p>
                      <ul className="q-tag-list mt-3">
                        <li><a href="#">reactjs</a></li>
                        <li><a href="#"> react-native</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="question-reach">
                  <div className="answer">
                    <div>5</div>
                    <div>answers</div>
                  </div>
                  <div className="view">
                    <div>50</div>
                    <div>views</div>
                  </div>
                </div>
              </div>
              <form action="#">
                <div className="comment-bar">
                  <img src={require("../../Assets/Problems/forum/forum-question/user-profile.png")} alt />
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Write your answer..." />
                    <input className="inp-file" type="file" id="commentFile7" />
                    <label className="cam-btn" htmlFor="commentFile7"><i className="icon_camera_alt " /></label>
                  </div>
                  <button className="doc_border_btn" type="submit">Answer</button>
                </div>
              </form>
            </div>
            <div className="single-question-widget">
              <div className="d-flex">
                <div className="question-content">
                  <div className="question-header">
                    <div className="author-img">
                      <img src={require("../../Assets/Problems/forum/forum-question/question-8.png")} alt />
                    </div>
                    <div className="qtn-title">
                      <a href="#">
                        <h6>How can I group multiple columns and sum the last one?
                        </h6>
                      </a>
                      <div className="d-flex align-items-center flex-wrap">
                        <span className="author-name">Charlie</span>
                        <span className="author-pos">Admin</span>
                        <span className="timestamp">asked 10 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="question-body">
                    <div className="vote">
                      <button className="up-arrow"><i className="arrow_triangle-up" /></button>
                      <div className="count">10</div>
                      <button className="down-arrow"><i className="arrow_triangle-down " /></button>
                    </div>
                    <div className="q-text">
                      <p>Suppose we have a string in bangla language and we want to
                        convert
                        them to English so what I do ??
                        We want to make language translator app</p>
                      <ul className="q-tag-list mt-3">
                        <li><a href="#">reactjs</a></li>
                        <li><a href="#"> react-native</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="question-reach">
                  <div className="answer">
                    <div>5</div>
                    <div>answers</div>
                  </div>
                  <div className="view">
                    <div>50</div>
                    <div>views</div>
                  </div>
                </div>
              </div>
              <form action="#">
                <div className="comment-bar">
                  <img src={require("../../Assets/Problems/forum/forum-question/user-profile.png")} alt />
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Write your answer..." />
                    <input className="inp-file" type="file" id="commentFile8" />
                    <label className="cam-btn" htmlFor="commentFile8"><i className="icon_camera_alt " /></label>
                  </div>
                  <button className="doc_border_btn" type="submit">Answer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="widget-pagination-box text-center mt-40">
          <div className="pagination_inner mt-0">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link" href="#"><i className="arrow_carrot-left" /> Previous</a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">21</a></li>
                <li className="page-item"><a className="page-link" href="#">22</a></li>
                <li className="page-item"><a className="page-link" href="#">Next <i className="arrow_carrot-right" /></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="col-xl-3">
        <div className="forum-right-sidebar-widget question-sidebar">
          <a href="add-question.html" className="action_btn custom-sidebar-btn w-100">Ask Question</a>
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
                  <span className="ans-count">78</span><a href="forum-single.html">Loop inside
                    React JSX</a>
                </li>
                <li>
                  <span className="ans-count">76</span><a href="forum-single.html">Show or hide
                    element in
                    React</a>
                </li>
                <li>
                  <span className="ans-count">69</span><a href="forum-single.html">Hide keyboard
                    in
                    react-native</a>
                </li>
                <li>
                  <span className="ans-count">56</span><a href="forum-single.html">React Native
                    version
                    mismatch</a>
                </li>
                <li>
                  <span className="ans-count">37</span><a href="forum-single.html">Hide keyboard
                    in
                    react-native</a>
                </li>
                <li>
                  <span className="ans-count">20</span><a href="forum-single.html">Show or hide
                    element in
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

        {/* <!--================End All Question Area =================--> */}
    </>
  )
}

export default Problems