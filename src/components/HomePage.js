import React from "react";
import "./styles/Home.css";


export default function HomePage() {

  return (
    <div>
      <div className="about_us">
        <h3>About Us</h3>
       <b>What is this Website about??</b> <br />
      <p>So this website is the project undertaken by NSS-CRCE under the guidance of Principal of CRCE Dr. Surendra Singh Rathod. Out motive is to educate the students about various Trees which are there in the college campus. For this we are using QR Codes through which the students can scan it and get the basic information of that particular Tree. The information contains the Botanical Name, About it, Location in Campus etc.</p>
      </div>
      <div className="location">
        <div id="stairs-1">
          <h4
            onClick={() => {
              if (document.getElementById("stairs").style.display === "none") {
                document.getElementById("stairs").style.display = "block";
                document.querySelector(".stairs").innerHTML = "arrow_drop_up";
              } else {
                document.getElementById("stairs").style.display = "none";
                document.querySelector(".stairs").innerHTML = "arrow_drop_down";
              }
            }}
          >
            Stairs
            <span className="material-symbols-outlined stairs">
              arrow_drop_down
            </span>
          </h4>
        </div>
        <div id="canteen-1">
          <h4
            onClick={() => {
              if (document.getElementById("canteen").style.display === "none") {
                document.getElementById("canteen").style.display = "block";
                document.querySelector(".canteen").innerHTML = "arrow_drop_up";
              } else {
                document.getElementById("canteen").style.display = "none";
                document.querySelector(".canteen").innerHTML =
                  "arrow_drop_down";
              }
            }}
          >
            Canteen{" "}
            <span className="material-symbols-outlined canteen">
              arrow_drop_down
            </span>
          </h4>
        </div>
        <div id="church-1">
          <h4
            onClick={() => {
              if (document.getElementById("church").style.display === "none") {
                document.getElementById("church").style.display = "block";
                document.querySelector(".church").innerHTML = "arrow_drop_up";
              } else {
                document.getElementById("church").style.display = "none";
                document.querySelector(".church").innerHTML = "arrow_drop_down";
              }
            }}
          >
            Church{" "}
            <span className="material-symbols-outlined church">
              arrow_drop_down
            </span>
          </h4>
        </div>
      </div>
      <div className="location">
        <p id="stairs" className="stairs">
          <b>Here img will come</b><br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quaerat sunt molestiae quibusdam! Assumenda fuga esse, nisi modi
          facilis dolores suscipit fugiat repellat, recusandae repellendus
          dolore voluptates optio, deserunt minus!
        </p>
        <p id="canteen" className="canteen">
          <b>Here img will come</b><br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quaerat sunt molestiae quibusdam! Assumenda fuga esse, nisi modi
          facilis dolores suscipit fugiat repellat, recusandae repellendus
          dolore voluptates optio, deserunt minus!
        </p>
        <p id="church" className="church">
          <b>Here img will come</b><br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quaerat sunt molestiae quibusdam! Assumenda fuga esse, nisi modi
          facilis dolores suscipit fugiat repellat, recusandae repellendus
          dolore voluptates optio, deserunt minus!
        </p>
      </div>
      <div className="location">
        <div id="basketball-1">
          <h4
            onClick={() => {
              if (
                document.getElementById("basketball").style.display === "none"
              ) {
                document.getElementById("basketball").style.display = "block";
                document.querySelector(".basketball").innerHTML =
                  "arrow_drop_up";
              } else {
                document.getElementById("basketball").style.display = "none";
                document.querySelector(".basketball").innerHTML =
                  "arrow_drop_down";
              }
            }}
          >
            Basketball{" "}
            <span className="material-symbols-outlined basketball">
              arrow_drop_down
            </span>
          </h4>
        </div>
        <div id="physics_lab-1">
          <h4
            onClick={() => {
              if (
                document.getElementById("physics_lab").style.display === "none"
              ) {
                document.getElementById("physics_lab").style.display = "block";
                document.querySelector(".physics_lab").innerHTML =
                  "arrow_drop_up";
              } else {
                document.getElementById("physics_lab").style.display = "none";
                document.querySelector(".physics_lab").innerHTML =
                  "arrow_drop_down";
              }
            }}
          >
            Physics Lab{" "}
            <span className="material-symbols-outlined physics_lab">
              arrow_drop_down
            </span>
          </h4>
        </div>
        <div id="school_hall-1">
          <h4
            onClick={() => {
              if (
                document.getElementById("school_hall").style.display === "none"
              ) {
                document.getElementById("school_hall").style.display = "block";
                document.querySelector(".school_hall").innerHTML =
                  "arrow_drop_up";
              } else {
                document.getElementById("school_hall").style.display = "none";
                document.querySelector(".school_hall").innerHTML =
                  "arrow_drop_down";
              }
            }}
          >
            School Hall{" "}
            <span className="material-symbols-outlined school_hall">
              arrow_drop_down
            </span>
          </h4>
        </div>
      </div>
      <div className="location">
        <p id="basketball">
          <b>Here img will come</b><br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quaerat sunt molestiae quibusdam! Assumenda fuga esse, nisi modi
          facilis dolores suscipit fugiat repellat, recusandae repellendus
          dolore voluptates optio, deserunt minus!
        </p>
        <p id="physics_lab">
          <b>Here img will come</b><br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quaerat sunt molestiae quibusdam! Assumenda fuga esse, nisi modi
          facilis dolores suscipit fugiat repellat, recusandae repellendus
          dolore voluptates optio, deserunt minus!
        </p>
        <p id="school_hall">
          <b>Here img will come</b><br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quaerat sunt molestiae quibusdam! Assumenda fuga esse, nisi modi
          facilis dolores suscipit fugiat repellat, recusandae repellendus
          dolore voluptates optio, deserunt minus!
        </p>
      </div>
    </div>
  );
}
