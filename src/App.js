import react from "react";
import Navbar from "./Navbar.js";
import About from "./About.js"
import Info from "./Info.js"
import Review from "./Review.js";
import Contact from "./Contact.js";
function App(){
    return(
        <div>
        <Navbar/>
        <Info/>
        <About/>
        <Review/>
        <Contact/>
        </div>
    )
}
export default App;