import React from 'react';
import axios from 'axios';
import TopHeadlines from './TopHeadlines';
import WhatsHot from './WhatsHot';
import TheFeaturedStuff from './TheFeaturedStuff';
import Tags from './Tags';


function CategoryNews(){

  return (
    <section id="contentbody">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-lg-10">
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4"><img src="http://localhost:3000/logo.png"/></div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <h4>HHHHHHHHHHHHHH</h4>
                Nunc at lacus ac nisl fermentum pulvinar. Vivamus bibendum elit nisl, vulputate ultricies diam lacinia non. Curabitur ac orci facilisis, faucibus nulla nec, fermentum erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Nam consectetur ex bibendum diam congue bibendum. Suspendisse sollicitudin purus ante, at molestie mi pulvinar sit amet. Pellentesque sapien massa, gravida non purus.
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2 read-more">
              <a className="poplr_tagnav" href="/technology">Read more</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default CategoryNews;
