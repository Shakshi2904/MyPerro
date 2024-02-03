import react from "react";
import "./Review.css";
function Review(){
    function leftScroll() {
        const left = document.querySelector(".scrollbar");
        left.scrollBy(-600, 0);
      }
      function rightScroll() {
        const right = document.querySelector(".scrollbar");
        right.scrollBy(+600,0);
    }
    return(
        <div>
            <h1 className="h1">Review</h1>
            <div className="scrollbarreview">
            <div>
            <img src="image 4.png" className="img4"></img>
                <div className="star">
                    <div>
                    OVERALL RATING
                    <br></br>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    </div>
                    <div >
                    DOG WALKING
                    <br></br>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    </div>
                    <div>
                    DOG BOARDING
                    <br></br>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    </div>
                </div>
            </div>
            <div className="cscr">
            <div className="cover">
      <button className="left" onClick={leftScroll}>&lt;</button>
            <div className="sr">
                <div className="scrollreview">
                <div className="sc">
                    <img src="img6.png"></img>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <br>
                    </br>
                    <p>sjvhbjm</p>
                </div>
                </div>
                <div className="scrollreview">
                <div className="sc">
                    <img src="img6.png"></img>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <br>
                    </br>
                    <p>sjvhbjm</p>
                </div>
                </div>
                <div className="scrollreview">
                <div className="sc">
                    <img src="img6.png"></img>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <br>
                    </br>
                    <p>sjvhbjm</p>
                </div>
                </div>
                <div className="scrollreview">
                <div className="sc">
                    <img src="img6.png"></img>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <br>
                    </br>
                    <p>sjvhbjm</p>
                </div>
                </div>
                <div className="scrollreview">
                <div className="sc">
                    <img src="img6.png"></img>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <br>
                    </br>
                    <p>sjvhbjm</p>
                </div>
                </div>

                <div className="scrollreview">
                <div className="sc">
                    <img src="img6.png"></img>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <br>
                    </br>
                    <p>sjvhbjm</p>
                </div>
                </div>
                <div className="scrollreview">
                <div className="sc">
                    <img src="img6.png"></img>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <br>
                    </br>
                    <p>sjvhbjm</p>
                </div>
                </div>
                <div className="scrollreview">
                <div className="sc">
                    <img src="img6.png"></img>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <br>
                    </br>
                    <p>sjvhbjm</p>
                </div>
                </div>
                <div className="scrollreview">
                <div className="sc">
                    <img src="img6.png"></img>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <br>
                    </br>
                    <p>sjvhbjm</p>
                </div>
                </div>
                <div className="scrollreview">
                <div className="sc">
                    <img src="img6.png"></img>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <br>
                    </br>
                    <p>sjvhbjm</p>
                </div>
                </div>
                <div className="scrollreview">
                <div className="sc">
                    <img src="img6.png"></img>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <br>
                    </br>
                    <p>sjvhbjm</p>
                </div>
                </div>
                <button className="right" onClick={rightScroll}>&gt;</button>
      </div>
            </div>
            <div className="circle"></div>
            </div>
            </div>
        </div>
    )
}
export default Review;