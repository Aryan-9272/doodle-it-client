import React, { useEffect, useContext } from "react";
import * as ml5 from "ml5";
import { CanvasContext } from "./App";

let doodleClassifier;

const Model = () => {
  const contextVal = useContext(CanvasContext);

  const predictResutls = (canvas) => {
    if (canvas != null) {
      doodleClassifier.classify(canvas, 345, (error, results) => {
        contextVal.setResult(results);
      });
    }
  };

  useEffect(() => {
    doodleClassifier = ml5.imageClassifier("DoodleNet", () => {});
  }, []);

  useEffect(() => {
    predictResutls(contextVal.canvas);
  }, [contextVal.canvas]);

  return <></>;
};

export default Model;
