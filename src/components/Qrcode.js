import React from "react";
import { QRCode } from "react-qrcode-logo";

let data = require("../tree-data.json");
export default function Qrcode() {
  return (
    <>
      <div>
        <div>
          {data.map(function (object, i) {
            const value = `https://tree-tag-nss-crce.netlify.app/plant/${object.id}`;
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h1>{object.name}</h1>
                  <QRCode
                    value={value}
                    logoImage={require("../nss-logo.png")}
                    logoWidth={40}
                    id={object.id}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
