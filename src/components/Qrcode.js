import React from "react";
import { QRCode } from "react-qrcode-logo";

let data = require("../tree-data.json");
export default function Qrcode() {
  return (
    <>
      <div>
        <div>
          {data.map(function (object, i) {
            return (
              <QRCode
                value="https://tree-tag-nssxcrce.netlify.app"
                logoImage={require("../nss-logo.png")}
                logoWidth={80}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
