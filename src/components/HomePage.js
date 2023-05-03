import React from "react";
import "./styles/Home.css";

export default function HomePage() {
  return (
    <div>
      <div className="about_us">
        <h3>About Us</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, at
        fugiat. At itaque repudiandae quibusdam veniam corporis harum! Totam,
        numquam, magni perferendis aut repellendus sit nobis ab eum quaerat
        minus voluptas modi voluptatibus laboriosam. Earum similique voluptate
        totam eius in explicabo aut, dolorem nemo voluptas! Neque omnis, enim a
        esse dolore natus dolores aliquam asperiores, quae molestiae accusantium
        nulla, nam ea officiis commodi laborum ipsa praesentium? Ex quos
        expedita aperiam est debitis, suscipit, quibusdam fugit esse molestias
        similique perferendis placeat error ipsum itaque totam natus architecto?
        Eos, laboriosam aperiam autem nihil a natus tempora, nisi nam doloribus
        placeat minus itaque.
      </div>
      <div className="location">
        <div className="stairs" style={{ backgroundColor: "red" }}>
          <h4
            onClick={() => {
              if (document.getElementById("stairs").style.display === "none")
                document.getElementById("stairs").style.display = "block";
              else document.getElementById("stairs").style.display = "none";
            }}
          >
            Stairs
          </h4>
        </div>
        <div className="stairs" style={{ backgroundColor: "red" }}>
          <h4
            onClick={() => {
              if (document.getElementById("canteen").style.display === "none")
                document.getElementById("canteen").style.display = "block";
              else document.getElementById("canteen").style.display = "none";
            }}
          >
            Canteen
          </h4>
        </div>
        <div className="stairs" style={{ backgroundColor: "red" }}>
          <h4
            onClick={() => {
              if (document.getElementById("church").style.display === "none")
                document.getElementById("church").style.display = "block";
              else document.getElementById("church").style.display = "none";
            }}
          >
            Church
          </h4>
        </div>
      </div>
      <p id="stairs">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        quaerat sunt molestiae quibusdam! Assumenda fuga esse, nisi modi facilis
        dolores suscipit fugiat repellat, recusandae repellendus dolore
        voluptates optio, deserunt minus!
      </p>
      <p id="canteen">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        quaerat sunt molestiae quibusdam! Assumenda fuga esse, nisi modi facilis
        dolores suscipit fugiat repellat, recusandae repellendus dolore
        voluptates optio, deserunt minus!
      </p>
      <p id="church">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        quaerat sunt molestiae quibusdam! Assumenda fuga esse, nisi modi facilis
        dolores suscipit fugiat repellat, recusandae repellendus dolore
        voluptates optio, deserunt minus!
      </p>
    </div>
  );
}
