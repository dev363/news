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
                <li><Link to="/c/business">Business</Link></li>
                <li><Link to="/c/entertainment">Entertainment</Link></li>
                <li><Link to="/c/general">General</Link></li>
                <li><Link to="/c/health">Health</Link></li>
                <li><Link to="/c/science">Science</Link></li>
                <li><Link to="/c/sports">Sports</Link></li>
                <li><Link to="/c/technology">Technology</Link></li>                
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
