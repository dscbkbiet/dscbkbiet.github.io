import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className="p-5 shadow-lg rounded-md bg-gray-300">
        <p className="text-6xl mb-3">{props.emo}</p>
        <p className="font-google mb-3 font-bold text-xl">{props.name}</p>
        <hr></hr>
        <p className="font-google mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
          eleifend erat, quis rhoncus lectus. Maecenas mattis ante in pulvinar
          venenatis. Ut vestibulum gravida quam, id porttitor lectus posuere eu.
          Curabitur imperdiet porta ligula, quis iaculis mi rhoncus vitae.
        </p>
        <button className="gdsc_btn"> Know more</button>
      </div>
    </>
  );
};

const Events = () => {
  return (
    <>
      <div className="stuff__container flex-col ">
        <span className="flex items-center w-full justify-center flex-col">
          <h1 className="font-semibold"> Events</h1>
          <p className="text-gray-500 text-lg">
            <i>Where the magic happens..</i>🧙‍♂️
          </p>
        </span>
        <span className="flex justify-evenly items-center space-x-10 mt-5">
          <Cards emo="🐉" name="Enter the Dragon" />
          <Cards emo="🦄" name="Way to become an Unicorn" />
          <Cards emo="🐐" name="A Goat Product" />
        </span>
      </div>
    </>
  );
};

export default Events;
