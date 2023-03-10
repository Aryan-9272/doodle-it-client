import React, { useEffect, useContext } from "react";
import * as ml5 from "ml5";
import { CanvasContext } from "./App";

let doodleClassifier;

const Model = (props) => {
  const contextVal = useContext(CanvasContext);

  const predictResutls = (canvas) => {
    if (canvas!= null) {
      doodleClassifier.classify(canvas, 345, (error, results) => {
        props.setResult(results);
      });
    }
  };

  useEffect(() => {
    doodleClassifier = ml5.imageClassifier("DoodleNet", () => {
    });
  }, []);
  predictResutls(contextVal.canvas);
  return <></>;
};

export default Model;
