import { useState } from "react";
import './app-debug.apk';


export default function Home() {

  const [Title , setTitle] = useState("Home")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
      setTitle("Notice")
    } else {
      setTitle("Home")
    }
  });
  

  return (
    <>
      <div className="PageTitle">
        <span className="Title">{Title}</span>

  
      </div>
      
      My android app is out!!<a href="./app-debug.apk">Download here</a>
    </>
  );
}
