import { useState, useRef, useEffect } from "react";
import "./app-debug.apk";
import logo from "./Image/2.jpg";
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const style = {
    position: "relative",
    borderRadius: "20px",
  };

  const [Title, setTitle] = useState("Home");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
      setTitle("About the Author");
    } else {
      setTitle("Home");
    }
  });

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);


  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.timeline(
  //     {
  //       scrollTrigger: {
  //         trigger: element.querySelector(".abt"),
  //         start: "top center",
  //         end: "bottom bottom",
  //         scrub: true,
  //         markers:true,
  //         // pin:true
  //       },
  //     }
  //   ).from('.abt',{x:window.innerWidth * 1});
  // }, []);
      
  useEffect(() => {
    const element = ref.current;
    // gsap.fromTo(
    //   element.querySelector(".Author"),
    //   {
    //     x:window.innerWidth * -1
    //   },
    //   {
    //     x:0,
    //     duration:20,
    //     ease:{Power4},
    //     scrollTrigger: {
    //       trigger: element.querySelector(".abt"),
    //       start: "top center",
    //       end: "bottom bottom",
    //       scrub: true,
    //       markers:true,
    //       pin:true
    //     }
    //   }
    // );

    gsap.to(".Author", {
      yPercent: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".abt",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      }, 
    });
    
    gsap.to(".txt", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".abt",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true
      }, 
    });
  }, []);
  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.fromTo(
  //     element.querySelector("#gsap-logo"),
  //     {
  //       opacity: 0,
  //       scale: 0.2,
  //       y: -20
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scale: 1,
  //       duration: 1,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: element.querySelector(".first"),
  //         start: "top center",
  //         end: "bottom top",
  //         scrub: true
  //       }
  //     }
  //   );
  // }, []);
  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.from(element.querySelector(".line"), {
  //     scale: 0,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: element.querySelector(".third"),
  //       scrub: true,
  //       start: "top bottom",
  //       end: "top top"
  //     }
  //   });
  // }, []);


  return (
    <div className="start" ref={ref}>
      <div className={`bg-1`}></div>

      <div className="PageTitle">
        <span className="Title">{Title}</span>
      </div>
      <div className="abt">
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
          style={style}
        />
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
      </div>
    </div>
  );
}
