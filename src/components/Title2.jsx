import { gsap } from "gsap";
import { useEffect, useContext } from "react";
import { AppState } from "../main";

export default function Title2() {
  const { chosen } = useContext(AppState);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3", duration: 1 } });
    tl.fromTo(
      "#slider",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        backgroundColor: chosen.value,
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 100%)",
      }
    ).fromTo(
      "#welcome",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" }
    );
  }, []);

  return (
    <div id="title2" className="absolute">
     'fpocguilweircgu,wporg9j'
    </div>
  );
}
