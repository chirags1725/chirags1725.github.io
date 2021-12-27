import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [Change, setChange] = useState("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
      setChange("navbar change");
    } else {
      setChange("navbar");
    }
  });

  return (
    <>
      <div className={Change}>
        <div className="quote">
          "What you get by achieving your goals is not as important as what you
          become by achieving your goals"
        </div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact_me">Contact Me</Link>
          </li>
          <li>
            <Link to="/ads">Ads</Link>
          </li>
        </ul> */}

        <div className="links">
          <ul>
            <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact_me">Contact Me</Link>
          </li>
          <li>
            <Link to="/ads">Ads</Link>
          </li>
          </ul>
        </div>

        

      </div>
    </>
  );
}
