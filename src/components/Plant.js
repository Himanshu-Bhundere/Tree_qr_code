import React from "react";
import { useParams } from "react-router-dom";
import { useLottie } from "lottie-react";
import treeAnimation from "../animations/72702-tree.json";
import dataAnimation from "../animations/102382-data.json";
import mapAnimation from "../animations/47956-area-map.json";

let data = require("../tree-data.json");

export default function Plant() {
  const { id } = useParams();
  const filterData = data.find((obj) => {
    return obj.id == id;
  });

  const options = {
    animationData: treeAnimation,
    loop: true,
  };

  const options1 = {
    animationData: dataAnimation,
    loop: true,
  };

  const { View } = useLottie(options);
  const { View2 } = useLottie(options1);

  const renderList = filterData.location.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div style={{ height: 200, width: 200 }}>{View}</div>
        <div>
          <h1>Id.No - {filterData.id}</h1>
          <h2>Commom Name - {filterData.name}</h2>
          <h2>Botanical Name - {filterData["botanical-name"]}</h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div style={{ height: 200, width: 200 }}>{View2}</div>
      </div>
      <ul>{renderList}</ul>
    </>
  );
}
