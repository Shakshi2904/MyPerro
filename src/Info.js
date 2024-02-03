import react from "react";
import Doginfo from "./Doginfo.js";
import "./Doginfo.css"
import con from "./content.js"
function Info(){
    function leftScroll() {
        const left = document.querySelector(".scrollbar");
        left.scrollBy(-600, 0);
      }
      function rightScroll() {
        const right = document.querySelector(".scrollbar");
        right.scrollBy(+600,0);
    }
    return(
        <div className="book">
        <div className="cover">
      <button className="left" onClick={leftScroll}>&lt;</button>
      <div className="scrollbar">
        
        {con.map(x=>(
            <Doginfo info1={x.info1} info2={x.info2} img={x.img}/>
        ))}
        </div>
     <button className="right" onClick={rightScroll}>&gt;</button>
      </div>
      <div className="img3"><img src="img5.png"></img></div>
        </div>
    )
}
export default Info;