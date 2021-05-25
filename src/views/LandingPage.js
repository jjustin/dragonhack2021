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
      <Link to="/add" class="split left buttonLanding">
        <h1>Contribute you data</h1>
      </Link>
      <Link to="/prediction" class="split center buttonLanding">
        <h1>Predict your symptoms</h1>
      </Link>
      <Link to="/stats" class="split right buttonLanding">
        <h1>Analyse statistical data</h1>
      </Link>
    </div>
  );
}
