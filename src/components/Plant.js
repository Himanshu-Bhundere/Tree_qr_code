import React from "react";
import { useParams } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import "./styles/Plants.css";

let data = require("../tree-data.json");

export default function Plant() {
  const { id } = useParams();
  const filterData = data.find((obj) => {
    return obj.id == id;
  });

  const href = `https://www.google.com/search?q=${filterData["botanical-name"]}`;

  const renderList = filterData.location.map((item, index) => (
    <>
      <li className="font" key={index}>
        {item}
      </li>
      <br />
    </>
  ));

  return (
    <>
      <body>
        <div>
          <div className="firstAni" style={{ height: 200, width: 200 }}>
            <Player
              autoplay
              loop
              src="https://assets7.lottiefiles.com/packages/lf20_edpg3c3s.json"
              style={{ height: "300px", width: "300px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
          <div style={{ marginTop: 70 }}>
            <h1 className="heading">Id.No - {filterData.id}</h1>
            <h2 className="heading">Commom Name - {filterData.name}</h2>
            <h2 className="heading">
              Botanical Name - {filterData["botanical-name"]}
            </h2>
          </div>
        </div>
        <hr className="hr" />
        <div>
          <div className="firstAni" style={{ height: 200, width: 200 }}>
            <Player
              autoplay
              loop
              src="https://assets7.lottiefiles.com/packages/lf20_tzv8osvb.json"
              style={{ height: "300px", width: "300px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>

          <div className="info">
            <h1 className="heading">Information</h1>
            <br />
            {filterData["info"]}
            <br />
            <h3 className="font">
              More Info on. -{" "}
              <a target="blank" href={href}>
                Visit here..
              </a>
            </h3>
          </div>
        </div>
        <hr className="hr" />
        <div>
          <div className="firstAni" style={{ height: 200, width: 200 }}>
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_svy4ivvy.json"
              style={{ height: "300px", width: "300px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
          <div>
            <h1 className="heading loc">Other Locations(On Campus)</h1>
            <ul style={{ listStyleType: "none" }}>
              <div>
                {renderList}
                <br />
              </div>
            </ul>
          </div>
        </div>
      </body>
    </>
  );
}
