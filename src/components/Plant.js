import React from "react";
import { useParams } from "react-router-dom";

export default function Plant() {
  const { id } = useParams();
  return <div>{id}</div>;
}
