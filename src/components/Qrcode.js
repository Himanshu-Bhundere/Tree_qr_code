import React from "react";
import { QRCode } from "react-qrcode-logo";

let data = require("../tree-data.json");
export default function Qrcode() {
  return (
    <>
      <div>
        <div>
          {data.map(function (object, i) {
            const value = "http://localhost:3000/plant/" + `${object.id}`;
            return (
              <>
                <h1>{object.name}</h1>
                <QRCode
                  value={value}
                  logoImage={require("../nss-logo.png")}
                  logoWidth={40}
                  id={object.id}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
