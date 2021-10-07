import React from "react";
import SectionCard from "./Cards";
import pizzaBox from "../Assets/pizza_box.svg";
import pizzaPhone1 from "../Assets/domi-img1.svg";
import pizzaPhone2 from "../Assets/domi-img2.svg";
import pizzaPhone3 from "../Assets/on-demand-app-development-company.svg";
import nasaImg1 from "../Assets/nasa-fitness-tracking-mobile-app.svg";
import nasaImg2 from "../Assets/measure-total-body-weight-through-fitness-app.svg";
import blockChain1 from "../Assets/veme-app-ui-design.svg";
import blockChain2 from "../Assets/veme-blockchain-app-developed.svg";
import nexgtv1 from "../Assets/nexgtv-mobile-app-ui-design.svg";
import nexgtv2 from "../Assets/nexgtv-entertainment-mobile-app-development.svg";
import worldAppOp from "../Assets/mobile-app-of-the-year-by-entrepreneur.svg";
import karavan1 from "../Assets/developers-for-social-media-app.svg";
import karavan2 from "../Assets/karavan-social-networking-app-screen.svg";
import karavan3 from "../Assets/karavan-social-networking-app-screen-2.svg";
import karavan4 from "../Assets/karavan_2.svg";
import karavan5 from "../Assets/social-networking-app-case-study.svg";
import erpBg from "../Assets/erp-bg.svg";
import erp from "../Assets/erp-app-development-service.svg";
import milto1 from "../Assets/melltoo-img1.svg";
import milto2 from "../Assets/melltoo-img2.svg";
//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Owl Carousel Settings
const options = {
  autoplay: false,
  smartSpeed: 1000,
  items: 1,
};
export default function Pages() {
  return (
    <div>
      <OwlCarousel className="slider-items owl-carousel" {...options}>
        <div className="item">
          <section
            className="Panel"
            style={{ backgroundColor: "#A8A8AA", height: window.innerHeight }}
          >
            <div className="Section2">
              <img
                src={nexgtv1}
                alt=""
                style={{
                  position: "relative",
                  top: "7rem",
                  left: "16rem",
                  width: "100%",
                  height: "100%",
                }}
              />
              <img
                src={nexgtv2}
                alt=""
                style={{
                  position: "relative",
                  bottom: "32rem",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <img
              src={worldAppOp}
              alt=""
              style={{
                position: "absolute",
                left: "2rem",
                bottom: "26rem",
                width: "64%",
                zIndex: 2,
              }}
            />
            <SectionCard
              bgcolor="#6211A7"
              secHead="ABC 123"
              secPara={`This is sample text for ABC 123. This is sample \ntext for ABC 123.`}
              secEnd="View Case Study"
            />
          </section>
        </div>
        <div className="item">
          <section
            className="Panel"
            style={{ backgroundColor: "#1B0361", height: window.innerHeight }}
          >
            <div className="Section2">
              <img
                src={blockChain1}
                alt=""
                style={{
                  position: "absolute",
                  top: "0",
                  right: "4rem",
                  width: "40%",
                  height: "40%",
                }}
              />
              <img
                src={blockChain2}
                alt=""
                style={{
                  position: "relative",
                  top: "10rem",
                  width: "75%",
                  height: "75%",
                }}
              />
            </div>
            <SectionCard
              bgcolor="#4C27CD"
              secHead="ABC 1"
              secPara={`This is the sample text for ABC 1`}
              secEnd="Case study - Comming soon"
            />
          </section>
        </div>
        <div className="item">
          <section
            className="Panel"
            style={{ backgroundColor: "#141647", height: window.innerHeight }}
          >
            <div className="Section2">
              <img
                src={nasaImg1}
                alt=""
                style={{
                  position: "relative",
                  top: "14rem",
                  left: "-2rem",
                }}
              />
              <img
                src={nasaImg2}
                alt=""
                style={{
                  position: "relative",
                  bottom: "46rem ",
                  left: "18rem",
                  width: "75%",
                }}
              />
            </div>
            <SectionCard
              bgcolor="#0E1139"
              secHead="ABC 2"
              secPara={`This is the sample text for ABC 2`}
              secEnd="Case study - Comming soon"
            />
          </section>
        </div>
        <div className="item">
          <section
            className="Panel"
            style={{ backgroundColor: "#0d131a", height: window.innerHeight }}
          >
            <div className="Section2">
              <img
                src={pizzaBox}
                alt=""
                style={{
                  position: "relative",
                  top: "-4rem",
                }}
              />
              <img
                src={pizzaPhone1}
                alt=""
                style={{
                  position: "relative",
                  top: "6rem",
                  left: "2rem",
                  width: "75%",
                }}
              />
              <img
                src={pizzaPhone2}
                alt=""
                style={{
                  position: "relative",
                  bottom: "40rem",
                  left: "18rem",
                  width: "75%",
                }}
              />
              <img
                src={pizzaPhone3}
                alt=""
                style={{
                  position: "relative",
                  bottom: "40rem",
                  left: "18rem",
                  width: "75%",
                }}
              />
            </div>
            <SectionCard
              bgcolor="#15253a"
              secHead="ABC 3"
              secPara={`This is the sample text for ABC 3`}
              secEnd="View Case study "
            />
          </section>
        </div>
        <div className="item">
          <section
            className="Panel"
            style={{ backgroundColor: "#2CCAD4", height: window.innerHeight }}
          >
            <div className="Section2">
              <img
                src={karavan4}
                alt=""
                style={{
                  position: "relative",
                  top: "20rem",
                  width: "75%",
                }}
              />
              <img
                src={karavan3}
                alt=""
                style={{
                  position: "relative",
                  left: "15rem",
                  width: "75%",
                }}
              />
              <img
                src={karavan2}
                alt=""
                style={{
                  position: "relative",
                  bottom: "70rem",
                  width: "75%",
                }}
              />
              <img
                src={karavan5}
                alt=""
                style={{
                  position: "relative",
                  bottom: "90rem",
                  left: "15rem",
                  width: "75%",
                }}
              />
              <img
                src={karavan1}
                alt=""
                style={{
                  position: "relative",
                  bottom: "106rem",
                  left: "30rem",
                  width: "75%",
                }}
              />
            </div>
            <SectionCard
              bgcolor="#114BA0"
              secHead="ABC 4"
              secPara={`This is the sample text for ABC 4`}
              secEnd="View Case study "
            />
          </section>
        </div>
        <div className="item">
          <section className="Panel" style={{ height: window.innerHeight }}>
            <div className="Section2">
              <img
                src={erpBg}
                alt=""
                style={{ position: "relative", height: "40rem", width: "200%" }}
              />
              <img
                src={erp}
                alt=""
                style={{
                  position: "absolute",
                  top: "0rem",
                }}
              />
            </div>
            <SectionCard
              bgcolor="#012B91"
              secHead="ABC 4"
              secPara={`This is the sample text for ABC 4`}
              secEnd="View Case study "
            />
          </section>
        </div>
        <div className="item">
          <section
            className="Panel"
            style={{ backgroundColor: "#00B668", height: window.innerHeight }}
          >
            <div className="Section2">
              <img
                src={milto2}
                alt=""
                style={{
                  position: "relative",
                  top: "7rem",
                  width: "130%",
                  zIndex: 1,
                }}
              />
              <img
                src={milto1}
                alt=""
                style={{
                  position: "relative",
                  bottom: "32rem",
                  left: "18rem",
                  width: "96%",
                  zIndex: 0,
                }}
              />
            </div>
            <img
              src={worldAppOp}
              alt=""
              style={{
                position: "absolute",
                left: "2rem",
                bottom: "25rem",
                width: "75%",
                zIndex: 2,
              }}
            />
            <SectionCard
              bgcolor="#00824B"
              secHead="XYZ 123"
              secPara={`This is the sample text for XYZ 123`}
              secEnd="Case study - Comming soon"
            />
          </section>
        </div>
      </OwlCarousel>
    </div>
  );
}

