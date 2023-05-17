import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

const About = () => {
  return (
    <div
      className="w-full min-h-[52rem] h-screen bg-gradient-to-t from-slate-900 to-black absolute
    sm:min-h-[55rem]
    md:min-h-[62rem]
    lg:min-h-[50rem]
    xl:min-h-[55rem]"
    >
      <Header />
      <div
        className="w-[24rem] h-[33rem] border-white border-solid border-[1px] relative top-12 mx-auto bg-black text-white players overflow-y-auto p-3 text-xl
      sm:w-[27rem] sm:h-[35rem] sm:top-14
      md:w-[30rem] md:h-[40rem] md:top-20
      lg:w-[32rem] lg:h-[32rem] lg:top-12
      xl:w-[36rem] xl:h-[36rem]"
      >
        DOODLE-IT is an engaging online game that unleashes player's creativity
        and competitive spirit. In this app, users can create and join rooms to
        compete against each other by drawing doodles based on given words.
        <br />
        <br />
        The DOODLE-IT app utilizes the advanced DoodleNet model, built using
        Google's Quick, Draw! dataset, to assess and assign scores to the
        doodles created by the players. DoodleNet evaluates various aspects of
        the drawings, such as shape, lines, and details, ensuring accurate and
        comprehensive assessments.
        <br />
        <br />
        To facilitate real-time communication and connectivity, the app
        leverages the socket.io framework on the server side. This ensures a
        seamless and responsive experience, allowing players to easily connect,
        engage, and stay updated with the latest events in their game rooms.
        <br />
        <br />
        Discover the magic of DOODLE-IT today, an extraordinary app that was
        built using React, p5.js, ml5.js and socket.io. Unleash your
        imagination, showcase your artistic prowess, and embark on an
        unforgettable doodling adventure!
        <br />
        <br />
        <a href="https://github.com/yining1023/doodleNet" target="_blank">
          <h1 className="w-full bg-white p-1 text-black text-2xl text-center transition-opacity duration-500 hover:opacity-80 hover:cursor-pointer">
            Learn more about DoodleNet
          </h1>
        </a>
        <br />
        <a href="https://quickdraw.withgoogle.com/data" target="_blank">
          <h1 className="w-full bg-white p-1 text-black text-2xl text-center transition-opacity duration-500 hover:opacity-80 hover:cursor-pointer">
            Learn more about Quick, Draw!
          </h1>
        </a>
      </div>
      <Footer />
      <Loader duration={1000} />
    </div>
  );
};

export default About;
