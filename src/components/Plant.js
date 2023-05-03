import React from "react";
import { useParams } from "react-router-dom";
import { useLottie } from "lottie-react";

let data = require("../tree-data.json");

export default function Plant() {
  const { id } = useParams();
  const filterData = data.find((obj) => {
    return obj.id == id;
  });

  return (
    <>
      <div>
        {id} - {filterData.name}
      </div>
    </>
  );
}
