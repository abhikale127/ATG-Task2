import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";

export default function Svg() {
  let Opaque_Ring = useRef(null);
  let dot1 = useRef(null);
  let dot2 = useRef(null);
  let dot3 = useRef(null);
  let dot4 = useRef(null);
  let dot5 = useRef(null);
  let dot6 = useRef(null);
  let PathImg = useRef(null);


  function deselect() {
    dot1.children[0].children[0].style.fill = "rgb(255, 255, 255)";
    dot1.children[0].children[0].style.opacity = 0.4;
    dot1.children[1].children[0].style.opacity = 0;
    dot2.children[0].children[0].style.fill = "rgb(255, 255, 255)";
    dot2.children[0].children[0].style.opacity = 0.4;
    dot2.children[1].children[0].style.opacity = 0;
    dot3.children[0].children[0].style.fill = "rgb(255, 255, 255)";
    dot3.children[0].children[0].style.opacity = 0.4;
    dot3.children[1].children[0].style.opacity = 0;
    dot4.children[0].children[0].style.fill = "rgb(255, 255, 255)";
    dot4.children[0].children[0].style.opacity = 0.4;
    dot4.children[1].children[0].style.opacity = 0;
    dot5.children[0].children[0].style.fill = "rgb(255, 255, 255)";
    dot5.children[0].children[0].style.opacity = 0.4;
    dot5.children[1].children[0].style.opacity = 0;
    dot6.children[0].children[0].style.fill = "rgb(255, 255, 255)";
    dot6.children[0].children[0].style.opacity = 0.4;
    dot6.children[1].children[0].style.opacity = 0;
  }
  function dotSelect(pathLength) {
    const dot = Math.floor((window.scrollY + 7) / 100);
    if (dot === 0) {
      gsap.to(Opaque_Ring, {
        duration: 0.75,
        strokeDashoffset: pathLength,
        ease: Power3.easeOut,
      });
    } else {
      gsap.to(Opaque_Ring, {
        duration: 0.75,
        strokeDashoffset: pathLength * (1 - (1 / 6) * dot),
        ease: Power3.easeOut,
      });
    }
    deselect();
    switch (dot) {
      case 1:
        dot1.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot1.children[0].children[0].style.opacity = 1;
        dot1.children[1].children[0].style.opacity = 1;
        PathImg.style.backgroundColor = "#4C27CD";
        break;
      case 2:
        dot1.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot1.children[0].children[0].style.opacity = 1;
        dot1.children[1].children[0].style.opacity = 1;
        dot2.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot2.children[0].children[0].style.opacity = 1;
        dot2.children[1].children[0].style.opacity = 1;
        PathImg.style.backgroundColor = "#0E1139";
        break;

      case 3:
        dot1.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot1.children[0].children[0].style.opacity = 1;
        dot1.children[1].children[0].style.opacity = 1;
        dot2.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot2.children[0].children[0].style.opacity = 1;
        dot2.children[1].children[0].style.opacity = 1;
        dot3.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot3.children[0].children[0].style.opacity = 1;
        dot3.children[1].children[0].style.opacity = 1;
        PathImg.style.backgroundColor = "#15253a";
        break;
      case 4:
        dot1.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot1.children[0].children[0].style.opacity = 1;
        dot1.children[1].children[0].style.opacity = 1;
        dot2.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot2.children[0].children[0].style.opacity = 1;
        dot2.children[1].children[0].style.opacity = 1;
        dot3.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot3.children[0].children[0].style.opacity = 1;
        dot3.children[1].children[0].style.opacity = 1;
        dot4.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot4.children[0].children[0].style.opacity = 1;
        dot4.children[1].children[0].style.opacity = 1;
        PathImg.style.backgroundColor = "#114BA0";

        break;
      case 5:
        dot1.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot1.children[0].children[0].style.opacity = 1;
        dot1.children[1].children[0].style.opacity = 1;
        dot2.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot2.children[0].children[0].style.opacity = 1;
        dot2.children[1].children[0].style.opacity = 1;
        dot3.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot3.children[0].children[0].style.opacity = 1;
        dot3.children[1].children[0].style.opacity = 1;
        dot4.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot4.children[0].children[0].style.opacity = 1;
        dot4.children[1].children[0].style.opacity = 1;
        dot5.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot5.children[0].children[0].style.opacity = 1;
        dot5.children[1].children[0].style.opacity = 1;
        PathImg.style.backgroundColor = "#012B91";
        break;
      case 6:
        dot1.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot1.children[0].children[0].style.opacity = 1;
        dot1.children[1].children[0].style.opacity = 1;
        dot2.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot2.children[0].children[0].style.opacity = 1;
        dot2.children[1].children[0].style.opacity = 1;
        dot3.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot3.children[0].children[0].style.opacity = 1;
        dot3.children[1].children[0].style.opacity = 1;
        dot4.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot4.children[0].children[0].style.opacity = 1;
        dot4.children[1].children[0].style.opacity = 1;
        dot5.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot5.children[0].children[0].style.opacity = 1;
        dot5.children[1].children[0].style.opacity = 1;
        dot6.children[0].children[0].style.fill = "rgb(0, 146, 255)";
        dot6.children[0].children[0].style.opacity = 1;
        dot6.children[1].children[0].style.opacity = 1;
        PathImg.style.backgroundColor = "#00824B";
        break;
      default:
        PathImg.style.backgroundColor = "#6211A7";
        break;
    }
  }

  useEffect(() => {
    var pathLength = Opaque_Ring.getTotalLength();
    Opaque_Ring.style.strokeDasharray = pathLength + " " + pathLength;
    Opaque_Ring.style.strokeDashoffset = pathLength;
    Opaque_Ring.getBoundingClientRect();
    window.addEventListener("scroll", () => {
      dotSelect(pathLength);
      //Opaque_Ring.style.strokeDashoffset = pathLength * (1 - scrollPercentage);
    });
  });

  return (
    <div
      className="PathImg"
      ref={(el) => (PathImg = el)}
      style={{ backgroundColor: "#6211A7", zIndex: 1 }}
    >
      <div id="trigger1" className="spacer s0"></div>

      <svg
        version="1.1"
        id="transring"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 414 414"
        style={{ enableBackground: "new 0 0 414 414" }}
      >
        <path
          id="Transparent_Ring"
          className="transrg"
          style={{
            opacity: 0.4,
            fill: "none",
            stroke: "#FFFFFF",
            strokeWidth: 2,
            strokeMiterlimit: 10,
            enableBackground: "new",
          }}
          d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
        c-47.8,0-91-19.4-122.3-50.7"
        ></path>
        <path
          id="Opaque_Ring"
          ref={(el) => (Opaque_Ring = el)}
          className="transrgwht"
          strokeDasharray="0,1000"
          style={{
            fill: "none",
            stroke: "rgb(255, 255, 255)",
            strokeWidth: 2,
            strokeMiterlimit: 10,
            strokeDasharray: "10, 1000",
          }}
          d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
        c-47.8,0-91-19.4-122.3-50.7"
        ></path>
        <g id="Dots" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill"
              style={{ fill: "rgb(0, 146, 255)", opacity: 1 }}
              d="m88.12896,74.93335c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro"
              style={{
                opacity: 1,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="m88.12896,74.93335c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29"
            ></path>
          </g>
        </g>
        <g id="Dots1" className="dots-nav" ref={(el) => (dot1 = el)}>
          <g>
            <path
              className="dotsst dotsfill1"
              style={{ fill: "rgb(255, 255, 255)", opacity: 0.4 }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z m0,-29"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro1"
              style={{
                opacity: 0,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S210.1,29,206.8,29z m0,-29"
            ></path>
          </g>
        </g>
        <g id="Dots2" className="dots-nav" ref={(el) => (dot2 = el)}>
          <g>
            <path
              className="dotsst dotsfill2"
              style={{ fill: "rgb(255, 255, 255)", opacity: 0.4 }}
              d="m329.13333,78.33333c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro2"
              style={{
                opacity: 0,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="m329.13333,78.33333c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29"
            ></path>
          </g>
        </g>
        <g id="Dots3" className="dots-nav" ref={(el) => (dot3 = el)}>
          <g>
            <path
              className="dotsst dotsfill3"
              style={{ fill: "rgb(255, 255, 255)", opacity: 0.4 }}
              d="m379.69826,202.58006c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro3"
              style={{
                opacity: 0,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="m379.69826,202.58006c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29"
            ></path>
          </g>
        </g>
        <g id="Dots4" className="dots-nav" ref={(el) => (dot4 = el)}>
          <g>
            <path
              className="dotsst dotsfill4"
              style={{ fill: "rgb(255, 255, 255)", opacity: 0.4 }}
              d="m327.49365,324.94006c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro4"
              style={{
                opacity: 0,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="m327.49365,324.94006c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29"
            ></path>
          </g>
        </g>
        <g id="Dots5" className="dots-nav" ref={(el) => (dot5 = el)}>
          <g>
            <path
              className="dotsst dotsfill5"
              style={{ fill: "rgb(255, 255, 255)", opacity: 0.4 }}
              d="m207,373.77117c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro5"
              style={{
                opacity: 0,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="m207,373.77117c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29"
            ></path>
          </g>
        </g>
        <g id="Dots6" className="dots-nav" ref={(el) => (dot6 = el)}>
          <g>
            <path
              className="dotsst dotsfill6"
              style={{ fill: "rgb(255, 255, 255)", opacity: 0.4 }}
              d="m88.76261,327.06687c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29"
            ></path>
          </g>
          <g>
            <path
              className="dotsstro6"
              style={{
                opacity: 0,
                fill: "none",
                stroke: "rgb(255, 255, 255)",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="m88.76261,327.06687c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
}
