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
    <div className="">
      <h1>Home</h1>
    </div>
  );
}
