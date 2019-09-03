import React from "react"
import injectSheet from 'react-jss'
const styles = {
  ulCol: {
    color: "#f34d4d"
  }
}
const Tags=({classes})=>{
  // console.log(classes)
  // // const classes= props.classes
  // // console.log(classes)
  return (
    <div className="single_blog_sidebar wow fadeInUp">
      <h2>Popular Tags</h2>
      <ul className="poplr_tagnav">
        <li><a href="c/business" >Business</a></li>
        <li><a href="c/entertainment">Entertainment</a></li>
        <li><a href="c/general">General</a></li>
        <li><a href="c/health">Health</a></li>
        <li><a href="c/science">Science</a></li>
        <li><a href="c/sports">Sports</a></li>
        <li><a href="c/technology">Technology</a></li>
      </ul>
    </div>
  )
}
export default injectSheet(styles)(Tags)
// export default Tags;
