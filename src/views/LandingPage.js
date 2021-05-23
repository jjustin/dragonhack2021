import { useEffect } from "react";
import "./landing.css";

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
        <a href="/add" class="buttonLanding">
          Contribute
        </a>
      </div>
      <div class="split center">
        <h1>Predict your symptoms</h1>
        <a href="/prediction" class="buttonLanding">
          Predict
        </a>
      </div>
      <div class="split right">
        <h1>Analyse statistical data</h1>
        <a href="/stats" class="buttonLanding">
          Analyse
        </a>
      </div>
    </div>
  );
}
