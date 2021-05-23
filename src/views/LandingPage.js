import { useEffect } from "react";
import "./landing.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  useEffect(() => {
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const center = document.querySelector(".center");
    const container = document.querySelector(".container");
    left.addEventListener("mouseenter", () => {
      container.classList.add("hover-left");
    });

    left.addEventListener("mouseleave", () => {
      container.classList.remove("hover-left");
    });

    right.addEventListener("mouseenter", () => {
      container.classList.add("hover-right");
    });

    right.addEventListener("mouseleave", () => {
      container.classList.remove("hover-right");
    });

    center.addEventListener("mouseenter", () => {
      container.classList.add("hover-center");
    });

    center.addEventListener("mouseleave", () => {
      container.classList.remove("hover-center");
    });
  });

  return (
    <div class="container">
      <div class="split left">
        <h1>Contribute you data</h1>
        <Link to="/add" class="buttonLanding">
          Contribute
        </Link>
      </div>
      <div class="split center">
        <h1>Predict your symptoms</h1>
        <Link to="/prediction" class="buttonLanding">
          Predict
        </Link>
      </div>
      <div class="split right">
        <h1>Analyse statistical data</h1>
        <Link to="/stats" class="buttonLanding">
          Analyse
        </Link>
      </div>
    </div>
  );
}
