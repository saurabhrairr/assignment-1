import React from "react";
import "./Home.css";
import star1 from "../assest/coloredstar.svg";
import star2 from "../assest/graystar.svg";
import img1 from "../assest/Image 1.png";
import img2 from "../assest/num.png";
import img3 from "../assest/Image 3.png";
import img4 from "../assest/Image 4.png";
import img5 from "../assest/Image 5.png";
import img6 from "../assest/Image 6.png";
import img7 from "../assest/Image 7.png";
import heart from "../assest/path.png";

const Homepage = () => {
  return (
    <div className="center-body">
      <div className="side1">
        <p className="text">Home/mobiles</p>
        <img src={img1} className="phone1-img" alt="bybest" />
        <img src={img2} className="phone2-img" alt="bybest" />
        <img src={img3} className="phone3-img" alt="bybest" />
        <img src={img4} className="phone4-img" alt="bybest" />
        <img src={img5} className="phone5-img" alt="bybest" />
        <img src={img6} className="phone6-img" alt="bybest" />
      </div>
      <div className="middle">
        <img src={img7} className="mainphone" alt="bybest" />
        <p className="bottom-para">
          Image courtesy of flipkart, www.flipkart.com
        </p>
        <div className="buttons">
          <div className="button1">Add Cart</div>
          <div className="button2">Buy Now</div>
        </div>
      </div>

      <div className="right">
        <div className="right-part">
          <div className="parafirst">
            <p className="text-top">ProductCode</p>
            <p className="text-top1">0DE349879</p>
          </div>
          <img src={heart} className="loveimg" alt="bybest" />
          <div className="para2">
            <h3 className="toph2tag">
              Honor 8 Pro (Midnight Black, 128GB)
              <br /> (6GB RAM)
            </h3>
          </div>
          <div className="starassest">
            <img src={star1} alt="bybest" />
            <img src={star1} alt="bybest" />
            <img src={star1} alt="bybest" />
            <img src={star1} alt="bybest" />
            <img src={star2} alt="bybest" />
            <p>(9303)</p>
          </div>
          <div className="paradiv">
            <div className="pricedollar">
              <h3 className="h3tag">$99.99</h3>
              <h4 className="h4tag">$149.99</h4>
              <h4 className="h4tag">30% off</h4>
            </div>
            <p className="stocktext">In Stock</p>
          </div>
          <div className="third-para">
            <p>Color</p>
            <p>Sapphire</p>
            <p>Blue</p>
          </div>
          <div className="cirlce-colored">
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span className="circle3"></span>
          </div>
          <div className="bottompara">
            <p className="b-para">Storage 32GB</p>
            <p className="b-para">RAM 4GB</p>
          </div>
          <div className="buttons-last-right">
            <div className="btn">64GB</div>
            <div className="btn">128GB</div>
            <div className="btn">2GB</div>
            <div className="btn">4GB</div>
          </div>
          <h3 className="last-para">+Product Details</h3>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
