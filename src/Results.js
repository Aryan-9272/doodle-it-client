import React, { useState, useEffect } from "react";

const Results = (props) => {
  const MakeCards = (results) => {
    return results.map((result, index) => {
      return (
        <div
          key={index}
          className="h-[12.1rem] bg-black/10 border-[1px] border-white flex justify-center items-center flex-col hover:cursor-pointer
            sm:h-[15rem]
            md:h-[17.5rem]
            lg:h-[14rem]
            xl:h-[17rem]"
          onClick={() => {
            props.setReport(result);
            props.setComponent("Report");
          }}
        >
          <div className="w-full h-[10%] flex justify-center items-center border-b-[1px] bg-white gap-2">
            <img
              src={result.avatar}
              className="h-[75%] rounded-full border-[1px] border-black"
            />
            <h1
              className="text-[0.7rem]
              sm:text-[0.8rem]
              md:text-[1rem]
              lg:text-[0.9rem]
              xl:text-[1rem]"
            >
              {result.name}
            </h1>
          </div>
          <div className="w-full h-[80%] bg-black">
            <img src={result.drawing} className="w-[100%] h-[100%]" />
          </div>
          <div
            className="w-full h-[10%] flex justify-between items-center border-b-[1px] bg-white px-2
            text-[0.7rem]
            sm:text-[0.8rem]
            md:text-[1rem]
            lg:text-[0.9rem] lg:px-[5px]
            xl:text-[1rem] xl:px-2"
          >
            <h1>RANK : {result.rank}</h1>
            <h1>POINTS : +{result.points}</h1>
          </div>
        </div>
      );
    });
  };
  const [resultCards, setResultCards] = useState([]);
  useEffect(() => {
    setResultCards(MakeCards(props.results));
  }, []);

  return (
    <>
      <div
        className="border-white border-[1px] min-w-[372px] min-h-[470px] w-[372px] h-[470px] relative bg-gray-900/50 z-[5] flex justify-center items-center flex-col
        sm:w-[472px] sm:h-[570px]
        md:w-[552px] md:h-[650px]
        lg:w-[422px] lg:h-[520px] lg:ml-2
        xl:w-[522px] xl:h-[620px] xl:ml-3"
      >
        <div
          className="col-span-2 border-b-[1px] text-white text-[1.5rem] flex justify-center items-center bg-black/70 w-full h-[10%]
        sm:text-[1.8rem]
        md:text-[2.3rem]
        lg:text-[1.9rem]
        xl:text-[2.2rem]"
        >
          SCOREBOARD
        </div>

        <div className="scoreboard w-full h-[80%] grid grid-cols-2 p-3 gap-3 overflow-y-scroll">
          {resultCards}
        </div>
        <div
          className="col-span-2 border-t-[1px] text-white text-[1.5rem] flex justify-center items-center bg-black/70 w-full h-[10%]
        hover:bg-white hover:text-black duration-300  cursor-pointer
        sm:text-[1.8rem]
        md:text-[2.3rem]
        lg:text-[1.9rem]
        xl:text-[2.2rem]"
        >
          CONTINUE
        </div>
      </div>
    </>
  );
};

export default Results;
