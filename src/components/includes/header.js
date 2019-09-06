import React from 'react';
import {Link} from 'react-router-dom';
export default function Header(){
  return(
    <header id="header">
      <div className="container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
              <Link className="navbar-brand" to="/"><img src="../logo.png" className="logo"/></Link> </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav custom_nav">
                <li className=""><a href="/">Home</a></li>
                <li><a href="/c/business">Business</a></li>
                <li><a href="/c/entertainment">Entertainment</a></li>
                <li><a href="/c/general">General</a></li>
                <li><a href="/c/health">Health</a></li>
                <li><a href="/c/science">Science</a></li>
                <li><a href="/c/sports">Sports</a></li>
                <li><a href="/c/technology">Technology</a></li>                
              </ul>
            </div>
          </div>
        </nav>
        {/*<form id="searchForm">
          <input type="text" placeholder="Search..."/>
          <input type="submit" value=""/>
        </form--->*/}
      </div>
    </header>
)
}
