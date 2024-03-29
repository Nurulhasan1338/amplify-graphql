import React from "react";
import { Container, Row} from "react-bootstrap";
import { ProjectCom } from "./projectCom.js";
import img1 from "../../assets/img/textLab.png";
import img2 from "../../assets/img/news.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/color-sharp2.png";
import img6 from "../../assets/img/codeBattle.jpg";
import img5 from "../../assets/img/Mynote.png";
import img7 from "../../assets/img/emptycup_logo.jpg";

export default function Project() {
  const project = [
    {
      title: "TEXT UTILS",
      proImg: img1,
      li: "https://nurulhasan1338.github.io/text-lab/#/text-lab",
      des: "A simple text editor",
    },
    {
      title: "NEWS APP",
      proImg: img2,
      li: "https://nurulhasan1338.github.io/News_app/",
      des: "Built in react  Using News API.",
    },
    {
      title: "ECOMMERCE WEBSITE",
      proImg: img3,
      li: "https://github.com/Nurulhasan1338/fullStackprojects",
      des: "HTML, CSS, PHP, MySQL",
    },
    {
      title: "ONLINE JUDGE",
      proImg: img6,
      li: "https://github.com/Nurulhasan1338/onlineJudge",
      des: "MERN Application : Docker,ReactJs,Material UI, NodeJS,ExpressJs",
    },
    {
      title: "MY NOTE ",
      proImg: img5,
      li: "https://github.com/Nurulhasan1338/myNote",
      des: "MERN Application online note making app",
    },
    {
      title: "emptyCup clone",
      proImg: img7,
      li: "https://main.d215t4eadyylm4.amplifyapp.com/",
      des: "MERN Application , Docker, Render for deployment",
    },
  ];

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  return (
    <section className="project" id="project">
      {window.addEventListener("scroll", reveal)}
      <Container className="reveal">
            <h2 className="mb-5">Project</h2>
            <br />
        <Row>
              {project.map((projcts, index) => {
                return (
                  <ProjectCom
                  key={index}
                  {...projcts }
                  />  
                  )
                })}

        </Row>
      </Container>
      <img className="background-image-right top-0" src={img4} alt="" />
    </section>
  );
}
