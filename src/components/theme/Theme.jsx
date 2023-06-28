import React, { useEffect, useRef } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import "./theme.css";
const Theme = () => {
  const moonRef = useRef();
  const sunRef = useRef();
  const getTheme = localStorage.getItem("whichTheme")
    ? JSON.parse(localStorage.getItem("whichTheme"))
    : [];
  if (getTheme.length === 0) {
    localStorage.setItem("whichTheme", JSON.stringify([{ themeIs: "dark" }]));
  }
  const documentRef = useRef(document);
  useEffect(() => {
    if (getTheme.length === 1) {
      if (getTheme[0].themeIs === "light") {
        sunRef.current.classList.add("current-theme");
        moonRef.current.classList.remove("current-theme");
        documentRef.current.body.classList.add("white");
      } else if (getTheme[0].themeIs === "dark") {
        moonRef.current.classList.add("current-theme");
        sunRef.current.classList.remove("current-theme");
        documentRef.current.body.classList.remove("white");
      }
    }
  }, []);

  const toMoon = () => {
    documentRef.current.body.classList.remove("white");
    moonRef.current.classList.add("current-theme");
    sunRef.current.classList.remove("current-theme");

    localStorage.setItem("whichTheme", JSON.stringify([{ themeIs: "dark" }]));
  };
  const toSun = () => {
    sunRef.current.classList.add("current-theme");
    documentRef.current.body.classList.add("white");
    moonRef.current.classList.remove("current-theme");
    localStorage.setItem("whichTheme", JSON.stringify([{ themeIs: "light" }]));
  };

  return (
    <div className="theme border-left">
      <button className="buttons">
        <div ref={moonRef} id="moon" onClick={toMoon}>
          <FaMoon />
        </div>
        <div ref={sunRef} id="sun" onClick={toSun}>
          <FaSun />
        </div>
      </button>
    </div>
  );
};

export default Theme;
