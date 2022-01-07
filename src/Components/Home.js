import { useState } from "react";
// import logo from "./Image/2.jpg";
// import AdUnit from "./AdUnit.js";
import BlogsUI from "./BlogUI";
import BlogData from "./Blogs_data";

export default function Home() {
  const [Title, setTitle] = useState("Home");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
      setTitle("Latest Blog Articles");
    } else {
      setTitle("Home");
    }
  });

  return (
    <div className="start">
      <div className={`bg-1`}></div>

      <div className="PageTitle">
        <span className="Title">{Title}</span>
      </div>
      {BlogData.map((e) => {
        return (
          <BlogsUI
            Title={e.Title}
            desc={e.desc}
            key={e.id}
            blogsNo={e.id}
            Image={e.image}
          />
        );
      })}

      {/* <div className="abt"> */}

      {/* <Slide left delay={1000}>
          <img src={logo} className="Author" alt="logo" width="100px" />
        </Slide>

        <Slide direction="right">
          <div className="txt">
            Glucose : Glucose is an aldohexose and is also known as dextrose.
            Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11
            2 6 12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O  
              (b) From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch
            Glu cose (C H O ) nH O nC H O      Structure of Glucose
            Open-Chain Structure :  'D' before the name of glucose represents
            the configuration whereas '(+)' represents dextrorotatory nature of
            the molecule.  'D' before the name of glucose represents the
            configuration whereas '(+)' represents dextrorotatory nature of the
            molecule.
          </div>
        </Slide>
      </div>
        <AdUnit></AdUnit>
        <div className="abt">
        <Slide left delay={1000}>
          <img src={logo} className="Author" alt="logo" width="100px" />
        </Slide>

        <Slide direction="right">
          <div className="txt">
            Glucose : Glucose is an aldohexose and is also known as dextrose.
            Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11
            2 6 12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O  
              (b) From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch
            Glu cose (C H O ) nH O nC H O      Structure of Glucose
            Open-Chain Structure :  'D' before the name of glucose represents
            the configuration whereas '(+)' represents dextrorotatory nature of
            the molecule.  'D' before the name of glucose represents the
            configuration whereas '(+)' represents dextrorotatory nature of the
            molecule.
          </div>
        </Slide> */}
      {/* </div> */}
    </div>
  );
}
