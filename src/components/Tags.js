import React from "react"
import {Link} from "react-router-dom"
import injectSheet from 'react-jss'
const styles = {
  ulCol: {
    color: "#f34d4d"
  }
}
const Tags=({classes})=>{
  
  return (
    <div className="single_blog_sidebar wow fadeInUp">
      <h2>Popular Tags</h2>
      <ul className="poplr_tagnav">
        <li><Link to="/c/business">Business</Link></li>
        <li><Link to="/c/entertainment">Entertainment</Link></li>
        <li><Link to="/c/general">General</Link></li>
        <li><Link to="/c/health">Health</Link></li>
        <li><Link to="/c/science">Science</Link></li>
        <li><Link to="/c/sports">Sports</Link></li>
        <li><Link to="/c/technology">Technology</Link></li>        
      </ul>
    </div>
  )
}
export default injectSheet(styles)(Tags)
// export default Tags;
