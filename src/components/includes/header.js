import React from 'react';
export default function Header(){
  return(
    <header id="header">
      <div className="container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
              <a className="navbar-brand" href="/"><img src="../logo.png" className="logo"/></a> </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav custom_nav">
                <li className=""><a href="index.html">Home</a></li>
                <li className="dropdown"> <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Jobs</a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="dropdown"> <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" href="#">Jobs Home</a> </li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Article</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <form id="searchForm">
          <input type="text" placeholder="Search..."/>
          <input type="submit" value=""/>
        </form>
      </div>
    </header>
)
}
