import { useState } from "react";
import "./app-debug.apk";
import logo from "./Image/2.jpg";
import { Slide} from 'react-awesome-reveal'

export default function Home() {

  const [Title, setTitle] = useState("Home");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
      setTitle("About the Author");
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
      <div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>

        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
        

      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
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
        </Slide>
      </div>
    </div>
  );
}
