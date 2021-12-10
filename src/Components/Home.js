import { useState } from "react";
import "./app-debug.apk";
import { Link } from 'react-router-dom';

export default function Home() {
  const [Title, setTitle] = useState("Home");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
      setTitle("Notice");
    } else {
      setTitle("Home");
    }
  });

  return (
    <>
      <div className={`bg-1`}></div>

      <div className="PageTitle">
        <span className="Title">{Title}</span>
      </div>
    </>




  );
}
