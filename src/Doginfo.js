import react from "react";
import "./Doginfo.css"
function Doginfo(props){
    return(
        <div className="div">
            <div className="info">
                <p className="info1">{props.info1}</p>
                <p>{props.info2}</p>
                <button>Book Now</button>
            </div>
            <div className="img2"><img src={props.img} height={50}/></div>
        </div>
    )
}
export default Doginfo;