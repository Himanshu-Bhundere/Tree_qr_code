import React from "react";
import { useParams } from "react-router-dom";

let data = require("../tree-data.json");

export default function Plant() {
  const { id } = useParams();
  const filterData = data.find((obj) => {
    return obj.id == id;
  });

  function callData() {
    console.log(filterData);
  }

  return (
    <>
      <div onClick={callData}>
        {id} - {filterData.name}
      </div>
    </>
  );
}
