import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopHeadlines = (props)=>{
  let page =props.headlines.page
  let articles= props.headlines.data;
  const recordsNo=[0,3,6,9,12,15,18,21]
  const date = new Date();
  if(articles){
    let headl= articles.articles
    //return(
      const ff= headl.map((hd,index)=>{
      if(index < recordsNo[page]){
        return (
          <div className="single_stuff wow fadeInDown" key={index}>
            <div className="single_stuff_img"> <a href={hd.url} target="_blank"><img src={hd.urlToImage} alt=""/></a> </div>
            <div className="single_stuff_article">
              <div className="single_sarticle_inner"> <a className="stuff_category" href={`https://${hd.source.name}`} target="_blank">{hd.source.name}</a>
                <div className="stuff_article_inner"> <span className="stuff_date">{date.toLocaleString('default', { month: 'short' })} <strong>{date.getDate()}</strong></span>
                  <h2><a href={hd.url} target="_blank">{hd.title}</a></h2>
                  <p>{hd.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    })
   // )
  }

  return(
    <h1>Loading...</h1>
  )
}

function Home(){
  const [headlines, setHeadlines] = useState({});
  console.log(headlines)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=ad23f24f6762478995a4f62590458e25',
      );
      setHeadlines({page:1,data:result.data});
    };
    fetchData();
  }, []);

  const showNextHeadlines=(i)=>{
    setHeadlines({page:i,data:headlines.data});

  }
  const Pagination =()=>{
    const items = []
    for (let i=1; i< 7;i++) {
      items.push(<li key={i}><a href={i} onClick={(e)=>{ e.preventDefault(); showNextHeadlines(i)}}>{i}</a></li>)
    }
    return (
      <div className="stuffpost_paginatinonarea wow slideInLeft">
        <ul className="newstuff_pagnav">{items}</ul>
      </div>
    );

  }



  return (
    <section id="contentbody">
      <div className="container">
        <div className="row">
          <div className=" col-sm-12 col-md-6 col-lg-6">
            <div className="row">
              <div className="leftbar_content">
                <h2>Top Headlines</h2>
                <TopHeadlines headlines={headlines} />
                <Pagination/>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2">
            <div className="row">
              <div className="middlebar_content">
                <h2 className="yellow_bg">What's Hot</h2>
                <div className="middlebar_content_inner wow fadeInUp">
                  <ul className="middlebar_nav">
                    <li> <a className="mbar_thubnail" href="#"><img src="images/hot_img1.jpg" alt=""/></a> <a className="mbar_title" href="#">Sed luctus semper odio aliquam rhoncus</a> </li>
                    <li> <a className="mbar_thubnail" href="#"><img src="images/hot_img2.jpg" alt=""/></a> <a className="mbar_title" href="#">Sed luctus semper odio aliquam rhoncus</a> </li>
                    <li> <a className="mbar_thubnail" href="#"><img src="images/hot_img1.jpg" alt=""/></a> <a className="mbar_title" href="#">Sed luctus semper odio aliquam rhoncus</a> </li>
                    <li> <a className="mbar_thubnail" href="#"><img src="images/hot_img1.jpg" alt=""/></a> <a className="mbar_title" href="#">Sed luctus semper odio aliquam rhoncus</a> </li>
                    <li> <a className="mbar_thubnail" href="#"><img src="images/hot_img1.jpg" alt=""/></a> <a className="mbar_title" href="#">Sed luctus semper odio aliquam rhoncus</a> </li>
                    <li> <a className="mbar_thubnail" href="#"><img src="images/hot_img1.jpg" alt=""/></a> <a className="mbar_title" href="#">Sed luctus semper odio aliquam rhoncus</a> </li>
                    <li> <a className="mbar_thubnail" href="#"><img src="images/hot_img1.jpg" alt=""/></a> <a className="mbar_title" href="#">Sed luctus semper odio aliquam rhoncus</a> </li>
                    <li> <a className="mbar_thubnail" href="#"><img src="images/hot_img1.jpg" alt=""/></a> <a className="mbar_title" href="#">Sed luctus semper odio aliquam rhoncus</a> </li>
                  </ul>
                </div>
                <div className="popular_categori  wow fadeInUp">
                  <h2 className="limeblue_bg">Most Popular Categories</h2>
                  <ul className="poplr_catgnva">
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Life &amp; Style</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Slider</a></li>
                    <li><a href="#">Sports</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="row">
              <div className="rightbar_content">
                <div className="single_blog_sidebar wow fadeInUp">
                  <h2>The Featured Stuff</h2>
                  <ul className="featured_nav">
                    <li> <a className="featured_img" href="#"><img src="images/featured_img1.jpg" alt=""/></a>
                      <div className="featured_title"> <a className="" href="#">Sed luctus semper odio aliquam rhoncus</a> </div>
                    </li>
                    <li> <a className="featured_img" href="#"><img src="images/featured_img1.jpg" alt=""/></a>
                      <div className="featured_title"> <a className="" href="#">Sed luctus semper odio aliquam rhoncus</a> </div>
                    </li>
                    <li> <a className="featured_img" href="#"><img src="images/featured_img1.jpg" alt=""/></a>
                      <div className="featured_title"> <a className="" href="#">Sed luctus semper odio aliquam rhoncus</a> </div>
                    </li>
                  </ul>
                </div>
                <div className="single_blog_sidebar wow fadeInUp">
                  <h2>Popular Posts</h2>
                  <ul className="middlebar_nav wow">
                    <li> <a href="#" className="mbar_thubnail"><img alt="" src="images/hot_img1.jpg"/></a> <a href="#" className="mbar_title">Sed luctus semper odio aliquam rhoncus</a> </li>
                    <li> <a href="#" className="mbar_thubnail"><img alt="" src="images/hot_img2.jpg"/></a> <a href="#" className="mbar_title">Sed luctus semper odio aliquam rhoncus</a> </li>
                    <li> <a href="#" className="mbar_thubnail"><img alt="" src="images/hot_img1.jpg"/></a> <a href="#" className="mbar_title">Sed luctus semper odio aliquam rhoncus</a> </li>
                    <li> <a href="#" className="mbar_thubnail"><img alt="" src="images/hot_img1.jpg"/></a> <a href="#" className="mbar_title">Sed luctus semper odio aliquam rhoncus</a> </li>
                  </ul>
                </div>
                <div className="single_blog_sidebar wow fadeInUp">
                  <h2>Popular Tags</h2>
                  <ul className="poplr_tagnav">
                    <li><a href="#">Arts</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Nature</a></li>
                    <li><a href="#">Comedy</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Tourism</a></li>
                    <li><a href="#">Videos</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Home;
