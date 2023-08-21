import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../../../static/comps/body/projects/projects.css";
import EcommImg from '../../../pictures/e-commerce.png'
import PlannerImg from '../../../pictures/planner.png'
import TravelAdvisor from '../../../pictures/travelAdvisor.png'

const Project = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl: EcommImg,
      desc: "Great Shopping app",
      name: "E-Commerce App",
    },
    {
      id: 2,
      imgUrl:PlannerImg,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "Planner App",
    },
    {
      id: 3,
      imgUrl:TravelAdvisor,
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "Travel Advisor",
    },
    {
        id: 4,
        imgUrl: EcommImg,
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "EXPLORE NATURE",
      },
      {
        id: 5,
        imgUrl:
        PlannerImg,
        desc: "Some beautiful roads cannot be discovered without getting loss.",
        name: "Planner App",
      },

  ];

  return (
    <div className="all_projects">
        <h1 className="text-center text-light">My Projects</h1>
        <div className="project">
        <div className="project_cont">
        <div className="loadbar"></div>
        <div id="slide" ref={slideRef}>
            {data.map((item) => (
            <div
                key={item.id}
                className="item img-fluid mx-1"
                style={{ backgroundImage: `url(${item.imgUrl})`, backgroundRepeat: `no-repeat`, backgroundSize: `1700px 900px` }}
            >
                <div className="content">
                <div className="name">{item.name}</div>
                <h4 className="des">{item.desc}</h4>
                <button>See more</button>
                </div>
            </div>
            ))}
        </div>
        <div className="buttons">
            <button id="prev" onClick={handleClickPrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button id="next" onClick={handleClickNext}>
            <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Project;
