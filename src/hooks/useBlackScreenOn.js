import { useState } from "react";

// to use this hook assign elementStyle as a style of empty div
// when you call goBlack() function the screen will go black
// OPTIONAL! duration is time within screen go black (in ms)
// OPTIONAL! opacity value define how black screen goes. (1-max value, full black)
// OPTIONAL! zIndex value is optional

function useBlackScreenOn() {
  const [elementStyle, setElementStyle] = useState({
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 1)",
    zIndex: 5,
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    visibility: "hidden",
    opacity: 0,
  });

  function goBlack(duration = 1000, opacity = 1, zIndex = 5) {
    setElementStyle({
      position: "absolute",
      backgroundColor: `rgba(0, 0, 0, ${opacity})`,
      zIndex: zIndex,
      width: "100vw",
      height: "100vh",
      top: 0,
      left: 0,
      visibility: "visible",
      opacity: 1,
      transition: `${duration}ms ease-in`,
    });
  }
  return [elementStyle, goBlack];
}

export default useBlackScreenOn;
