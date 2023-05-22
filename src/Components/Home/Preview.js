import React, { useState, useEffect, useRef } from "react";
import practice from "../../assets/practice.png";
import score from "../../assets/score.png";
import result from "../../assets/result.png";
import chat from "../../assets/chats.png";
import room from "../../assets/room.png";
import device from "../../assets/device.png";
import PrevImg from "./PrevImg";

const desc = [
  "SKETCH, SCORE AND COMPETE WITH FRIENDS USING THE POWER OF AI",
  "IMPROVISE YOURSELF THROUGH PRACTICE",
  "CREATE ROOMS, INVITE FRIENDS AND ENJOY THE THRILL",
  "ENGAGE IN LIVELY CONVERSATIONS AND CONNECT WITH FRIENDS",
  "COMPARE YOUR SUBMISSIONS AND STRIVE FOR THE TOP SPOT",
  "EXPERIENCE THE JOY OF DOODLE-IT ON ANY DEVICE",
];

const Preview = () => {
  const ImgRef = useRef([result, practice, room, chat, score, device]);
  const [imgDesc, setImgDesc] = useState(0);
  const [imgArr, setImgArr] = useState(
    ImgRef.current.map((element, index, array) => {
      return (
        <PrevImg key={index} img={element} anim={""} z={array.length - index} />
      );
    })
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setImgArr(
        ImgRef.current.map((element, index, array) => {
          if (index === 0)
            return (
              <PrevImg
                key={index}
                img={element}
                anim={"fade-anim"}
                z={array.length - index}
              />
            );
          else
            return (
              <PrevImg
                key={index}
                img={element}
                anim={""}
                z={array.length - index}
              />
            );
        })
      );
      setImgDesc((prev) => {
        return (prev + 1) % 6;
      });
      setTimeout(() => {
        ImgRef.current = ImgRef.current.map((element, index, arr) => {
          if (index != arr.length - 1) return arr[index + 1];
          else return arr[0];
        });
        setImgArr(
          ImgRef.current.map((element, index, array) => {
            return (
              <PrevImg
                key={index}
                img={element}
                anim={""}
                z={array.length - index}
              />
            );
          })
        );
      }, 1000);
    }, 4500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-full grid grid-rows-[7%_85%_8%] text-white">
      <div
        className="flex justify-center items-center text-sm
      md:text-xl
      lg:text-lg
      xl:text-xl"
      >
        PREVIEW
      </div>

      <div className="row-start-2 row-span-1 flex justify-center items-center border-t-[1px] border-b-[1px] border-white bg-gradient-to-t from-slate-900 to-black relative">
        {imgArr}
      </div>
      <div
        className="flex justify-center items-center text-[0.65rem]
        sm:text-[0.7rem]
        md:text-[0.8rem]
        lg:text-[0.85rem]
        xl:text-[0.95rem]"
      >
        {desc[imgDesc]}
      </div>
    </div>
  );
};

export default Preview;
