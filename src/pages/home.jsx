import React from "react";
import { Link } from "react-router-dom";
import ButtonSession from "../Componnents/buttonSession";

const HomePage = () => {
  return (
     <section className="min-h-screen  bg-gradient-to-l from-dark to-mid">
      <h1 className="text-3xl md:text-4xl text-brand  text-center font-bold pt-5 md:pt-10">
        Welcome to TimeSlayer!
      </h1>
      <div className="w-3/4 mx-auto ">
      <div className="flex flex-col-reverse items-center   md:flex-row md:align-middle  p-10   ">
        <p className=" text-xl md:text-2xl mt-5 md:p-10 text-light  text-center ">
        TimeSlayer is a time management tool that uses Pomodoro techniques to
          help you increase productivity and achieve your goals.
          <br />
      <Link to="/pomodoro">
        <ButtonSession className={`bg-brand mt-10 `} activ name="Try it now" />
        </Link>
      </p>
      
     
        <img className="md:w-1/2" src="/test.jpeg "/>

      </div>
        </div>
    </section>
  );
};

export default HomePage;
