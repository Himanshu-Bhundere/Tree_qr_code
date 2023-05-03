import React from "react";
import "./Home.css";

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
        <div style={{ backgroundColor: "red" }}>
          <h4 onClick={
            () => {
              if(document.getElementById("stairs").style.display === "none")
                document.getElementById("stairs").style.display = 'block';
              else
                document.getElementById("stairs").style.display = "none";
            }
          }
          >Stairs <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
          <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
        </svg>
          </h4>
          
        </div>
        <div style={{ backgroundColor: "red" }}>
          <h4 onClick={
            () => {
              if(document.getElementById("canteen").style.display === "none")
                document.getElementById("canteen").style.display = 'block';
              else
                document.getElementById("canteen").style.display = "none";
            }
          }>Canteen <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
          <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
        </svg></h4>
        </div>
        <div style={{ backgroundColor: "red" }}>
        <h4 onClick={
            () => {
              if(document.getElementById("church").style.display === "none")
                document.getElementById("church").style.display = 'block';
              else
                document.getElementById("church").style.display = "none";
            }
          }>Church <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
          <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
        </svg></h4>
        </div>
        <div style={{ backgroundColor: "red" }}>
        <h4 onClick={
            () => {
              if(document.getElementById("church").style.display === "none")
                document.getElementById("church").style.display = 'block';
              else
                document.getElementById("church").style.display = "none";
            }
          }>Church <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
          <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
        </svg></h4>
        </div>
        <div style={{ backgroundColor: "red" }}>
        <h4 onClick={
            () => {
              if(document.getElementById("church").style.display === "none")
                document.getElementById("church").style.display = 'block';
              else
                document.getElementById("church").style.display = "none";
            }
          }>Church <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
          <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
        </svg></h4>
        </div>
        <div style={{ backgroundColor: "red" }}>
        <h4 onClick={
            () => {
              if(document.getElementById("church").style.display === "none")
                document.getElementById("church").style.display = 'block';
              else
                document.getElementById("church").style.display = "none";
            }
          }>Church <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-square" viewBox="0 0 16 16">
          <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"/>
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
        </svg></h4>
        </div>
      </div>
      <p id="stairs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium quaerat sunt molestiae quibusdam! Assumenda fuga esse,
            nisi modi facilis dolores suscipit fugiat repellat, recusandae
            repellendus dolore voluptates optio, deserunt minus!
          </p>
          <p id="canteen">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium quaerat sunt molestiae quibusdam! Assumenda fuga esse,
            nisi modi facilis dolores suscipit fugiat repellat, recusandae
            repellendus dolore voluptates optio, deserunt minus!
          </p>
      <p id="church">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium quaerat sunt molestiae quibusdam! Assumenda fuga esse,
            nisi modi facilis dolores suscipit fugiat repellat, recusandae
            repellendus dolore voluptates optio, deserunt minus!
          </p>
    </div>
    
  );
  
}
