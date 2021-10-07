import React, { useRef, useEffect, useState } from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { gsap, Power3 } from "gsap";
export default function SectionCard(props) {
  const matches = useMediaQuery("(max-width:768px)");
  const { SvgTxt1, SvgTxt2, SvgTxt3, bgcolor, secHead, secPara, secEnd } =
    props;
  let svgTxt = useRef(null);
  let secTxt = useRef(null);
  const [dynamicCheckValue] = useState(Math.random());
  const EffectCheck = ({ value }) => {
    useEffect(() => {
      const flip = [...svgTxt.children, secTxt.children[0], secTxt.children[1]];
      gsap.from(flip, { rotationX: 80, transformOrigin: "center" });
      gsap.from(secTxt.children[3].children[0], {
        duration: 1.5,
        opacity: 0,
        scale: 0,
        ease: Power3.easeOut,
      });
    }, [value]);
    return null;
  };

  return (
    <div
      className="Section1"
      style={{
        backgroundColor: bgcolor,
      }}
    >
      {!matches && <EffectCheck value={dynamicCheckValue} />}
      <div className="Svg-sec-txt" ref={(el) => (svgTxt = el)}>
        <h4 style={{ textAlign: "start" }}>{SvgTxt1}</h4>
        <h1 style={{ fontWeight: 700 }}>{SvgTxt2}</h1>
        <h4 style={{ textAlign: "end" }}>{SvgTxt3}</h4>
      </div>
      <div ref={(el) => (secTxt = el)}>
        <h1 style={{ fontWeight: "bold" }}>{secHead}</h1>
        <h5 style={{ whiteSpace: "pre-line" }}>{secPara}</h5>
        <br />
        <h4>
          <span>{secEnd}</span>
          <ArrowRightAltIcon
            style={{ verticalAlign: "middle", fontSize: "3.5rem" }}
          />
          {matches ? null : (
            <span style={{ paddingLeft: "30rem", letterSpacing: "0.6rem" }}>
              SKIP
            </span>
          )}
        </h4>
      </div>
    </div>
  );
}
