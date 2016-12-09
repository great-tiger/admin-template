import React from 'react'
export default class Header extends React.Component {
    render() {
        return (
              <header className="main-header">
                  <a href="../../index2.html" className="logo">AdminLTE</a>
                  <nav className="navbar navbar-static-top" role="navigation">
                      <div className="navbar-custom-menu">
                          <ul className="nav navbar-nav">
                              <li className="dropdown messages-menu">
                                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                      <i className="fa fa-envelope-o"></i>
                                      <span className="label label-success">4</span>
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li className="header">You have 4 messages</li>
                                      <li>
                                          <ul className="menu">
                                              <li>
                                                  <a href="#">
                                                      <div className="pull-left">
                                                      </div>
                                                      <h4>
                                Sender Name
                                <small><i className="fa fa-clock-o"></i> 5 mins</small>
                              </h4>
                                                      <p>Message Excerpt</p>
                                                  </a>
                                              </li>
                                              ...
                                          </ul>
                                      </li>
                                      <li className="footer"><a href="#">See All Messages</a></li>
                                  </ul>
                              </li>
                              <li className="dropdown notifications-menu">
                                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                      <i className="fa fa-bell-o"></i>
                                      <span className="label label-warning">10</span>
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li className="header">You have 10 notifications</li>
                                      <li>
                                          <ul className="menu">
                                              <li>
                                                  <a href="#">
                                                      <i className="ion ion-ios-people info"></i> Notification title
                                                  </a>
                                              </li>
                                              ...
                                          </ul>
                                      </li>
                                      <li className="footer"><a href="#">View all</a></li>
                                  </ul>
                              </li>
                              <li className="dropdown tasks-menu">
                                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                      <i className="fa fa-flag-o"></i>
                                      <span className="label label-danger">9</span>
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li className="header">You have 9 tasks</li>
                                      <li>
                                          <ul className="menu">
                                              <li>
                                                  <a href="#">
                                                      <h3>
                                Design some buttons
                                <small className="pull-right">20%</small>
                              </h3>
                                                      <div className="progress xs">
                                                          <div className="progress-bar progress-bar-aqua" style={{width:20+'%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                              <span className="sr-only">20% Complete</span>
                                                          </div>
                                                      </div>
                                                  </a>
                                              </li>
                                              ...
                                          </ul>
                                      </li>
                                      <li className="footer">
                                          <a href="#">View all tasks</a>
                                      </li>
                                  </ul>
                              </li>
                              <li className="dropdown user user-menu">
                                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                      <span className="hidden-xs">Alexander Pierce</span>
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li className="user-header">
                                          <p>
                                              Alexander Pierce - Web Developer
                                              <small>Member since Nov. 2012</small>
                                          </p>
                                      </li>
                                      <li className="user-body">
                                          <div className="col-xs-4 text-center">
                                              <a href="#">Followers</a>
                                          </div>
                                          <div className="col-xs-4 text-center">
                                              <a href="#">Sales</a>
                                          </div>
                                          <div className="col-xs-4 text-center">
                                              <a href="#">Friends</a>
                                          </div>
                                      </li>
                                      <li className="user-footer">
                                          <div className="pull-left">
                                              <a href="#" className="btn btn-default btn-flat">Profile</a>
                                          </div>
                                          <div className="pull-right">
                                              <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                          </div>
                                      </li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </header>
        );
    }
}
