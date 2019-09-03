import React from 'react';
import axios from 'axios';
import TopHeadlines from './TopHeadlines';
import WhatsHot from './WhatsHot';
import TheFeaturedStuff from './TheFeaturedStuff';
import Tags from './Tags';


function Home(){

  return (
    <section id="contentbody">
      <div className="container">
        <div className="row">
          <div className=" col-sm-12 col-md-6 col-lg-6">

            <div className="row">

              <h2>Top Headlines</h2>
              <TopHeadlines  />

            </div>
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2">
            <div className="row">
              <div className="middlebar_content">

                <h2 className="yellow_bg">What's Hot</h2>
                <WhatsHot category={"entertainment"} number={10}/>

              </div>
              <div className="middlebar_content">

                <h2 className="yellow_bg">Sports</h2>
                <WhatsHot category={"sports"} number={10}/>

              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="row">
              <div className="rightbar_content">

                <TheFeaturedStuff q={"india"} number={5}/>
                <Tags data={"Hello"}/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Home;
