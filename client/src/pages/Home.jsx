import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  const gsapRef = useRef();
  useGSAP(() => {
    gsap.to(gsapRef.current, {
      rotate: 720,
      duration: 1,
      delay: 1,
    });
  });
  return (
    <div className="main23">
      <div className="container">
        <div className="circle"></div>
        <div ref={gsapRef} className="box"></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}
