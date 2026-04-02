import React, { useState } from 'react';

function About() {
  const [myStyle,setMyStyle]=useState({
    backgroundColor:'white',
    color:'black'
  });

  const[button,setButton]=useState("Enable Dark Mode");
  let toggleStyle=()=>{
    if(myStyle.color=="white"){
      setMyStyle({backgroundColor:'white',
       color:'black',
      border:'1px solid black'})
       setButton("Enable Dark Mode ")
    }else{
      setMyStyle({
          backgroundColor:'black',
      color:'white',
        border:'1px solid white'
      })
      setButton("Enable Light Mode ")
    }
  }

  return (
    <>

      <div className="container my-5" style={myStyle}>
      <div className="text-center mb-4" >
        <h1 className="fw-bold" >About TextUtils</h1>
        <p >
          A simple yet powerful text utility tool to make your work faster and easier.
        </p>
      </div>

      <div className="accordion accordion-flush" id="accordionFlushExample" >

        {/* About Project */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="flush-headingOne">
            <button
            style={myStyle}
              className="accordion-button collapsed fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
            >
              📘 About This Project
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
            
          >
            <div className="accordion-body"style={myStyle}  >
              TextUtils is a fast and user-friendly web application designed to help users
              manipulate and analyze text efficiently. Whether you're writing content,
              cleaning data, or formatting text, this tool simplifies your workflow.
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
            style={myStyle}
              className="accordion-button collapsed fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
            >
              ⚡ Features
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Convert text to UPPERCASE and lowercase</li>
                <li>Remove extra spaces instantly</li>
                <li>Word and character counter</li>
                <li>Preview your text in real-time</li>
                <li>Clean and responsive UI</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="flush-headingThree">
            <button
            style={myStyle}
              className="accordion-button collapsed fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
            >
              🛠️ Technology Used
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul>
                <li>HTML5</li>
                <li>CSS3 & Bootstrap</li>
                <li>JavaScript (ES6)</li>
                <li>React.js</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Developer */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="flush-headingFour">
            <button
            style={myStyle}
              className="accordion-button collapsed fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
            >
              👨‍💻 Developer
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              This project is developed by <strong>Md Wasim Alam</strong>, a passionate
              web developer with skills in React, Java, and SQL.  
              Focused on building clean, efficient, and user-friendly applications.
            </div>
          </div>
        </div>

      </div>
    <div className=" container mt-3">
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{button}</button>
    </div>
      <div className="text-center mt-4 " >
        <small>© 2026 TextUtils | All Rights Reserved</small>
      </div>
    </div>
  
  </>

  );
}

export default About;