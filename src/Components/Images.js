import React, { useEffect, useState, useCallback, useRef } from "react";
import SectionCard from "./Cards";
import pizzaBox from "../Assets/pizza_box.svg";
import pizzaPhone1 from "../Assets/domi-img1.svg";
import pizzaPhone2 from "../Assets/domi-img2.svg";
import pizzaBread1 from "../Assets/dominos-bread.svg";
import pizzaBread2 from "../Assets/dominos-bread1.svg";
import nasaImg1 from "../Assets/nasa-fitness-tracking-mobile-app.svg";
import nasaImg2 from "../Assets/measure-total-body-weight-through-fitness-app.svg";
import blockChain1 from "../Assets/veme-app-ui-design.svg";
import blockChain2 from "../Assets/veme-blockchain-app-developed.svg";
import nexgtv1 from "../Assets/nexgtv-mobile-app-ui-design.svg";
import nexgtv2 from "../Assets/nexgtv-entertainment-mobile-app-development.svg";
import worldApp from "../Assets/world-communication-awards-for-best-digital-experience.svg";
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
import { gsap, Power3 } from "gsap";
export default function Scrolling() {
  let sec0 = useRef(null);
  let sec1 = useRef(null);
  let sec2 = useRef(null);
  let sec3 = useRef(null);
  let sec4 = useRef(null);
  let sec5 = useRef(null);
  let sec6 = useRef(null);

  const [dot, setDot] = useState(0);
  const handleScroll = useCallback(() => {
    setDot(Math.ceil((window.scrollY + 7) / 100) - 1);
  }, []);
  useEffect(() => {
    switch (dot) {
      case 0:
        gsap.from(sec0.children, {
          duration: 1.5,
          y: 400,
          ease: Power3.easeOut,
        });
        break;
      case 1:
        gsap.from(sec1.children[0], {
          duration: 1.5,
          y: 200,
          ease: Power3.easeOut,
        });
        gsap.from(sec1.children[1], {
          duration: 1.5,
          y: -200,
          ease: Power3.easeOut,
        });
        break;
      case 2:
        gsap.from(sec2.children[0], {
          duration: 1.5,
          y: 200,
          ease: Power3.easeOut,
        });
        gsap.from(sec2.children[1], {
          duration: 1.5,
          y: -200,
          ease: Power3.easeOut,
        });
        break;

      case 3:
        const upper3 = [sec3.children[0], sec3.children[1], sec3.children[2]];
        const lower3 = [sec3.children[3], sec3.children[4]];
        gsap.from(upper3, {
          duration: 1.5,
          y: -200,
          ease: Power3.easeOut,
        });
        gsap.from(lower3, {
          duration: 1.5,
          y: 200,
          ease: Power3.easeOut,
        });
        break;
      case 4:
        const upper4 = [sec4.children[0], sec4.children[1]];
        const lower4 = [sec4.children[3], sec4.children[4]];
        gsap.from(upper4, {
          duration: 1.5,
          y: -200,
          ease: Power3.easeOut,
        });
        gsap.from(sec4.children[2], {
          duration: 1.5,
          x: 200,
          ease: Power3.easeOut,
        });
        gsap.from(lower4, {
          duration: 1.5,
          y: 200,
          ease: Power3.easeOut,
        });
        break;
      case 5:
        gsap.from(sec5.children[1], {
          duration: 1.5,
          y: 400,
          ease: Power3.easeOut,
        });
        break;
      case 6:
        gsap.from(sec6.children, {
          duration: 1.5,
          y: 400,
          ease: Power3.easeOut,
        });
        break;
      default:
        console.log(dot);
        break;
    }
  }, [dot]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  function currentPage() {
    switch (dot) {
      case 0:
        return (
          <section
            className="Panel"
            style={{ backgroundColor: "#A8A8AA", height: window.innerHeight }}
          >
            <img
              src={worldApp}
              alt=""
              style={{ position: "absolute", left: "4rem", bottom: "25rem" }}
            />
            <SectionCard
              SvgTxt1=""
              SvgTxt2="25M+ Downloads"
              SvgTxt3="on appstore & google playstore"
              bgcolor="#6211A7"
              secHead="ABC 123"
              secPara={`We are the best web development company \n\n in the world`}
              secEnd="View Case Study"
            />
            <div className="Section2" ref={(el) => (sec0 = el)}>
              <img
                src={nexgtv2}
                alt=""
                style={{
                  position: "relative",
                  top: "10rem",
                  width: "45%",
                  left: "5rem",
                }}
              />
              <img
                src={nexgtv1}
                alt=""
                style={{
                  position: "relative",
                  top: "10rem",
                  width: "45%",
                }}
              />
            </div>
          </section>
        );

      case 1:
        return (
          <section
            className="Panel"
            style={{ backgroundColor: "#1B0361", height: window.innerHeight }}
          >
            <SectionCard
              SvgTxt1="The Next Big"
              SvgTxt2="Blockchain"
              SvgTxt3="Revolution"
              bgcolor="#4C27CD"
              secHead="ABC 234"
              secPara={`We are the best web development company \n\n in the world`}
              secEnd="Comming soon"
            />
            <div className="Section2" ref={(el) => (sec1 = el)}>
              <img
                src={blockChain2}
                alt=""
                style={{
                  position: "absolute",
                  bottom: "-4.2rem",
                  right: "40rem",
                  width: "25rem",
                  height: "40rem",
                }}
              />
              <img
                src={blockChain1}
                alt=""
                style={{
                  position: "absolute",
                  top: "-3.6rem",
                  right: "10rem",
                  width: "25rem",
                  height: "40rem",
                }}
              />
            </div>
          </section>
        );
      case 2:
        return (
          <section
            className="Panel"
            style={{ backgroundColor: "#141647", height: window.innerHeight }}
          >
            <SectionCard
              SvgTxt1="Powered by advance"
              SvgTxt2="NASA"
              SvgTxt3="Algorithms"
              bgcolor="#0E1139"
              secHead="ABC 345"
              secPara={`We are the best \n\n web development company \n\n in the world`}
              secEnd="Comming Soon"
            />
            <div className="Section2" ref={(el) => (sec2 = el)}>
              <img
                src={nasaImg1}
                alt=""
                style={{
                  position: "relative",
                  top: "15rem",
                  left: "12rem",
                  width: "40%",
                }}
              />
              <img
                src={nasaImg2}
                alt=""
                style={{
                  position: "relative",
                  bottom: "11rem ",
                  left: "22rem",
                  width: "30%",
                }}
              />
            </div>
          </section>
        );

      case 3:
        return (
          <section
            className="Panel"
            style={{ backgroundColor: "#0d131a", height: window.innerHeight }}
          >
            <SectionCard
              SvgTxt1="Redefining"
              SvgTxt2="UX Stratergy"
              SvgTxt3="and UI design"
              bgcolor="#15253a"
              secHead="ABC 456"
              secPara={`We are the best \n\n web development company \n\n in the world`}
              secEnd="View Case Study"
            />
            <div className="Section2" ref={(el) => (sec3 = el)}>
              <img
                src={pizzaBox}
                alt=""
                style={{
                  position: "relative",
                  bottom: "18rem",
                }}
              />
              <img
                src={pizzaPhone2}
                alt=""
                style={{
                  position: "relative",
                  top: "8rem",
                  width: "30%",
                }}
              />
              <img
                src={pizzaBread1}
                alt=""
                style={{
                  position: "relative",
                  bottom: "24rem",
                  right: "4rem",
                  width: "15rem",
                  height: "25rem",
                }}
              />
              <img
                src={pizzaPhone1}
                alt=""
                style={{
                  position: "relative",
                  bottom: "8rem",
                  left: "4rem",
                  width: "32%",
                }}
              />
              <img
                src={pizzaBread2}
                alt=""
                style={{
                  position: "relative",
                  top: "8rem",
                  left: "28rem",
                  width: "30rem",
                  height: "25rem",
                }}
              />
            </div>
          </section>
        );

      case 4:
        return (
          <section
            className="Panel"
            style={{ backgroundColor: "#2CCAD4", height: window.innerHeight }}
          >
            <SectionCard
              SvgTxt1="Text Headline"
              SvgTxt2="Text Headline"
              SvgTxt3="Footer headline"
              bgcolor="#114BA0"
              secHead="ABC 567"
              secPara={`We are the best AR\n\nDevelopment company \n\n in the world`}
              secEnd="View Case Study"
            />
            <div className="Section2" ref={(el) => (sec4 = el)}>
              <img
                src={karavan2}
                alt=""
                style={{
                  position: "relative",
                  bottom: "12rem",
                  left: "11rem",
                  width: "28%",
                }}
              />
              <img
                src={karavan5}
                alt=""
                style={{
                  position: "relative",
                  bottom: "4rem",
                  left: "12rem",
                  width: "28%",
                }}
              />
              <img
                src={karavan1}
                alt=""
                style={{
                  position: "relative",
                  top: "16rem",
                  left: "12rem",
                  width: "28%",
                }}
              />
              <img
                src={karavan4}
                alt=""
                style={{
                  position: "relative",
                  top: "3rem",
                  left: "10rem",
                  width: "28%",
                }}
              />
              <img
                src={karavan3}
                alt=""
                style={{
                  position: "relative",
                  top: "12rem",
                  left: "10rem",
                  width: "26%",
                }}
              />
            </div>
          </section>
        );

      case 5:
        return (
          <section className="Panel" style={{ height: window.innerHeight }}>
            <SectionCard
              SvgTxt1="Developing ERP Solution For"
              SvgTxt2="Text Headline"
              SvgTxt3="in furniture idustry"
              bgcolor="#012B91"
              secHead="ABC 678"
              secPara={`Best since 2017 \n\nWe offer wide range of \n\nWeb development and app development.`}
              secEnd="View Case Study"
            />
            <div className="Section2" ref={(el) => (sec5 = el)}>
              <img
                src={erpBg}
                alt=""
                style={{ position: "relative", height: "80rem", width: "110%" }}
              />
              <img
                src={erp}
                alt=""
                style={{
                  position: "absolute",
                  width: "55%",
                  top: "0",
                }}
              />
            </div>
          </section>
        );

      case 6:
        return (
          <section
            className="Panel"
            style={{ backgroundColor: "#00B668", height: window.innerHeight }}
          >
            <img
              src={worldAppOp}
              alt=""
              style={{ position: "absolute", left: "4rem", bottom: "28rem" }}
            />
            <SectionCard
              SvgTxt1="Biggest Classifieds"
              SvgTxt2="East Asia"
              SvgTxt3="Countries"
              bgcolor="#00824B"
              secHead="ABC 456"
              secPara={`We are the best \n\n web development company \n\n in the world`}
              secEnd="View Case Study"
            />
            <div className="Section2" ref={(el) => (sec6 = el)}>
              <img
                src={milto2}
                alt=""
                style={{
                  position: "relative",
                  top: "26rem",
                  left: "18rem",
                  width: "50%",
                  zIndex: 1,
                }}
              />
              <img
                src={milto1}
                alt=""
                style={{
                  position: "relative",
                  top: "26rem",
                  left: "7rem",
                  width: "34%",
                  zIndex: 0,
                }}
              />
            </div>
          </section>
        );

      default:
        console.log("I'm in default");
        return;
    }
  }
  return <div>{currentPage()}</div>;
}
