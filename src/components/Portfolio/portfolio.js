import React from "react";
import "./portfolio.scss";


const data = [
  {
    img: "https://www.linkpicture.com/q/project1_5.jpg",
    url:"https://reactprojec-1.netlify.app/"
  },
  {
    img:"https://www.linkpicture.com/q/project2_2.jpg",
    url:"https://taskstyled.netlify.app/"
  },
  

]

export default function Portfolio() {


  return (
      <div className="container component_name globalWrapper">
        <h1>Portfolio</h1>
      <div className="borderBottom"></div>
        <div className="box">
            {data.map((v, i) => 
                <div key={i} className="projects">
                  <img src={v.img} alt="" />
                  <div className="demo">
                     <p>More</p>
                     <button>
                       <a href={v.url} target="_blank">a</a>
                     </button>
                  </div>
                </div>

            )}
           
        </div>
      </div>
  )
}
