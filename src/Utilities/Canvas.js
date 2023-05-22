import React, { useRef, useContext } from "react";
import Sketch from "react-p5";
import { CanvasContext } from "../App";

let canvasWidth;
let canvasHeight;
let strokeWeight;

const findDim = () => {
  let canvasChanged = false;
  let prevWidth = canvasWidth;
  let prevHeight = canvasHeight;
  if (window.innerWidth >= 1280) {
    canvasWidth = 520;
    canvasHeight = 520;
    strokeWeight = 26;
  } else if (window.innerWidth >= 1024) {
    canvasWidth = 420;
    canvasHeight = 420;
    strokeWeight = 21;
  } else if (window.innerWidth >= 768) {
    canvasWidth = 550;
    canvasHeight = 550;
    strokeWeight = 27.5;
  } else if (window.innerWidth >= 640) {
    canvasWidth = 470;
    canvasHeight = 470;
    strokeWeight = 23.5;
  } else if (window.innerWidth < 640) {
    canvasWidth = 370;
    canvasHeight = 370;
    strokeWeight = 18.5;
  }
  if (prevWidth != canvasWidth && prevHeight != canvasHeight)
    canvasChanged = true;
  return canvasChanged;
};

export default (props) => {
  const submit = useRef(false);
  const img = useRef();
  const canvas = useRef();
  const inputImg = useRef();
  const contextVal = useContext(CanvasContext);

  const saveImage = (p5) => {
    let density = p5.pixelDensity();
    img.current = p5.createImage(canvasWidth * density, canvasHeight * density);
    img.current.copy(
      canvas.current,
      0,
      0,
      canvasWidth,
      canvasHeight,
      0,
      0,
      canvasWidth * density,
      canvasHeight * density
    );
    props.imgRef.current = img.current.canvas.toDataURL();
  };

  const filterImage = (p5) => {
    inputImg.current = p5.get();
    inputImg.current.loadPixels();
    for (let i = 0; i < inputImg.current.pixels.length; i += 4) {
      inputImg.current.pixels[i] = 255 - inputImg.current.pixels[i];
      inputImg.current.pixels[i + 1] = 255 - inputImg.current.pixels[i + 1];
      inputImg.current.pixels[i + 2] = 255 - inputImg.current.pixels[i + 2];
    }
    inputImg.current.updatePixels();
    contextVal.setCanvas(inputImg.current);
  };

  const setup = (p5, canvasParentRef) => {
    p5.noCanvas();
    findDim();
    canvas.current = p5
      .createCanvas(canvasWidth, canvasHeight)
      .parent(canvasParentRef);
    p5.background(0);
  };

  const draw = (p5) => {
    if (
      props.mode == "board" &&
      props.tool == "submit" &&
      submit.current == false
    ) {
      filterImage(p5);
      saveImage(p5);
      p5.image(img.current, 0, 0, canvasWidth, canvasHeight);
      submit.current = true;
    } else if (submit.current == false && props.tool == "reset") {
      p5.background(0);
    } else if (
      submit.current == false &&
      p5.mouseIsPressed &&
      p5.mouseX >= 0 &&
      p5.mouseX <= canvasWidth &&
      p5.mouseY >= 0 &&
      p5.mouseY <= canvasHeight &&
      (props.mode == "tutorial" || props.drawable.current)
    ) {
      p5.strokeWeight(strokeWeight);
      if (props.tool == "pen") p5.stroke(255, 255, 255);
      else if (props.tool == "eraser") p5.stroke(0, 0, 0);
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }

    if (props.mode == "tutorial" && props.tool == "next-word") {
      p5.background(0);
    } else if (props.mode == "tutorial") {
      filterImage(p5);
    }
  };

  const windowResized = (p5) => {
    if (findDim()) {
      if (submit.current == false) {
        p5.resizeCanvas(canvasWidth, canvasHeight);
        p5.background(0);
      } else {
        p5.resizeCanvas(canvasWidth, canvasHeight);
        p5.image(img.current, 0, 0, canvasWidth, canvasHeight);
      }
    }
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
